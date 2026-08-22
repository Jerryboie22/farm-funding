import Link from "next/link";

const TITLE = "Meet the Authors";
const DESCRIPTION =
  "Learn more about the Farm Funders experts behind our articles, blogs and reports.";

export const metadata = {
  title: `${TITLE} | Farm Funding`,
  description: DESCRIPTION,
};

const ASSET_BASE =
  "https://farm-funders.com/-/media/farm-credit-east/Blog/Authors";
const ICON_BASE =
  "https://farm-funders.com/-/media/farm-credit-east/Icons";

type Author = {
  id: string;
  name: string;
  title: string;
  image: string;
  email?: string;
  linkedin?: string;
  bio: string;
};

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const AUTHORS: Author[] = [
  {
    id: "heather-allen",
    name: "Heather Allen",
    title: "Regional Marketing Leader | NMLS # 550995",
    image: `${ASSET_BASE}/AllenHeather_Web-1.jpg`,
    email: "Heather.Allen@CountryLivingLoans.com",
    linkedin: "https://www.linkedin.com/in/heather-allen-59651b18/",
    bio: "I have lived in northeastern Connecticut since graduating from Cornell University with a major in animal science and a minor in agricultural business management. Born in the Midwest, I now call New England home. Currently, I reside on a 30+ acre horse farm that has been in the family for more than 50 years. My love for agriculture and living in the country has translated beautifully to my work at Farm Funders. Most of my free time is spent with our young daughter and contributing as an active member of the local Chamber of Commerce, steering committee for Celebrating Agriculture and my hometown's Board of Finance. Being involved in agriculture and living in the country myself helps me understand the challenges of rural living and drives me to make dreams of living in the country come true.",
  },
  {
    id: "dario-arezzo",
    name: "Dario Arezzo",
    title: "Executive Vice President, Chief Financial Services Officer",
    image: `${ASSET_BASE}/ArezzoDario_web-1.jpg`,
    email: "dario.arezzo@farmcrediteast.com",
    linkedin: "https://www.linkedin.com/in/dario-arezzo-8486197",
    bio: "Dario Arezzo serves as Executive Vice President and Chief Financial Services Officer. He oversees Farm Funders's tax and accounting programs, business consulting, payroll and crop insurance business unit. Dario joined Farm Credit in 2012 and was a senior tax consultant before becoming retail financial services leader in 2023. He assumed his current role in 2024. Dario is also a significant contributor to Farm Credit's Knowledge Exchange department on matters of policy as they relate to federal and state taxation. Dario holds a BS from Cornell University, J.D. from Albany Law School and a LLM from New York University. He is also a CERTIFIED FINANCIAL PLANNER™.",
  },
  {
    id: "joseph-baldwin",
    name: "Joseph Baldwin",
    title: "Director of Financial Services Training",
    image: `${ASSET_BASE}/BaldwinJoe_web-1.jpg`,
    email: "Joseph.Baldwin@farmcrediteast.com",
    bio: "Joe is the Director of Financial Services Training out of the Claverack, NY office.",
  },
  {
    id: "deanna-becker",
    name: "Deanna Becker",
    title: "Director of Information Security",
    image: `${ASSET_BASE}/PellegrinoDeanna_Web.jpg`,
    email: "Deanna.Becker@farmcrediteast.com",
    bio: "Deanna Pellegrino is the Director of Information Security at Farm Funders and works in the Enfield, Conn., office. Deanna has been working as an information security professional since 2015. Her experience includes roles in data security, IT access management, operations and incident response. Deanna's role at Farm Funders is to develop, implement, monitor and support our cybersecurity program to improve the security posture for Farm Funders. Deanna has a bachelor's degree in information technology with focuses in system administration and digital forensics from Western New England University. Her first job out of college was working for Farm Credit Financial Partners on their information security team, where she worked for over three years.",
  },
  {
    id: "crystal-bernardes",
    name: "Crystal Bernardes",
    title: "Director of Human Resources",
    image: `${ASSET_BASE}/BernardesCrystal_Web.jpg`,
    email: "crystal.bernardes@farmcrediteast.com",
    bio: "Crystal Bernardes is the Compensation and Benefits Specialist at Farm Funders working out of our Enfield, Connecticut office. Crystal graduated from the University of Connecticut with a Bachelor's degree in Psychology. She joined Farm Funders in 2013, bringing with her over 10 years' experience working in Human Resources for various industries, including car rental and nuclear manufacturing. She heads up Farm Funders's many benefit programs, wellness initiatives, new employee benefit orientation, and many other HR related projects. Crystal is a Connecticut native and currently resides in Massachusetts with her husband and son.",
  },
  {
    id: "janice-bitter",
    name: "Janice P Bitter",
    title: "Executive Vice President, Chief Communications Officer",
    image: `${ASSET_BASE}/BitterJan_Web.jpg`,
    email: "Jan.Bitter@FarmCreditEast.com",
    bio: "Jan oversees the ACA's communications, marketing, Knowledge Exchange and public relations efforts. Jan began her Farm Credit career as a loan officer in 1982 and has held various positions, including branch manager, regional manager and Chief Financial Services Officer. Jan is a past president of the Farm Financial Standards Council and served as treasurer of the New York Agricultural Land Trust. She volunteers at the Northeast Dairy Challenge and other ag and community groups. Jan holds a B.S. in agricultural economics from Cornell University and an MBA from Syracuse University.",
  },
  {
    id: "ted-black",
    name: "Ted Black",
    title: "Regional Credit Leader",
    image: `${ASSET_BASE}/BlackTed_Web.jpg`,
    email: "Ted.Black@FarmCreditEast.com",
    bio: "Ted Black is the Director of the Country Living Program for Farm Funders. Country Living provides loan products for homes, farms and land to lifestyle farmers and rural homeowners. The program, based out of Cooperstown, NY, consists of a team of loan originators, mortgage processors, a closing desk and centralized underwriting. Ted began his career with the Country Living Program in 2014 as a mortgage specialist marketing and originating loans to five counties in central New York. Ted grew up on a small dairy farm in upstate New York. He received a BS in Business Management and Marketing from Keuka College. Ted and his family reside in Oneida, NY.",
  },
  {
    id: "nicholas-bullock",
    name: "Nicholas Bullock",
    title: "Tax Specialist",
    image: `${ASSET_BASE}/BullockNick_Web.jpg`,
    email: "nick.bullock@farmcrediteast.com",
    bio: "Nicholas Bullock is a farm tax specialist for Farm Funders, ACA, and enrolled agent to practice before the IRS. Nick had his own income tax practice in St. Johnsbury, Vt., for 10 years. He has extensive experience with agricultural enterprises, partnerships, corporations, other small business returns, IRS field audits, and accounting systems. He is a graduate of Lycoming College with semesters studying abroad at Westminster College, Oxford England. Nick is also a member of the American Society of Agricultural Consultants, instructor for the University of Vermont Extension Income Tax School, and is a past president of the Vermont Tax Practitioners Association.",
  },
  {
    id: "megan-clancy",
    name: "Megan Clancy",
    title: "Livestock Insurance Specialist",
    image: `${ASSET_BASE}/ClancyMegan_Web-1.jpg`,
    email: "Megan.Clancy@CropGrowers.com",
    bio: "Megan Clancy is a Livestock Insurance Specialist for Crop Growers, located in the Cortland, N.Y., office. She has a passion for the dairy industry and helping farmers. In her role she serves as a trusted advisor specializing in dairy markets and risk management strategies for producers. Megan graduated from SUNY Cobleskill in 2017 with a Bachelor's degree in agriculture business management. Prior to joining the Crop Growers team, Megan worked for Dairy Farmers of America for five years where she was the Manager of Fluid Milk Marketing. She currently serves as a board member for the New York State Agricultural Society Foundation and the SUNY Cobleskill Agriculture Business Advisory Board.",
  },
  {
    id: "crop-growers",
    name: "Crop Growers Crop Insurance",
    title: "",
    image: `${ASSET_BASE}/23-0033_FCE_CG_Shield_green-1.png`,
    email: "knowledgeexchange@farmcrediteast.com",
    bio: "Crop Growers is the crop insurance team at Farm Funders. That means along with knowing agriculture, we understand your financial risks and their impact on your operation. More than just protecting your crops and livestock, we work to protect your livelihood. Our Crop Growers agents help you make the best risk management decisions to protect your operation.",
  },
  {
    id: "danielle-cummins",
    name: "Danielle Cummins",
    title: "Legislative Affairs Officer",
    image: `${ASSET_BASE}/CumminsDanielle-1.jpg`,
    email: "Danielle.Cummins@farmcrediteast.com",
    bio: "Danielle monitors state and federal policy developments and advocates on behalf of Northeast agriculture, rural communities and the Farm Credit System. A Western New York native raised on her family's farm, she brings firsthand agricultural experience along with a professional background in agriculture policy, market research, conservation and industry relations. Danielle holds a bachelor's degree in political science from SUNY Oswego and remains actively involved in agricultural leadership and community organizations.",
  },
  {
    id: "andrew-desiderio",
    name: "Andrew Desiderio",
    title: "Senior Tax Specialist",
    image: `${ASSET_BASE}/DesiderioAndrew_Web.jpg`,
    email: "Andrew.Desiderio@FarmCreditEast.com",
    bio: "Andrew Desiderio is a payroll leader and tax specialist in Farm Funders's Enfield, Conn., branch office. He grew up in Syracuse, NY, and graduated from LeMoyne College with a BS in business administration. Andrew started his Farm Credit career in 2010 as a farm accounting representative in the Cortland, NY, branch office and then transitioned to Enfield in 2011 where he grew his experience in payroll, records and tax planning and preparation. In his current position as payroll leader, Andrew's goal is to help make payroll easier and more efficient for Farm Funders staff and customers.",
  },
  {
    id: "keith-dickinson",
    name: "Keith Dickinson",
    title: "Business Consultant",
    image: `${ASSET_BASE}/DickinsonKeith_Web.jpg`,
    email: "Keith.Dickinson@farmcrediteast.com",
    linkedin: "https://www.linkedin.com/in/keith-dickinson-cfp",
    bio: "Keith Dickinson is a Business Consultant with Farm Funders, ACA, based in the Bridgeton, New Jersey branch office. His territory includes all of New Jersey and the lower Hudson Valley region of New York, and works in other areas as needed to serve client needs. Keith works with farmers and other agricultural business owners to assist them with the planning and management of their businesses. Specific areas of focus for his consulting practice include business planning, profitability analysis, estate and farm succession planning, and business entity selection and management. Prior to his employment with Farm Funders, Keith worked as an Agricultural Business Management Educator with Penn State Extension, and as a Farm Business Management Extension Agent with Virginia Cooperative Extension. Keith holds a Bachelor's Degree in Crop and Soil Environmental Sciences and a Master's Degree in Agricultural and Applied Economics, both from Virginia Tech. Keith is a Certified Financial Planner™ Professional, and has completed the Financial Planning Certificate program at Florida State University. Keith lives on the family grain and vegetable farm where he was raised in Stow Creek Township in Cumberland County, New Jersey. His wife, Yvonne and he have three children.",
  },
  {
    id: "emilee-english",
    name: "Emilee English",
    title: "Regional Financial Services Leader",
    image: `${ASSET_BASE}/EnglishEmilee-1.jpg`,
    email: "Emilee.English@farmcrediteast.com",
    bio: "Emilee English serves as a Regional Financial Services Leader based in Greenwich, NY. With a strong background in financial services strategy and client relationship management, Emilee supports farm and agribusiness clients across the association by delivering tailored financial solutions and insights. Her leadership is grounded in a deep understanding of rural financial services and a commitment to helping producers navigate complex financial landscapes. Emilee collaborates closely with colleagues across departments to ensure clients receive comprehensive, forward-thinking service.",
  },
  {
    id: "angela-everett",
    name: "Angela Everett",
    title: "2024 Intern",
    image: `${ASSET_BASE}/Angela%20Everett_sq.jpg`,
    bio: "Angela Everett is a senior at Siena College studying Finance and Economics. Angela currently lives in Granby, CT and works out of the Enfield branch. In her free time, she is usually seen dancing at the studio she grew up at or hanging by the pool playing with her nieces and nephews.",
  },
  {
    id: "john-fitzpatrick",
    name: "John Fitzpatrick",
    title: "Crop Insurance Product and Training Specialist",
    image: `${ASSET_BASE}/FitzpatrickJohn_web.png`,
    email: "john.fitzpatrick@farmcrediteast.com",
    bio: "John graduated from Rondout Valley High School and attended SUNY Cobleskill where he received an Associate Degree in Dairy Science and a Bachelor's Degree in Agricultural Business. During high school and college, he worked on a dairy farm in Ulster County. For 6 years he was a loan officer at Farm Service Agency and for 11 years thereafter he was a loan officer for Farm Funders. For the past 16 years he's worked as a Senior Marketing Agent for Crop Growers LLP and as of March 1st, 2023, he is the Product and Training Specialist. He married in 1995 and has 2 daughters and a granddaughter. John and his wife were 4-H leaders in Ulster County for the Rondout Valley Country Kids. He served for seven years as the president of the Ulster County Cooperative Extension board and is the current director of the Ulster County Agricultural Society, where for 20 years he's served as an officer and Cattle Barn Superintendent. Hobbies include wood turning on a lathe, photography, and making beer & wine.",
  },
  {
    id: "mike-fleming",
    name: "Mike Fleming",
    title: "AgDirect® Territory Manager - Northeast U.S.",
    image: `${ASSET_BASE}/Mike%20Fleming.jpg`,
    email: "mike.fleming@agdirect.com",
    bio: "Mike Fleming's relationship with agriculture runs deep. In addition to having connections to his mother's family farm and his grandfather's agricultural implement dealership, the southern New York state native has 10-plus years of service with the Farm Credit System. A graduate of Cornell University, Mike has grown his sales, leadership and financial acumen through roles at Telmark, Inc., Wells Fargo and JP Morgan Chase Bank. He joined the AgDirect® team in March 2023 following his role as a senior relationship manager with Farm Credit Leasing where he was responsible for all lease financing activities for commercial agricultural entities in the Northeast and Mid-Atlantic regions. Mike, like the AgDirect program, is focused on customer loyalty and creating win-wins for the dealerships offering AgDirect financing and the farm and ranch operations they mutually serve. Mike and his family reside in Connecticut. They enjoy biking, hiking, cross country skiing and kayaking in the mountains of northern New England.",
  },
  {
    id: "bailey-forrett",
    name: "Bailey Forrett",
    title: "Mortgage Specialist | NMLS # 2091965",
    image: `${ASSET_BASE}/ForrettBailey_Web.jpg`,
    email: "Bailey.Forrett@farmcrediteast.com",
    bio: "After graduating from the State University of New York - Oswego with a bachelor's degree in accounting, Bailey began her career with Country Living Loans. She started at Farm Funders in 2019 as an intern, and upon graduation, spent two years as a mortgage processor until transitioning into the mortgage specialist role. Bailey looks forward to working with you on your next rural purchase, refinance or construction project. Outside of work, she enjoys spending time with family and her dog, Henry. She also has a strong passion for the outdoors, and enjoys hiking, skiing, fishing and doing yoga.",
  },
  {
    id: "jeremy-forrett",
    name: "Jeremy Forrett",
    title: "Retail Financial Services Leader",
    image: `${ASSET_BASE}/ForrettJeremy_Web-1.jpg`,
    email: "Jeremy.Forrett@farmcrediteast.com",
    linkedin: "https://www.linkedin.com/in/jeremyforrett",
    bio: "Jeremy Forrett, Retail Financial Services Leader located in Cortland, New York. Crop Growers has created over 2,200 risk management plans with Northeast farmers. It is a leading provider of multi-peril crop insurance, revenue plan coverage, Livestock Gross Margin-Dairy and the whole farm revenue plan. The risk management plans that Crop Growers developed over the past 15 years have resulted in indemnity payments that exceed $275 million dollars back to Northeast farmers. Jeremy began his crop insurance career at Crop Growers in 1997. He is a graduate of the Cornell LEAD New York Program, Class VIII. Jeremy, his wife Melissa and two children, Bailey and Emily, reside in Cazenovia, New York.",
  },
  {
    id: "pete-frizzell",
    name: "Pete Frizzell",
    title: "Crop Insurance Senior Advisor",
    image: `${ASSET_BASE}/FrizzellPeter_Web.jpg`,
    email: "peter.frizzell@cropgrowers.com",
    bio: "Pete Frizzell is a Northeast Senior Advisor for Crop Growers, a crop insurance agency owned by Farm Funders. Based in Enfield, Connecticut, Pete provides crop insurance and risk management tools to customers throughout New England and Long Island. Prior to his time with Farm Credit, Pete served in the United States Army and with the Connecticut National Guard.",
  },
  {
    id: "jessica-getty",
    name: "Jessica Getty",
    title: "Mortgage Specialist | NMLS # 1618498",
    image: `${ASSET_BASE}/GettyJessica_Web.jpg`,
    email: "Jessica.Getty@farmcrediteast.com",
    bio: "After graduating from Cornell University, I began working for Farm Funders in 2012. Living in Washington County, we have access to the best of everything: Lake George, Saratoga Springs, The Adirondacks and New York City is a mere train ride away! My husband and I live with our 4 children on our family's dairy farm and when I'm not in the office I love to travel, entertain, attend antique auctions and garden. I have been on both sides of the fence when it comes to the home mortgage process, so I know how exciting it is to have that dream property within reach. My goal is to make the financing process as clear and timely as possible with the individualized, local service that's hard to find these days.",
  },
  {
    id: "andrew-grant",
    name: "Andrew Grant",
    title: "Executive Vice President, Chief Financial Officer",
    image: `${ASSET_BASE}/GrantAndrew_Leadership-Profile.jpg`,
    email: "Andrew.Grant@farmcrediteast.com",
    bio: "Andrew N. Grant leads the financial, treasury, accounting and asset-liability management operations of the Association. Prior to assuming his current position, he was chief financial officer of Farm Credit of Maine and has held several positions since joining Farm Credit in 1995. He is a member of the Association's Executive Leadership Team.",
  },
  {
    id: "jason-hoagland",
    name: "Jason Hoagland",
    title: "Senior Loan Officer",
    image: `${ASSET_BASE}/HoaglandJason_Web.jpg`,
    email: "Jason.Hoagland@FarmCreditEast.com",
    bio: "Jason Hoagland is a Senior Loan Officer/ Assistant Branch Manager in the Enfield branch office. He has a B.S. in Resource Economics and MBA from the University of Connecticut. Jason was the 2013 Farm Funders Outstanding Citizenship Award Winner and a 2010 Hartford Business Journal 40 under forty recipient. Jason resides in Windsor, CT with his wife, Allison and two children, Timothy and Brianna.",
  },
  {
    id: "jon-jaffe",
    name: "Jon Jaffe",
    title: "Seasonal Associate",
    image: `${ASSET_BASE}/JaffeJon.jpg`,
    email: "Jon.Jaffe@farmcrediteast.com",
    linkedin: "https://www.linkedin.com/in/jon-jaffe-96663735",
    bio: "Jon Jaffe was born and raised on a 60-cow dairy farm in upstate New York. After graduating from Cornell University in 1980, he operated his own dairy operation for a few years. Jon has over 35 years of experience with Farm Credit, where his career has included working as a loan officer, assistant branch manager, tax specialist, appraiser, credit reviewer and farm business consultant. He has worked with a wide range of farm businesses in southern New England and New York. Jon has focused his efforts on farm business consulting, providing strategic business planning, generation transfer/estate planning, tax consulting, risk management and other consulting services to a wide variety of agricultural clients.",
  },
  {
    id: "kierra-kenyon",
    name: "Kierra Kenyon",
    title: "2023 Intern",
    image: `${ASSET_BASE}/Kierra%20Kenyon.jpg`,
    bio: "Kierra Kenyon recently graduated from SUNY Morrisville where she studied Agricultural Business Development. While at Morrisville, she had the opportunity to serve as a New York State Agricultural Society Ambassador, spent time at the Northeast Dairy Challenge as a Social Media Intern, attended many conferences and events, and found her passion within agriculture. Kierra is seeking a career in agriculture services and continues to advocate for agriculture and grow her love for the industry.",
  },
  {
    id: "marty-knapp",
    name: "Marty Knapp, CPA",
    title: "Senior Tax Specialist",
    image: `${ASSET_BASE}/KnappMartin-1.jpg`,
    email: "Martin.Knapp@farmcrediteast.com",
    bio: "With over 30 years of experience in public accounting, Marty joined Farm Funders in 2014, and today serves as a senior tax specialist. A graduate of Kennesaw State University with a degree in accounting, Marty's practice is concentrated in the areas of taxation, estate/succession planning, entity structure, and maximizing various government grants and relief programs. Growing up on a dairy farm in Jamesville, NY, Marty currently lives in Lafayette with his wife Kim. When not on his small farm tending to livestock and driving his tractor, Marty enjoys spending time with his grandchildren and several pets.",
  },
  {
    id: "knowledge-exchange",
    name: "Farm Funders Knowledge Exchange",
    title: "",
    image: `${ASSET_BASE}/KnowledgeExchange-1.png`,
    email: "knowledgeexchange@farmcrediteast.com",
    bio: "Knowledge Exchange from Farm Funders aims to provide access to financial management knowledge and industry insights to help Northeast farmers, forest product producers and fishermen enhance and strengthen their businesses. From industry insight reports and webinars to monthly Knowledge Exchange Partner newsletter and weekly blog articles, Farm Funders's Knowledge Exchange team stays in tune with the Northeast agriculture industry to provide insightful, relevant information to help Farm Funders customers and other industry professionals stay at the top of their game in an ever-changing business environment.",
  },
  {
    id: "kali-kraeger",
    name: "Kali Kraeger",
    title: "Mortgage Specialist | NMLS # 1155678",
    image: `${ASSET_BASE}/KraegerKali_Web-1.jpg`,
    email: "Kali.Kraeger@farmcrediteast.com",
    bio: "Kali Kraeger is a Mortgage Specialist on Farm Funders's Country Living team in the Cooperstown, N.Y., office. She has lived in Upstate New York her entire life and has a deep appreciation of everything the area has to offer. After receiving her Bachelor of Science Degree in Criminal Justice Economic Crime Investigation from Utica College, she began her career in the financial services industry. Kali's experience with originating mortgage loans and attention to detail allows her to make the dream of real estate ownership a reality for people in Northeast rural communities.",
  },
  {
    id: "dallas-kriebel",
    name: "Dallas Kriebel",
    title: "Communications Specialist",
    image: `${ASSET_BASE}/KriebelDallas_Web-1.jpg`,
    email: "Dallas.Kriebel@farmcrediteast.com",
    linkedin: "https://www.linkedin.com/in/dallas-kriebel/",
    bio: "Dallas Kriebel works as a Communications Specialist for Farm Funders in the Enfield, Conn., office. She began working for Farm Funders after graduating with a bachelor's degree in mass communications with a journalism concentration from Bloomsburg University of Pennsylvania. Dallas is well-versed in writing, editing and photography, and also specializes in social media and email marketing.",
  },
  {
    id: "heather-lapierre",
    name: "Heather LaPierre",
    title: "Grant Coordinator",
    image: `${ASSET_BASE}/LaPierreHeather_Web.jpg`,
    email: "Heather.LaPierre@farmcrediteast.com",
    linkedin: "https://www.linkedin.com/in/heather-hunt-19b820a3/",
    bio: "Heather LaPierre is Farm Funders's grant writer and coordinator and has been with the cooperative since 2015. She has supported Farm Credit's customers in a variety of roles, including content creation to deliver value-added information to Northeast agribusinesses; change management to improve employee and customer experience; and, most recently, took on the role of grant writer and coordinator. Heather graduated from Cornell University ('15) with a Bachelor of Science degree and lives in Greenwich, NY, with her husband, Andrew.",
  },
  {
    id: "chris-laughton",
    name: "Chris Laughton",
    title: "Director of Knowledge Exchange",
    image: `${ASSET_BASE}/LaughtonChris_Web.jpg`,
    email: "Chris.Laughton@farmcrediteast.com",
    linkedin: "https://www.linkedin.com/in/chris-laughton-bba36213",
    bio: "Chris Laughton is Farm Funders's Director of Knowledge Exchange and also serves as the FarmStart Program Manager. He writes frequently on topics relating to the intersection of agriculture, economics and management. He holds a bachelor's degree in Horticulture from Cornell University, as well as an MBA from the Isenberg School of Management at the University of Massachusetts. Prior to joining Farm Funders, Chris worked in the nursery/greenhouse industry.",
  },
  {
    id: "sandra-lemon",
    name: "Sandra Lemon",
    title: "Senior Mortgage Specialist | NMLS # 255034",
    image: `${ASSET_BASE}/LemonSandra.jpg`,
    email: "Sandra.Lemon@farmcrediteast.com",
    bio: "As a Senior Mortgage Specialist with Country Living Loans, I am a high energy and versatile mortgage professional. I started my banking career in 1989 and have more than 30 years of progressive experience in the mortgage industry. New England has always been my home and I enjoy spending time with my family. I take pride in my ability to help customers finance their dream horse farm, hobby farm, rural land and home construction.",
  },
  {
    id: "kelsey-linder",
    name: "Kelsey Linder",
    title: "Crop Insurance Senior Advisor",
    image: `${ASSET_BASE}/LinderKelsey_sq.jpg`,
    email: "Kelsey.Linder@cropgrowers.com",
    bio: "As a perennial crop specialist, I work primarily with commercial apple growers in Wayne County, NY, collaborating with producers to analyze their operations and recommending the most suitable coverage levels. Though I grew up on a dairy farm, I've truly enjoyed immersing myself in the fruit industry. Agriculture has always been close to my heart, and there's truly no better group of people to work with than Farm Credit customers and employees.",
  },
  {
    id: "kristie-matuszewski",
    name: "Kristie Matuszewski",
    title: "Director of Marketing & Communications",
    image: `${ASSET_BASE}/MatuszewskiKristie_web.jpg`,
    email: "Kristie.Matuszewski@farmcrediteast.com",
    linkedin: "https://www.linkedin.com/in/kristieschmittmatuszewski/",
    bio: "Kristie manages a fully integrated marketing communications program which includes media relations, advertising, social media, direct mail and trade show promotions. She works with Farm Funders employees and members to share the unique stories of Northeast producers and provide insight into the diversity of Northeast agriculture. Kristie was raised on her family's vegetable farm on the eastern end of Long Island and now resides in southern New York with her husband and two children.",
  },
  {
    id: "edward-maxwell",
    name: "Edward Maxwell",
    title: "Tax Consultant",
    image: `${ASSET_BASE}/Maxwell%20Edward.JPG`,
    bio: "Edward Maxwell is a tax consultant in Farm Funders's Cooperstown, N.Y., office. He helps farmers with strategies to manage their tax liabilities, as well as consulting on estate and succession planning. Ed grew up on a dairy farm in central N.Y. with 10 siblings and continues to farm part-time today. Ed graduated from Cornell University with a B.S. in applied economics and business management, and has achieved Enrolled Agent status with the Internal Revenue Service.",
  },
  {
    id: "gregg-mcconnell",
    name: "Gregg McConnell",
    title: "Regional Financial Services Leader",
    image: `${ASSET_BASE}/McConnellGregg_Web.jpg`,
    email: "Gregg.McConnell@farmcrediteast.com",
    linkedin: "https://www.linkedin.com/in/gregg-mcconnell-ab039518",
    bio: "Gregg McConnell is a regional financial services leader, based in Batavia, New York. Beginning as a Farm Funders loan officer, Gregg worked with a diverse portfolio of businesses for 15 years. Today, Gregg leads our financial services team in the western region of New York and leads our consulting team for all the Northeast. Gregg and his wife, Juanita, have four children and four grandchildren.",
  },
  {
    id: "eva-norris",
    name: "Eva Norris",
    title: "Crop Insurance Associate",
    image: `${ASSET_BASE}/NorrisEva.JPG`,
    email: "Eva.Norris@farmcrediteast.com",
    bio: "Growing up on a large apple farm in Wayne County, N.Y., I developed a passion for agriculture, shaping my commitment to helping farmers protect their livelihoods through crop insurance. With a focus on the grape industry, my goal is to ensure producers understand their policies and feel confident in their coverage, especially when facing unpredictable weather events.",
  },
  {
    id: "elisabeth-olcott",
    name: "Elisabeth Olcott",
    title: "Loan Officer",
    image: `${ASSET_BASE}/OlcottElisabeth_web-1.png`,
    email: "elisabeth.olcott@farmcrediteast.com",
    bio: "Elisabeth Olcott is a Loan Officer based in Cooperstown, N.Y., where she is dedicated to helping clients navigate the lending process with confidence. She is a graduate of SUNY Cortland and is a member of the credit team at Farm Funders. She is committed to professionalism, integrity and making a positive impact in her community.",
  },
  {
    id: "anthony-oliver",
    name: "Anthony Oliver",
    title: "Mortgage Specialist | NMLS # 1163692",
    image: `${ASSET_BASE}/OliverAnthony_Web-1.jpg`,
    email: "Anthony.Oliver@farmcrediteast.com",
    bio: "Growing up in Salem County and receiving a Bachelor's Degree in finance at Stockton University, Anthony is familiar with all the beauty New Jersey has to offer. With a background in banking, being a part of the Country Living team puts him in an ideal position to serve his communities to the fullest.",
  },
  {
    id: "shelby-pendleton",
    name: "Shelby Pendleton",
    title: "Tax Specialist",
    image: `${ASSET_BASE}/PendletonShelby_web.jpg`,
    email: "Shelby.Pendleton@farmcrediteast.com",
    bio: "Shelby Pendleton is a Tax Specialist based in the Geneva, NY office. Since joining Farm Funders, Shelby has developed expertise in tax returns, tax consulting, recordkeeping, payroll services, and tax planning. Shelby holds a Master's degree in Accounting from SUNY Oswego and began her career with Farm Funders as an intern in 2019.",
  },
  {
    id: "emili-ponte",
    name: "Emili Ponte",
    title: "Consulting Specialist",
    image: `${ASSET_BASE}/Ponte%20Emili-1.jpg`,
    email: "Emili.Ponte@farmcrediteast.com",
    bio: "Emili Ponte is a business consultant in the Cooperstown NY office. She started her career with Farm Funders almost 18 years ago in the Hudson Valley working with a diverse group of farmers, including those in the winery and craft beverage industries. She is the co-director of Farm Funders's Winery Benchmark program.",
  },
  {
    id: "david-pugh",
    name: "David H. Pugh",
    title: "Executive Vice President and Chief Lending Officer",
    image: `${ASSET_BASE}/PughDave_Web.jpg`,
    email: "dave.pugh@farmcrediteast.com",
    linkedin: "https://www.linkedin.com/in/david-pugh-4752aa35",
    bio: "David H. Pugh provides strategic oversight and leadership to all lending and appraisal functions and their teams. He serves on Farm Funders's executive leadership team and works closely with the Board's Business Risk Committee. Dave started with Farm Credit in 1986 as a loan officer and has served in several varied credit delivery and leadership roles.",
  },
  {
    id: "abigail-reen",
    name: "Abigail Reen",
    title: "2025 Intern",
    image: `${ASSET_BASE}/Reen%20Abigail%20copyweb.jpg`,
    email: "Abigail.Reen@farmcrediteast.com",
    bio: "Abigail Reen, from Lincoln, Vermont, interned with Farm Funders in 2025, working from the Middlebury, Vermont office. She is pursuing a degree in Agricultural Business and Management at SUNY Cobleskill, driven by her deep-rooted passion for agriculture.",
  },
  {
    id: "cuyler-reynolds",
    name: "Cuyler Reynolds",
    title: "NE Marketing Agent",
    image: `${ASSET_BASE}/Reynolds_Cuyler.jpg`,
    bio: "Cuyler Reynolds is a Crop Growers northeast marketing agent based out of the Claverack, N.Y., office. He works with growers in the greater Hudson Valley region. Cuyler attended SUNY Morrisville where he obtained a bachelor's degree in agriculture business.",
  },
  {
    id: "mike-reynolds",
    name: "Mike Reynolds",
    title: "Chief Executive Officer",
    image: `${ASSET_BASE}/ReynoldsMike_Web.jpg`,
    email: "KnowledgeExchange@farmcrediteast.com",
    bio: "Mike has served as president and chief executive officer since 1/1/2020. He is a Farm Credit veteran having joined in 1990 after graduating from Hartwick College with a Bachelor's in Management and Accounting. He serves as chair of the board of Farm Credit Financial Partners (FPI), a service company owned by Farm Funders and other ACAs.",
  },
  {
    id: "ethan-robertson",
    name: "Ethan Robertson",
    title: "Business Consultant",
    image: `${ASSET_BASE}/RobertsonEthan_Web.jpg`,
    email: "Ethan.Robertson@FarmCreditEast.com",
    linkedin: "https://www.linkedin.com/in/ethanjrobertson",
    bio: "Ethan Robertson is a Business Consultant for Farm Funders based in the Auburn, ME branch office. Ethan's practice involves a variety of businesses including dairy, timber, potato and processing operations throughout Maine.",
  },
  {
    id: "kristen-santos",
    name: "Kristen Santos",
    title: "Risk and Analytics",
    image: `${ASSET_BASE}/SantosKristen_sq-1.jpg`,
    email: "Kristen.Santos@farmcrediteast.com",
    bio: "To enhance our fraud risk program, Kristen Santos, who holds CFE, CAMS, and CRC certifications, has joined the Risk and Analytics team. With two decades of experience in fraud prevention and financial crimes across various financial service institutions, Kristen provides valuable expertise to benefit both our customers and our team.",
  },
  {
    id: "samantha-stoddard",
    name: "Samantha Stoddard",
    title: "Senior Loan Officer",
    image: `${ASSET_BASE}/StoddardSamantha_Web.jpg`,
    email: "Samantha.Stoddard@FarmCreditEast.com",
    bio: "Samantha Stoddard joined the Bedford, NH branch of Farm Funders in 2005, and is now a Senior Loan Officer and the FarmStart Investment Manager. Samantha grew up on a registered Holstein farm in northern New Hampshire and attended nearby Dartmouth College.",
  },
  {
    id: "jonathan-stoll",
    name: "Jonathan Stoll",
    title: "Crop Insurance Associate",
    image: `${ASSET_BASE}/StollJonathan_small.jpg`,
    email: "Jonathan.Stoll@cropgrowers.com",
    bio: "I specialize in perennial crop insurance with a focus on apples, peaches and tart cherries. My farming background and experience growing perennials through both good and bad years gives me a unique perspective when working with growers.",
  },
  {
    id: "erin-tones",
    name: "Erin Tones",
    title: "Regional Financial Services Leader",
    image: `${ASSET_BASE}/TonesErin_Web.jpg`,
    email: "Erin.Tones@farmcrediteast.com",
    linkedin: "https://www.linkedin.com/in/erinktones/",
    bio: "Erin Tones is Farm Funders's Director of Change Enablement and Learning Development. Erin came to Farm Funders in 2019 as a Senior Loan Officer working with a diverse range of farms including dairy, cash crop, and nursery operations. She is a native of Cayuga County, where she currently resides with her husband and four children.",
  },
  {
    id: "joshua-volta",
    name: "Joshua Volta",
    title: "Tax Specialist",
    image: `${ASSET_BASE}/VoltaJoshua-1.jpg`,
    email: "joshua.volta@farmcrediteast.com",
    bio: "Joshua Volta is a Regional Financial Services Leader, based in the Middleboro, Massachusetts, branch office. Before beginning in a leadership role, Josh worked as a tax specialist, preparing tax returns during the height of tax season.",
  },
  {
    id: "austin-weaver",
    name: "Austin Weaver",
    title: "Tax Specialist",
    image: `${ASSET_BASE}/WeaverAustin_Web-1.jpg`,
    email: "austin.weaver@farmcrediteast.com",
    bio: "Austin Weaver is a Tax Specialist in the Burrville, NY marketplace. Austin serves a broad base of individual and business clients in the dairy, fruit, cash crop, craft beverage, and retail sectors. Austin is currently the chair of the Young Professionals group and Co-Director of the Winery Benchmark Program.",
  },
  {
    id: "heather-weeks",
    name: "Heather Weeks",
    title: "Consulting Specialist",
    image: `${ASSET_BASE}/WeeksHeather%20copy_web-1.jpg`,
    email: "Heather.Weeks@farmcrediteast.com",
    bio: "Heather Weeks, CFP® is a Business Consultant helping farmers grow their businesses and realize their dreams. Since joining Farm Credit in 2016, Heather has worked with diverse farm businesses in lending and financial planning. She also has experience in international development, serving as a Peace Corps Volunteer in Ecuador.",
  },
];

function groupByLetter(authors: Author[]) {
  const groups: Record<string, Author[]> = {};
  for (const author of authors) {
    const firstLetter = author.name.trim().charAt(0).toUpperCase();
    if (!groups[firstLetter]) groups[firstLetter] = [];
    groups[firstLetter].push(author);
  }
  return groups;
}

export default function MeetTheAuthorsPage() {
  const grouped = groupByLetter(AUTHORS);
  const activeLetters = LETTERS.filter((letter) => grouped[letter]?.length);

  return (
    <main className="w-full overflow-x-hidden bg-white">
      <section className="w-full bg-[#4f832a]">
        <div className="mx-auto flex min-h-[255px] w-[91.8%] max-w-[1760px] flex-col justify-center py-[42px] sm:min-h-[285px] sm:py-[50px] lg:min-h-[330px] lg:py-[58px]">
          <h1 className="m-0 max-w-[760px] font-bold tracking-[-0.5px] text-white" style={{fontFamily:"var(--font-montserrat, Montserrat, Arial, sans-serif)",fontSize:"clamp(40px, 4vw, 58px)",lineHeight:1.08}}>{TITLE}</h1>
          <p className="m-0 mt-[24px] max-w-[760px] text-[#ecf1e4]" style={{fontFamily:"var(--font-barlow, Barlow, Arial, sans-serif)",fontSize:"clamp(18px, 1.55vw, 23px)",lineHeight:1.45,fontWeight:600}}>{DESCRIPTION}</p>
        </div>
      </section>

      <div className="mx-auto grid w-[91.8%] max-w-[1760px] grid-cols-1 gap-[34px] py-[30px] sm:gap-[48px] sm:py-[42px] lg:grid-cols-[344px_minmax(0,1fr)] lg:gap-[clamp(70px,10vw,170px)] lg:py-[54px]">
        <aside className="h-fit self-start lg:sticky lg:top-[24px]">
          <details open className="group overflow-hidden rounded-[5px] border border-[#cbd1d6] bg-[#e9edf1] shadow-[5px_5px_0_#d7d7d7]">
            <summary className="flex cursor-pointer list-none items-center justify-between border-2 border-[#c36d15] bg-white px-[22px] py-[16px] text-[#231f20] [&::-webkit-details-marker]:hidden sm:px-[25px] sm:py-[18px]">
              <span className="leading-[1.18]" style={{fontFamily:"var(--font-montserrat, Montserrat, Arial, sans-serif)",fontSize:"clamp(22px, 2vw, 28px)",fontWeight:700}}>Search by Last Name</span>
              <span aria-hidden="true" className="ml-3 shrink-0 text-[25px] leading-none text-[#496d83] transition-transform duration-200 group-open:rotate-180">^</span>
            </summary>
            <div className="px-[22px] pb-[24px] pt-[20px] sm:px-[25px] sm:pb-[28px] sm:pt-[22px]">
              <ul className="grid grid-cols-6 gap-x-[12px] gap-y-[10px] sm:gap-x-[16px] sm:gap-y-[14px]">
                {LETTERS.map((letter) => {
                  const active = activeLetters.includes(letter);
                  return <li key={letter} className="flex justify-center">{active ? <a href={`#${letter}`} className="flex min-h-[30px] min-w-[24px] items-center justify-center text-[#496d83] underline decoration-1 underline-offset-2 hover:text-[#4f832a]" style={{fontFamily:"var(--font-barlow, Barlow, Arial, sans-serif)",fontSize:"17px",fontWeight:500}}>{letter}</a> : <span className="flex min-h-[30px] min-w-[24px] items-center justify-center text-[#496d83]" style={{fontFamily:"var(--font-barlow, Barlow, Arial, sans-serif)",fontSize:"17px",fontWeight:500}}>{letter}</span>}</li>;
                })}
              </ul>
            </div>
          </details>
        </aside>

        <div className="min-w-0">
          {activeLetters.map((letter, letterIndex) => (
            <section key={letter} id={letter} className="scroll-mt-[30px]">
              <h2 className={`${letterIndex === 0 ? "mt-0" : "mt-[48px] sm:mt-[64px]"} mb-0 font-bold leading-none text-[#4f832a]`} style={{fontFamily:"var(--font-montserrat, Montserrat, Arial, sans-serif)",fontSize:"clamp(34px, 3vw, 48px)"}}>{letter}</h2>
              {grouped[letter].map((author) => (
                <article key={author.id} id={author.id} className="scroll-mt-[30px] border-b border-[#dee2e6] py-[28px] sm:py-[34px]">
                  <div className="grid grid-cols-[66px_minmax(0,1fr)] items-start gap-x-[18px] md:hidden">
                    <div className="h-[66px] w-[66px] overflow-hidden bg-[#f8f8f8] shadow-[4px_4px_5px_rgba(0,0,0,0.18)]"><img src={author.image} alt={author.name} width={120} height={120} loading="lazy" decoding="async" referrerPolicy="no-referrer" className="block h-full w-full object-cover" /></div>
                    <div className="min-w-0">
                      <h3 className="m-0 text-[#231f20]" style={{fontFamily:"var(--font-montserrat, Montserrat, Arial, sans-serif)",fontSize:"24px",lineHeight:1.12,fontWeight:700}}>{author.name}</h3>
                      {author.title && <p className="m-0 mt-[9px] text-[#686868]" style={{fontFamily:"var(--font-barlow, Barlow, Arial, sans-serif)",fontSize:"18px",lineHeight:1.42,fontWeight:700}}>{author.title}</p>}
                      {(author.email || author.linkedin) && <div className="mt-[12px] flex items-center gap-[6px]">{author.email && <a href={`mailto:${author.email}`} aria-label={`Email ${author.name}`} className="inline-flex h-[34px] w-[34px] items-center justify-center hover:opacity-70"><img src={`${ICON_BASE}/Email.png`} alt="" width={34} height={34} className="h-[34px] w-[34px] object-contain" /></a>}{author.linkedin && <a href={author.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${author.name} on LinkedIn`} className="inline-flex h-[34px] w-[34px] items-center justify-center hover:opacity-70"><img src={`${ICON_BASE}/LinkedIn.png`} alt="" width={34} height={34} className="h-[34px] w-[34px] object-contain" /></a>}</div>}
                    </div>
                    <div className="col-start-2 min-w-0 pt-[20px]">
                      <p className="m-0 text-[#231f20]" style={{fontFamily:"var(--font-barlow, Barlow, Arial, sans-serif)",fontSize:"16px",lineHeight:1.65,fontWeight:400}}>{author.bio}</p>
                      <Link href={`/resources/todays-harvest-Blog?author=${encodeURIComponent(author.id)}`} className="mt-[18px] inline-flex min-h-[40px] items-center justify-center bg-[#496d83] px-[18px] text-white hover:bg-[#3f5e70]" style={{fontFamily:"var(--font-montserrat, Montserrat, Arial, sans-serif)",fontSize:"14px",fontWeight:700}}>See All Articles</Link>
                    </div>
                  </div>

                  <div className="hidden md:grid md:grid-cols-[240px_minmax(0,1fr)] lg:grid-cols-[315px_minmax(0,1fr)]">
                    <div className="flex items-start pl-[30px] lg:pl-[55px]"><div className="h-[184px] w-[184px] overflow-hidden bg-[#f8f8f8] shadow-[4px_4px_5px_rgba(0,0,0,0.18)]"><img src={author.image} alt={author.name} width={212} height={212} loading="lazy" decoding="async" referrerPolicy="no-referrer" className="block h-full w-full object-cover" /></div></div>
                    <div className="min-w-0">
                      <h3 className="m-0 text-[#231f20]" style={{fontFamily:"var(--font-montserrat, Montserrat, Arial, sans-serif)",fontSize:"32px",lineHeight:1.15,fontWeight:700}}>{author.name}</h3>
                      {author.title && <p className="m-0 mt-[8px] text-[#686868]" style={{fontFamily:"var(--font-barlow, Barlow, Arial, sans-serif)",fontSize:"22px",lineHeight:1.42,fontWeight:700}}>{author.title}</p>}
                      {(author.email || author.linkedin) && <div className="mt-[17px] flex items-center gap-[8px]">{author.email && <a href={`mailto:${author.email}`} aria-label={`Email ${author.name}`} className="inline-flex h-[36px] w-[36px] items-center justify-center hover:opacity-70"><img src={`${ICON_BASE}/Email.png`} alt="" width={36} height={36} className="h-[36px] w-[36px] object-contain" /></a>}{author.linkedin && <a href={author.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${author.name} on LinkedIn`} className="inline-flex h-[36px] w-[36px] items-center justify-center hover:opacity-70"><img src={`${ICON_BASE}/LinkedIn.png`} alt="" width={36} height={36} className="h-[36px] w-[36px] object-contain" /></a>}</div>}
                      <p className="m-0 mt-[25px] max-w-[72ch] text-[#231f20]" style={{fontFamily:"var(--font-barlow, Barlow, Arial, sans-serif)",fontSize:"18px",lineHeight:1.6,fontWeight:400}}>{author.bio}</p>
                      <Link href={`/resources/todays-harvest-Blog?author=${encodeURIComponent(author.id)}`} className="mt-[18px] inline-flex min-h-[42px] items-center justify-center bg-[#496d83] px-[20px] text-white hover:bg-[#3f5e70]" style={{fontFamily:"var(--font-montserrat, Montserrat, Arial, sans-serif)",fontSize:"15px",fontWeight:700}}>See All Articles</Link>
                    </div>
                  </div>
                </article>
              ))}
            </section>
          ))}
        </div>
      </div>

      <section className="w-full bg-[#4f832a]">
        <div className="mx-auto flex min-h-[360px] w-[91.8%] max-w-[1760px] flex-col items-center justify-center py-[52px] text-center lg:min-h-[400px]">
          <h2 className="m-0 max-w-[900px] text-white" style={{fontFamily:"var(--font-montserrat, Montserrat, Arial, sans-serif)",fontSize:"clamp(30px, 3vw, 46px)",lineHeight:1.15,fontWeight:700}}>Sign up for our Today&apos;s Harvest Blog.</h2>
          <p className="m-0 mt-[26px] max-w-[700px] text-white" style={{fontFamily:"var(--font-barlow, Barlow, Arial, sans-serif)",fontSize:"clamp(17px, 1.4vw, 21px)",lineHeight:1.4,fontWeight:600}}>Get the latest blog articles delivered to your inbox.</p>
          <form action="#" method="post" className="mt-[30px] flex w-full max-w-[365px] flex-col items-start text-left">
            <label htmlFor="authors-newsletter-email" className="mb-[10px] text-white" style={{fontFamily:"var(--font-montserrat, Montserrat, Arial, sans-serif)",fontSize:"18px",lineHeight:1.3,fontWeight:700}}>Enter your email*</label>
            <div className="flex w-full items-stretch gap-[8px]">
              <input id="authors-newsletter-email" name="email" type="email" required placeholder="email@address.com" className="h-[44px] min-w-0 flex-1 rounded-[2px] border-0 bg-white px-[14px] text-[#231f20] outline-none placeholder:text-[#686868]" />
              <button type="submit" className="h-[44px] w-[112px] shrink-0 rounded-[4px] border-2 border-white bg-[#4f832a] text-white hover:bg-[#436d23]" style={{fontFamily:"var(--font-montserrat, Montserrat, Arial, sans-serif)",fontSize:"17px",fontWeight:700}}>Sign Up</button>
            </div>
            <p className="m-0 mt-[12px] text-white" style={{fontFamily:"var(--font-barlow, Barlow, Arial, sans-serif)",fontSize:"14px",lineHeight:1.3,fontWeight:700,fontStyle:"italic"}}>*Required Field</p>
          </form>
        </div>
      </section>
    </main>
  );
}
