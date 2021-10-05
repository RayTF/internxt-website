import React, { useEffect, useState } from 'react';
import AOS from 'aos';

import HeroSection10TB from '../components/lifetime/HeroSection10TB';
import FeatureSection from '../components/lifetime/FeatureSection';
import GetLifetimeSection from '../components/lifetime/GetLifetimeSection';
import Footer from '../components/layout/Footer';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';
import { getDriveDownloadUrl } from '../lib/get-download-url';

const Lifetime10TB = ({
  lang, metatagsDescriptions, langJson, navbarLang, footerLang, downloadUrl, deviceLang
}) => {
  const [consentCookie, setConsentCookie] = useState(true);
  const [stripeObject, setStripeObject] = useState({});
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'drive');

  useEffect(() => {
    AOS.init();
    const stripeObj = { product: 'lifetime2TB' };
    setStripeObject(stripeObj);
  }, []);

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="drive">
      <HeroSection10TB lang={lang} textContent={langJson.HeroSection} />
      <FeatureSection lang={lang} textContent={langJson.FeatureSection} />
      <GetLifetimeSection lang={lang} textContent={langJson.GetLifetimeSection} />
      <Footer textContent={footerLang} lang={deviceLang} hideNewsletter />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const downloadUrl = await getDriveDownloadUrl(ctx);

  const lang = ctx.locale;
  const deviceLang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/lifetime.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang, downloadUrl, deviceLang, metatagsDescriptions, langJson, navbarLang, footerLang
    },
  };
}

export default Lifetime10TB;
