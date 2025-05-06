import Head from 'next/head';

type SeoProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
};

export default function Seo({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage,
  twitterCard,
  twitterTitle,
  twitterDescription,
  twitterImage,
}: SeoProps) {
  const defaultTitle = 'Evergreen Septic Service LLC';
  const defaultDescription =
    'Reliable, eco-conscious septic pumping and certified inspections in the foothills. Evergreen Septics delivers expert service with a personal touch.';
  const defaultKeywords = [
    'Septic pumping',
    'Septic inspections',
    'Foothills septic service',
    'Evergreen Septics',
    'Certified septic inspection',
    'Eco-friendly septic service',
  ];
  const defaultOgImage = 'https://www.evergreensepticsvc.com/assets/images/HeroSection.png';
  const defaultUrl = 'https://www.evergreensepticsvc.com/';

  return (
    <Head>
      <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords?.join(', ') || defaultKeywords.join(', ')} />
      <meta property="og:title" content={ogTitle || defaultTitle} />
      <meta property="og:description" content={ogDescription || defaultDescription} />
      <meta property="og:url" content={ogUrl || defaultUrl} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      <meta property="og:site_name" content="Evergreen Septic Service LLC" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website " />
      <meta name="twitter:card" content={twitterCard || 'summary_large_image'} />
      <meta name="twitter:title" content={twitterTitle || defaultTitle} />
      <meta name="twitter:description" content={twitterDescription || defaultDescription} />
      <meta name="twitter:image" content={twitterImage || defaultOgImage} />
      <link rel="canonical" href={ogUrl || defaultUrl} />
      <link rel="icon" href="/fav.svg" type="image/svg+xml" />
    </Head>
  );
}