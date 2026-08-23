export default function USDAPaymentArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .usda-payment-page .hero-image-wrap {
              background-image: url('/images/financing/Farmers%20in%20field%20with%20tablet.jpg');
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
            }

            .usda-payment-page .hero-image-wrap img {
              visibility: hidden;
            }
          `,
        }}
      />
      {children}
    </>
  );
}
