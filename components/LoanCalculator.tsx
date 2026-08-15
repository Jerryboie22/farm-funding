"use client";

import { useMemo, useState, type CSSProperties } from "react";
import Link from "next/link";
import "./farm-loan-calculator.css";

type Frequency = {
  value: string;
  label: string;
  periodsPerYear: number;
};

type CalculationMode = "payment" | "amount";

type ScheduleRow = {
  period: number;
  balance: number;
  principalPaid: number;
  interestPaid: number;
};

type YearlyRow = ScheduleRow;

type Definition = {
  title: string;
  body: string;
};

const FREQUENCIES: Frequency[] = [
  { value: "12", label: "Monthly", periodsPerYear: 12 },
  { value: "4", label: "Quarterly", periodsPerYear: 4 },
  { value: "2", label: "Semi-annual", periodsPerYear: 2 },
  { value: "1", label: "Annual", periodsPerYear: 1 },
];

const DEFAULTS = {
  loanAmount: 9750,
  interestRate: 13.24,
  payments: 60,
  frequency: "12",
  payment: 242.43,
};

const DEFINITIONS: Record<string, Definition> = {
  loanAmount: {
    title: "Loan amount",
    body: "Total amount of your loan.",
  },
  payment: {
    title: "Payment",
    body: "Payment for this loan.",
  },
  interestRate: {
    title: "Interest rate",
    body: "Annual interest rate for this loan. Interest is calculated each period on the current outstanding balance of your loan. The periodic rate is your annual rate divided by the number of periods per year.",
  },
  payments: {
    title: "Number of payments",
    body: "Number of payments for this loan.",
  },
  frequency: {
    title: "Payment frequency",
    body: "Choose how often payments will be made. The options are monthly (12 payments per year), quarterly (4 payments per year), semi-annual (2 payments per year), and annually (1 payment per year).",
  },
  interestPaid: {
    title: "Interest paid",
    body: "Total amount of interest that will be paid on this loan. This assumes all payments are made as scheduled and there are no prepayments of principal.",
  },
  totalPayments: {
    title: "Total payments",
    body: "Total of all payments for this loan. This includes principal and interest and assumes all payments are made as scheduled.",
  },
  menu: {
    title: "Additional Functions",
    body: "Use this menu to reset the calculator, clear fields, copy a link to the current calculation, or email the results.",
  },
};

const DEFINITION_ORDER = [
  "loanAmount",
  "payment",
  "interestRate",
  "payments",
  "frequency",
  "interestPaid",
  "totalPayments",
] as const;

const AMOUNT_MAX = 1_000_000;
const RATE_MAX = 36;
const PAYMENTS_MAX = 480;
const AMOUNT_POWER = 4;

function round2(value: number) {
  return Math.round(value * 100) / 100;
}

function formatMoney(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);
}

const THOUSANDS_SCALE_THRESHOLD = 10_000;

function formatAxisValue(value: number, useThousandsScale: boolean) {
  const displayValue = useThousandsScale ? value / 1000 : value;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Number.isFinite(displayValue) ? displayValue : 0);
}

function calculatePayment(
  principal: number,
  annualRate: number,
  term: number,
  periodsPerYear: number
) {
  if (principal <= 0 || term <= 0) return 0;

  const periodicRate = annualRate / 100 / periodsPerYear;

  if (periodicRate === 0) return round2(principal / term);

  const payment =
    (principal * periodicRate) / (1 - Math.pow(1 + periodicRate, -term));

  return round2(payment);
}

function calculatePrincipal(
  payment: number,
  annualRate: number,
  term: number,
  periodsPerYear: number
) {
  if (payment <= 0 || term <= 0) return 0;

  const periodicRate = annualRate / 100 / periodsPerYear;

  if (periodicRate === 0) return round2(payment * term);

  return round2(
    payment * ((1 - Math.pow(1 + periodicRate, -term)) / periodicRate)
  );
}

function buildSchedule(
  principal: number,
  annualRate: number,
  term: number,
  periodsPerYear: number,
  payment: number
): ScheduleRow[] {
  if (principal <= 0 || term <= 0 || payment <= 0) return [];

  const periodicRate = annualRate / 100 / periodsPerYear;
  const rows: ScheduleRow[] = [];

  let balance = round2(principal);

  for (let period = 1; period <= term; period += 1) {
    const interestPaid = round2(balance * periodicRate);
    let principalPaid = round2(payment - interestPaid);

    if (period === term || principalPaid > balance) {
      principalPaid = balance;
    }

    principalPaid = Math.max(0, principalPaid);
    balance = round2(Math.max(0, balance - principalPaid));

    rows.push({ period, balance, principalPaid, interestPaid });
  }

  return rows;
}

function aggregateByYear(
  schedule: ScheduleRow[],
  periodsPerYear: number
): YearlyRow[] {
  if (!schedule.length || periodsPerYear <= 0) return [];

  const years: YearlyRow[] = [];

  let year = 1;
  let principalPaid = 0;
  let interestPaid = 0;

  schedule.forEach((row, index) => {
    principalPaid += row.principalPaid;
    interestPaid += row.interestPaid;

    const isYearEnd = (index + 1) % periodsPerYear === 0;
    const isLast = index === schedule.length - 1;

    if (isYearEnd || isLast) {
      years.push({
        period: year,
        balance: row.balance,
        principalPaid: round2(principalPaid),
        interestPaid: round2(interestPaid),
      });

      year += 1;
      principalPaid = 0;
      interestPaid = 0;
    }
  });

  return years;
}

function computeNiceScale(maxValue: number, targetTicks = 10) {
  const safeMax = Math.max(maxValue, 1);
  const rawStep = safeMax / targetTicks;

  const magnitude = Math.pow(10, Math.floor(Math.log10(rawStep)));
  const residual = rawStep / magnitude;

  let niceResidual = 10;

  if (residual <= 1) niceResidual = 1;
  else if (residual <= 2) niceResidual = 2;
  else if (residual <= 2.5) niceResidual = 2.5;
  else if (residual <= 5) niceResidual = 5;

  const step = niceResidual * magnitude;
  const tickCount = Math.max(1, Math.ceil(safeMax / step));
  const axisMax = step * tickCount;

  const ticks = Array.from({ length: tickCount + 1 }, (_, index) =>
    Math.round(step * index)
  );

  return { step, axisMax, ticks };
}

function pickTickStep(term: number, target = 30) {
  return Math.max(1, Math.round(term / target));
}

function amountToPercent(value: number) {
  if (value <= 0) return 0;

  return Math.pow(value / AMOUNT_MAX, 1 / AMOUNT_POWER) * 100;
}

function percentToAmount(percent: number) {
  return AMOUNT_MAX * Math.pow(percent / 100, AMOUNT_POWER);
}

/* -------------------------------------------------------------------------- */
/* Definition button                                                          */
/* -------------------------------------------------------------------------- */

function DefinitionButton({ definition }: { id: string; definition: Definition }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="kje-def-anchor">
      <button
        type="button"
        className="kje-definition-icon"
        aria-label={`Define ${definition.title}`}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        ?
      </button>

      {open && (
        <div className="kje-definition-popover" role="dialog" aria-label={definition.title}>
          <h3>{definition.title}</h3>
          <p>{definition.body}</p>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Amount field (editable loan amount, with nonlinear slider)                 */
/* -------------------------------------------------------------------------- */

function AmountField({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  const percent = Math.round(amountToPercent(value) * 10000) / 10000;

  function updateValue(next: number) {
    onChange(Math.min(AMOUNT_MAX, Math.max(0, Number.isFinite(next) ? next : 0)));
  }

  return (
    <div className="kje-input-row">
      <div className="kje-label-row">
        <label htmlFor="KJE-LOAN_AMOUNT">
          Loan amount
          <span className="kje-required">*</span>
        </label>

        <DefinitionButton id="LOAN_AMOUNT" definition={DEFINITIONS.loanAmount} />
      </div>

      <div className="kje-control">
        <div className="kje-number-wrap">
          <span>$</span>

          <input
            id="KJE-LOAN_AMOUNT"
            type="text"
            inputMode="decimal"
            className="kje-number"
            value={value.toLocaleString("en-US")}
            onChange={(event) => {
              const cleaned = event.target.value.replace(/[^0-9.]/g, "");
              updateValue(Number(cleaned));
            }}
          />
        </div>

        <div className="kje-slider-wrap">
          <div className="kje-scale">
            <span className="left">$0</span>
            <span>$10k</span>
            <span>$100k</span>
            <span className="right">$1m</span>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            step="0.1"
            className="kje-range"
            value={percent}
            aria-label="Loan amount slider"
            style={{ "--kje-progress": `${percent}%` } as CSSProperties}
            onChange={(event) =>
              updateValue(Math.round(percentToAmount(Number(event.target.value))))
            }
          />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Payment field (editable payment, no slider - matches the reference layout) */
/* -------------------------------------------------------------------------- */

function PaymentInputField({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  function updateValue(next: number) {
    onChange(Math.max(0, Number.isFinite(next) ? next : 0));
  }

  return (
    <div className="kje-input-row">
      <div className="kje-label-row">
        <label htmlFor="KJE-PAYMENT">
          Payment
          <span className="kje-required">*</span>
        </label>

        <DefinitionButton id="PAYMENT" definition={DEFINITIONS.payment} />
      </div>

      <div className="kje-control kje-control-single">
        <div className="kje-number-wrap">
          <span>$</span>

          <input
            id="KJE-PAYMENT"
            type="text"
            inputMode="decimal"
            className="kje-number"
            value={value.toLocaleString("en-US", { maximumFractionDigits: 2 })}
            onChange={(event) => {
              const cleaned = event.target.value.replace(/[^0-9.]/g, "");
              updateValue(Number(cleaned));
            }}
          />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Standard field                                                             */
/* -------------------------------------------------------------------------- */

function NumberSliderField({
  id,
  label,
  value,
  min,
  max,
  step,
  suffix,
  scales,
  definition,
  onChange,
}: {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix?: string;
  scales: string[];
  definition: Definition;
  onChange: (value: number) => void;
}) {
  const percent =
    max === min ? 0 : Math.round(((value - min) / (max - min)) * 100 * 10000) / 10000;

  return (
    <div className="kje-input-row">
      <div className="kje-label-row">
        <label htmlFor={`KJE-${id}`}>
          {label}
          <span className="kje-required">*</span>
        </label>

        <DefinitionButton id={id} definition={definition} />
      </div>

      <div className="kje-control">
        <div className="kje-number-wrap">
          <input
            id={`KJE-${id}`}
            type="number"
            className="kje-number"
            value={value}
            min={min}
            max={max}
            step={step}
            onChange={(event) => {
              const next = Number(event.target.value);
              onChange(Math.min(max, Math.max(min, Number.isFinite(next) ? next : min)));
            }}
          />

          {suffix && <span>{suffix}</span>}
        </div>

        <div className="kje-slider-wrap">
          <div className="kje-scale">
            {scales.map((scale, index) => (
              <span
                key={scale}
                className={index === 0 ? "left" : index === scales.length - 1 ? "right" : ""}
              >
                {scale}
              </span>
            ))}
          </div>

          <input
            type="range"
            min={min}
            max={max}
            step={step}
            className="kje-range"
            value={value}
            aria-label={`${label} slider`}
            style={{ "--kje-progress": `${percent}%` } as CSSProperties}
            onChange={(event) => onChange(Number(event.target.value))}
          />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Output field (read-only result row)                                       */
/* -------------------------------------------------------------------------- */

function OutputField({
  label,
  value,
  definition,
  bold = false,
}: {
  label: string;
  value: string;
  definition: Definition;
  bold?: boolean;
}) {
  return (
    <div className="kje-input-row">
      <div className={`kje-label-row ${bold ? "bold" : ""}`}>
        <span>{label}:</span>
        <DefinitionButton id={label.replace(/\s+/g, "-").toLowerCase()} definition={definition} />
      </div>

      {bold ? (
        <div className="kje-output-value">{value}</div>
      ) : (
        <div className="kje-control kje-control-single">
          <input
            type="text"
            readOnly
            disabled
            value={value}
            className="kje-result-input"
            aria-label={label}
          />
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Balance chart                                                              */
/* Plots every payment period (not just year-end points) so the curve is a   */
/* smooth continuous decay like the reference, instead of straight segments  */
/* between 5-6 yearly points. Year-number tick labels are derived from       */
/* periodsPerYear rather than assuming period === year.                      */
/* -------------------------------------------------------------------------- */

function BalanceChart({
  schedule,
  principal,
  periodsPerYear,
  embedded = false,
}: {
  schedule: ScheduleRow[];
  principal: number;
  periodsPerYear: number;
  embedded?: boolean;
}) {
  const width = 1000;
  const height = 300;
  const term = schedule.length;

  const { axisMax, ticks } = computeNiceScale(principal);
  const useThousandsScale = axisMax >= THOUSANDS_SCALE_THRESHOLD;

  const padding = {
    top: 10,
    right: 10,
    bottom: 30,
    left: useThousandsScale ? 70 : 58,
  };

  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const xFor = (period: number) =>
    padding.left + (chartWidth * (period - 1)) / Math.max(1, term - 1);

  const yFor = (balance: number) =>
    padding.top + chartHeight - (chartHeight * balance) / axisMax;

  const points = schedule.map((row) => `${xFor(row.period)},${yFor(row.balance)}`);

  const areaPath =
    schedule.length > 0
      ? `M${xFor(1)},${yFor(principal)} L${points.join(" L")} L${xFor(term)},${
          padding.top + chartHeight
        } L${xFor(1)},${padding.top + chartHeight} Z`
      : "";

  const safePeriodsPerYear = Math.max(1, periodsPerYear);
  const yearTicks = schedule
    .map((row) => row.period)
    .filter((period) => period % safePeriodsPerYear === 0 || period === term);

  const chartBottom = padding.top + chartHeight;
  const labelY = chartBottom + 16;
  const titleY = chartBottom + 32;

  return (
    <div className="kje-chart-block">
      {!embedded && (
        <h3 className="kje-chart-title">Balances for a {formatMoney(principal)} loan</h3>
      )}

      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="kje-chart-svg"
        role="img"
        aria-label="Loan balance over time"
      >
        {ticks.map((tick) => {
          const y = yFor(tick);

          return (
            <g key={tick}>
              <line
                x1={padding.left}
                x2={width - padding.right}
                y1={y}
                y2={y}
                className="kje-chart-gridline"
              />

              <text
                x={padding.left - 10}
                y={y}
                textAnchor="end"
                dominantBaseline="middle"
                className="kje-chart-axis-label"
              >
                {formatAxisValue(tick, useThousandsScale)}
              </text>
            </g>
          );
        })}

        {areaPath && <path d={areaPath} className="kje-chart-area" />}

        {yearTicks.map((period) => (
          <text
            key={period}
            x={xFor(period)}
            y={labelY}
            textAnchor="middle"
            className="kje-chart-axis-label"
          >
            {Math.round(period / safePeriodsPerYear)}
          </text>
        ))}

        <text
          x={padding.left + chartWidth / 2}
          y={titleY}
          textAnchor="middle"
          className="kje-chart-axis-title"
        >
          Year Number
        </text>

        {useThousandsScale && (
          <text
            x={-(padding.top + chartHeight / 2)}
            y={16}
            textAnchor="middle"
            transform="rotate(-90)"
            className="kje-chart-axis-title"
          >
            Thousands of Dollars
          </text>
        )}
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Principal / interest chart                                                 */
/* -------------------------------------------------------------------------- */

function PrincipalInterestChart({
  schedule,
  embedded = false,
}: {
  schedule: YearlyRow[];
  embedded?: boolean;
}) {
  const width = 1000;
  const height = 320;
  const term = schedule.length;

  const maxValue = schedule.reduce(
    (max, row) => Math.max(max, row.principalPaid + row.interestPaid),
    1
  );

  const { axisMax, ticks } = computeNiceScale(maxValue);
  const useThousandsScale = axisMax >= THOUSANDS_SCALE_THRESHOLD;

  const padding = {
    top: 10,
    right: 10,
    bottom: 42,
    left: useThousandsScale ? 70 : 58,
  };

  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const slot = term > 0 ? chartWidth / term : 0;
  const barGap = slot * 0.28;
  const barWidth = Math.max(0, slot - barGap);

  const xFor = (period: number) => padding.left + (period - 1) * slot + barGap / 2;
  const scaleY = (value: number) => (chartHeight * value) / axisMax;

  const tickStep = pickTickStep(term);
  const xTicks = schedule
    .map((row) => row.period)
    .filter((period) => period === 1 || (period - 1) % tickStep === 0 || period === term);

  const chartBottom = padding.top + chartHeight;
  const labelY = chartBottom + 16;
  const titleY = chartBottom + 34;

  return (
    <div className="kje-chart-block">
      {!embedded && <h3 className="kje-chart-title">Total Principal and Interest by Year</h3>}

      <div className="kje-chart-row">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="kje-chart-svg"
          role="img"
          aria-label="Principal and interest per year"
        >
          {ticks.map((tick) => {
            const y = padding.top + chartHeight - scaleY(tick);

            return (
              <g key={tick}>
                <line
                  x1={padding.left}
                  x2={width - padding.right}
                  y1={y}
                  y2={y}
                  className="kje-chart-gridline"
                />

                <text
                  x={padding.left - 10}
                  y={y}
                  textAnchor="end"
                  dominantBaseline="middle"
                  className="kje-chart-axis-label"
                >
                  {formatAxisValue(tick, useThousandsScale)}
                </text>
              </g>
            );
          })}

          {schedule.map((row) => {
            const interestHeight = scaleY(row.interestPaid);
            const principalHeight = scaleY(row.principalPaid);
            const x = xFor(row.period);
            const baseY = padding.top + chartHeight;

            return (
              <g key={row.period}>
                <rect
                  x={x}
                  y={baseY - interestHeight}
                  width={barWidth}
                  height={interestHeight}
                  className="kje-chart-bar-interest"
                />

                <rect
                  x={x}
                  y={baseY - interestHeight - principalHeight}
                  width={barWidth}
                  height={principalHeight}
                  className="kje-chart-bar-principal"
                />
              </g>
            );
          })}

          {xTicks.map((period) => (
            <text
              key={period}
              x={xFor(period) + barWidth / 2}
              y={labelY}
              textAnchor="middle"
              className="kje-chart-axis-label"
            >
              {period}
            </text>
          ))}

          <text
            x={padding.left + chartWidth / 2}
            y={titleY}
            textAnchor="middle"
            className="kje-chart-axis-title"
          >
            Year Number
          </text>

          {useThousandsScale && (
            <text
              x={-(padding.top + chartHeight / 2)}
              y={16}
              textAnchor="middle"
              transform="rotate(-90)"
              className="kje-chart-axis-title"
            >
              Thousands of Dollars
            </text>
          )}
        </svg>

        <div className="kje-chart-legend">
          <span className="kje-chart-legend-item">
            <span className="kje-chart-legend-swatch kje-chart-legend-principal" />
            Principal
          </span>

          <span className="kje-chart-legend-item">
            <span className="kje-chart-legend-swatch kje-chart-legend-interest" />
            Interest
          </span>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Payment schedule                                                           */
/* Row shading matches the reference exactly: the blank opening row is Odd,  */
/* period 1 is Even, period 2 is Odd, etc. — i.e. odd period numbers get the  */
/* "even" class and even period numbers get the "odd" class.                 */
/* -------------------------------------------------------------------------- */

function PaymentScheduleTable({
  schedule,
  principal,
}: {
  schedule: ScheduleRow[];
  principal: number;
}) {
  return (
    <div className="kje-schedule-wrap">
      <table className="kje-schedule-table">
        <caption className="sr-only">Payment Schedule</caption>

        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Payment</th>
            <th scope="col">Principal</th>
            <th scope="col">Interest</th>
            <th scope="col">Loan balance</th>
          </tr>
        </thead>

        <tbody>
          <tr className="kje-schedule-odd">
            <td />
            <td />
            <td />
            <td />
            <td>{formatMoney(principal)}</td>
          </tr>

          {schedule.map((row) => (
            <tr
              key={row.period}
              className={row.period % 2 === 0 ? "kje-schedule-odd" : "kje-schedule-even"}
            >
              <th scope="row">{row.period}</th>
              <td>{formatMoney(row.principalPaid + row.interestPaid)}</td>
              <td>{formatMoney(row.principalPaid)}</td>
              <td>{formatMoney(row.interestPaid)}</td>
              <td>{formatMoney(row.balance)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Definitions                                                                */
/* -------------------------------------------------------------------------- */

function DefinitionsSection() {
  return (
    <section className="kje-definitions-block">
      <h3 className="kje-definitions-title">Definitions</h3>

      {DEFINITION_ORDER.map((key) => {
        const definition = DEFINITIONS[key];

        return (
          <article key={key} className="kje-definition-entry">
            <h4>{definition.title}</h4>
            <p>{definition.body}</p>
          </article>
        );
      })}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Main component                                                             */
/* -------------------------------------------------------------------------- */

export default function LoanCalculator() {
  const [mode, setMode] = useState<CalculationMode>("payment");
  const [loanAmount, setLoanAmount] = useState(DEFAULTS.loanAmount);
  const [interestRate, setInterestRate] = useState(DEFAULTS.interestRate);
  const [payments, setPayments] = useState(DEFAULTS.payments);
  const [payment, setPayment] = useState(DEFAULTS.payment);
  const [frequency, setFrequency] = useState(DEFAULTS.frequency);

  const [menuOpen, setMenuOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [inputsOpen, setInputsOpen] = useState(true);
  const [balanceOpen, setBalanceOpen] = useState(true);
  const [principalInterestOpen, setPrincipalInterestOpen] = useState(true);
  const [reportOpen, setReportOpen] = useState(false);

  const selectedFrequency =
    FREQUENCIES.find((item) => item.value === frequency) ?? FREQUENCIES[0];
  const periodsPerYear = selectedFrequency.periodsPerYear;

  const result = useMemo(() => {
    const principal = Math.max(0, Number(loanAmount) || 0);
    const rate = Math.max(0, Number(interestRate) || 0);
    const term = Math.max(1, Math.round(Number(payments) || 1));

    const calculatedPayment =
      mode === "payment"
        ? calculatePayment(principal, rate, term, periodsPerYear)
        : round2(payment);

    const calculatedPrincipal =
      mode === "amount"
        ? calculatePrincipal(calculatedPayment, rate, term, periodsPerYear)
        : principal;

    const schedule = buildSchedule(
      calculatedPrincipal,
      rate,
      term,
      periodsPerYear,
      calculatedPayment
    );

    const yearlySchedule = aggregateByYear(schedule, periodsPerYear);

    const totalInterest = round2(
      schedule.reduce((total, row) => total + row.interestPaid, 0)
    );

    const totalPrincipalPaid = round2(
      schedule.reduce((total, row) => total + row.principalPaid, 0)
    );

    return {
      principal: calculatedPrincipal,
      payment: calculatedPayment,
      term,
      schedule,
      yearlySchedule,
      totalInterest,
      totalPayments: round2(totalInterest + totalPrincipalPaid),
    };
  }, [loanAmount, interestRate, payments, payment, frequency, periodsPerYear, mode]);

  function resetDefaults() {
    setMode("payment");
    setLoanAmount(DEFAULTS.loanAmount);
    setInterestRate(DEFAULTS.interestRate);
    setPayments(DEFAULTS.payments);
    setPayment(DEFAULTS.payment);
    setFrequency(DEFAULTS.frequency);
    setMenuOpen(false);
  }

  function clearFields() {
    setMode("payment");
    setLoanAmount(0);
    setInterestRate(0);
    setPayments(1);
    setPayment(0);
    setFrequency(DEFAULTS.frequency);
    setMenuOpen(false);
  }

  async function copyLink() {
    const params = new URLSearchParams({
      loanAmount: String(loanAmount),
      interestRate: String(interestRate),
      payments: String(payments),
      payment: String(payment),
      frequency,
      mode,
    });

    const url = `${window.location.origin}${window.location.pathname}?${params}`;

    try {
      await navigator.clipboard.writeText(url);
    } catch {
      window.prompt("Copy this calculator link:", url);
    }

    setMenuOpen(false);
  }

  function emailResults() {
    const subject = encodeURIComponent("Farm Loan Calculator Results");

    const body = encodeURIComponent(
      [
        "Farm Loan Calculator",
        "",
        `Loan amount: ${formatMoney(result.principal)}`,
        `Interest rate: ${interestRate.toFixed(2)}%`,
        `Number of payments: ${payments}`,
        `Payment frequency: ${selectedFrequency.label}`,
        `Payment: ${formatMoney(result.payment)}`,
        `Total interest paid: ${formatMoney(result.totalInterest)}`,
        `Total payments: ${formatMoney(result.totalPayments)}`,
        "",
        window.location.href,
      ].join("\n")
    );

    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    setMenuOpen(false);
  }

  function calculate() {
    setInputsOpen(true);

    if (mode === "payment") {
      setPayment(calculatePayment(loanAmount, interestRate, payments, periodsPerYear));
    }
  }

  function handlePrint() {
    window.print();
  }

  return (
    <main className="farm-calculator-page">
      {/* HERO */}
      <section className="ff-hero">
        <div className="ff-hero-copy">
          <h1>Farm Loan Calculator</h1>

          <p className="ff-subhead">
            Our interactive payment calculator can help you determine relative
            financing costs, based on your own inputs.
          </p>
        </div>

        <div className="ff-hero-image">
          <img src="/images/resources/farmer-smartphone.jpg" alt="Farmer using a smartphone in a field" />
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="ff-calculator-section">
        <div className="ff-calculator-container">
          <div className="kje-calculator">
            {/* TOP BAR */}
            <div className="kje-top-controls">
              <div className="kje-brand-mark" aria-hidden="true">S</div>

              {/* ACTIONS */}
              {/*
                Left button swaps: "Calculate" while the report is hidden,
                "Print" once the report is showing (matches the reference,
                where the sticky left button becomes a real print trigger
                once there's a report on screen to print).
              */}
              <div className="kje-action-row">
                <button
                  type="button"
                  className="kje-btn"
                  onClick={reportOpen ? handlePrint : calculate}
                >
                  {reportOpen ? "Print" : "Calculate"}
                </button>

                <button
                  type="button"
                  className="kje-btn"
                  onClick={() => setReportOpen((current) => !current)}
                >
                  {reportOpen ? "Hide Report" : "View Report"}
                </button>
              </div>

              <div className="kje-top-actions">
                <button
                  type="button"
                  className="kje-top-button"
                  aria-label="Additional Functions"
                  aria-expanded={menuOpen}
                  onClick={() => {
                    setMenuOpen((current) => !current);
                    setHelpOpen(false);
                  }}
                >
                  <span className="kje-hamburger" />
                </button>

                <button
                  type="button"
                  className="kje-help-button"
                  aria-label="Calculator help"
                  aria-expanded={helpOpen}
                  onClick={() => {
                    setHelpOpen((current) => !current);
                    setMenuOpen(false);
                  }}
                >
                  ?
                </button>

                {menuOpen && (
                  <div className="kje-menu-items">
                    <div className="kje-menu-title">Additional Functions</div>

                    <button type="button" className="kje-menu-btn" onClick={resetDefaults}>
                      Reset to Defaults
                    </button>

                    <button type="button" className="kje-menu-btn" onClick={clearFields}>
                      Clear all Fields
                    </button>

                    <button type="button" className="kje-menu-btn" onClick={copyLink}>
                      Copy Link
                    </button>

                    <button type="button" className="kje-menu-btn" onClick={emailResults}>
                      Email
                    </button>
                  </div>
                )}

                {helpOpen && (
                  <div className="kje-help-popover">
                    <strong>Additional Functions</strong>
                    <p>
                      Use the menu to reset, clear, copy a link, or email the
                      calculator results.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {!reportOpen && (
              <p className="kje-required-note">
                <span className="kje-required">*</span> indicates required.
              </p>
            )}

            {/* INPUT HEADER */}
            {!reportOpen && (
              <button
                type="button"
                className="kje-section-toggle"
                aria-expanded={inputsOpen}
                onClick={() => setInputsOpen((current) => !current)}
              >
                <span>Loan inputs:</span>
                <span className="kje-chevron">{inputsOpen ? "⌃" : "⌄"}</span>
              </button>
            )}

            {/* INPUTS */}
            {!reportOpen && inputsOpen && (
              <div className="kje-inputs">
                <div className="kje-calculate-row">
                  <span className="kje-calculate-label">Calculate:</span>

                  <label>
                    <input
                      type="radio"
                      name="PAYMENT_CALC"
                      checked={mode === "payment"}
                      onChange={() => setMode("payment")}
                    />
                    Payment
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="PAYMENT_CALC"
                      checked={mode === "amount"}
                      onChange={() => setMode("amount")}
                    />
                    Amount
                  </label>
                </div>

                {mode === "payment" ? (
                  <>
                    <AmountField value={loanAmount} onChange={setLoanAmount} />

                    <OutputField
                      label="Payment"
                      value={formatMoney(result.payment)}
                      definition={DEFINITIONS.payment}
                    />
                  </>
                ) : (
                  <>
                    <OutputField
                      label="Loan amount"
                      value={formatMoney(result.principal)}
                      definition={DEFINITIONS.loanAmount}
                    />

                    <PaymentInputField value={payment} onChange={setPayment} />
                  </>
                )}

                <NumberSliderField
                  id="INTEREST_RATE"
                  label="Interest rate"
                  value={interestRate}
                  min={0}
                  max={RATE_MAX}
                  step={0.01}
                  suffix="%"
                  scales={["0%", "12%", "24%", "36%"]}
                  definition={DEFINITIONS.interestRate}
                  onChange={setInterestRate}
                />

                <NumberSliderField
                  id="TERM"
                  label="Number of payments"
                  value={payments}
                  min={1}
                  max={PAYMENTS_MAX}
                  step={1}
                  scales={["1", "161", "320", "480"]}
                  definition={DEFINITIONS.payments}
                  onChange={(value) => setPayments(Math.round(value))}
                />

                {/* FREQUENCY */}
                <div className="kje-input-row">
                  <div className="kje-label-row">
                    <label htmlFor="KJE-PAYMENT_TYPE">
                      Payment frequency
                      <span className="kje-required">*</span>
                    </label>

                    <DefinitionButton id="PAYMENT_TYPE" definition={DEFINITIONS.frequency} />
                  </div>

                  <div className="kje-control kje-control-select">
                    <select
                      id="KJE-PAYMENT_TYPE"
                      className="kje-select"
                      value={frequency}
                      onChange={(event) => setFrequency(event.target.value)}
                    >
                      {FREQUENCIES.map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="kje-output-divider" />

                <OutputField
                  label="Total interest paid"
                  value={formatMoney(result.totalInterest)}
                  definition={DEFINITIONS.interestPaid}
                  bold
                />

                <OutputField
                  label="Total payments"
                  value={formatMoney(result.totalPayments)}
                  definition={DEFINITIONS.totalPayments}
                  bold
                />
              </div>
            )}

            {/* REPORT */}
            {reportOpen && (
              <div className="kje-report">
                <h2 className="kje-report-header">
                  Your {formatMoney(result.principal)} loan has {payments}{" "}
                  {selectedFrequency.label.toLowerCase()} payments of{" "}
                  {formatMoney(result.payment)}.
                </h2>

                <p className="kje-report-lead">
                  If you make all of your payments on this loan, and do not
                  prepay any of the principal, the total interest for this
                  loan is {formatMoney(result.totalInterest)}.
                </p>

                <BalanceChart
                  schedule={result.schedule}
                  principal={result.principal}
                  periodsPerYear={periodsPerYear}
                />

                <table className="kje-summary-table">
                  <caption>Loan summary</caption>

                  <tbody>
                    <tr>
                      <th scope="row">Loan amount</th>
                      <td>{formatMoney(result.principal)}</td>
                    </tr>

                    <tr>
                      <th scope="row">Payment</th>
                      <td>{formatMoney(result.payment)}</td>
                    </tr>

                    <tr>
                      <th scope="row">Number of payments</th>
                      <td>{payments} {selectedFrequency.label} payments</td>
                    </tr>

                    <tr>
                      <th scope="row">Payment frequency</th>
                      <td>{periodsPerYear} per year</td>
                    </tr>

                    <tr>
                      <th scope="row">Interest rate</th>
                      <td>{interestRate.toFixed(2)}%</td>
                    </tr>
                  </tbody>

                  <tfoot>
                    <tr>
                      <th scope="row">Total payments</th>
                      <td>{formatMoney(result.totalPayments)}</td>
                    </tr>

                    <tr>
                      <th scope="row">Total interest paid</th>
                      <td>{formatMoney(result.totalInterest)}</td>
                    </tr>
                  </tfoot>
                </table>

                <PrincipalInterestChart schedule={result.yearlySchedule} />

                <h2 className="kje-schedule-header">Payment Schedule</h2>

                <p className="kje-schedule-note">
                  (Rotate device or make window larger to view schedule.)
                </p>

                <PaymentScheduleTable schedule={result.schedule} principal={result.principal} />
              </div>
            )}

            {/* COLLAPSIBLE CHARTS */}
            {!reportOpen && result.schedule.length > 0 && (
              <>
                <section className="kje-collapsible-chart">
                  <button
                    type="button"
                    className="kje-chart-toggle"
                    aria-expanded={balanceOpen}
                    onClick={() => setBalanceOpen((current) => !current)}
                  >
                    <span>Balances for a {formatMoney(result.principal)} loan</span>
                    <span className="kje-chevron">{balanceOpen ? "⌃" : "⌄"}</span>
                  </button>

                  {balanceOpen && (
                    <BalanceChart
                      schedule={result.schedule}
                      principal={result.principal}
                      periodsPerYear={periodsPerYear}
                      embedded
                    />
                  )}
                </section>

                <section className="kje-collapsible-chart">
                  <button
                    type="button"
                    className="kje-chart-toggle"
                    aria-expanded={principalInterestOpen}
                    onClick={() => setPrincipalInterestOpen((current) => !current)}
                  >
                    <span>Total Principal and Interest by Year</span>
                    <span className="kje-chevron">{principalInterestOpen ? "⌃" : "⌄"}</span>
                  </button>

                  {principalInterestOpen && (
                    <PrincipalInterestChart schedule={result.yearlySchedule} embedded />
                  )}
                </section>
              </>
            )}

            {!reportOpen && <DefinitionsSection />}
          </div>

          {reportOpen && (
            <p className="ff-disclaimer">
              (Disclaimer) Information and interactive calculators are made
              available to you as self-help tools for your independent use and
              are not intended to provide investment advice. We cannot and do
              not guarantee their applicability or accuracy in regards to your
              individual circumstances. All examples are hypothetical and are
              for illustrative purposes. We encourage you to seek personalized
              advice from qualified professionals regarding all personal
              finance issues.
            </p>
          )}
        </div>
      </section>

      {/* FINANCING */}
      <section className="ff-featured-block">
        <div className="ff-featured-image">
          <img
            src="/images/resources/logger-calculating.jpg"
            alt="A logger calculating his business's work output"
          />
        </div>

        <div className="ff-featured-copy">
          <h2>Financing &amp; Services</h2>

          <p className="ff-subhead">
            Whether you&rsquo;re a small family operation or a large
            agribusiness, we can provide the financial products, services and
            expertise that will help you run your ag business smarter and
            better.
          </p>

          <div className="ff-featured-buttons">
            <Link href="/financing" className="ff-primary-button">
              Explore Financing
            </Link>

            <Link href="/services" className="ff-primary-button">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter">
        <div className="newsletter-inner">
          <h2>Sign up for our Today&apos;s Harvest Blog.</h2>

          <p className="newsletter-subhead">
            Get the latest blog articles delivered to your inbox.
          </p>

          <form className="newsletter-form" onSubmit={(event) => event.preventDefault()}>
            <input
              type="email"
              required
              placeholder="email@address.com"
              aria-label="Email address"
              className="newsletter-email"
            />

            <button type="submit" className="newsletter-signup">
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}