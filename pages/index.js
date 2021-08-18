import React, { useEffect, useState } from 'react';
import AOS from 'aos';

import HeroSection from '../components/drive/HeroSection';
import Footer from '../components/layout/Footer';
import TopBar from '../components/layout/TopBar';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';
import { getDriveDownloadUrl } from '../lib/get-download-url';
import setUTM from '../lib/conversions';

const Home = ({
  metatagsDescriptions, descriptions, cardDescriptions, footerDescriptions, downloadUrl
}) => {
  const [consentCookie, setConsentCookie] = useState(true);
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'drive');

  const handleAcceptCookies = () => {
    localStorage.setItem('CookieConsent', 'true');
    setConsentCookie(true);
  };

  useEffect(() => {
    AOS.init();
    const cookie = localStorage.getItem('CookieConsent');
    setUTM();

    if (!cookie) setConsentCookie(false);
  }, []);

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="home">
      <HeroSection descriptions={descriptions} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const downloadUrl = await getDriveDownloadUrl(ctx);

  const lang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const descriptions = require(`../assets/lang/${lang}/drive-descriptions.json`);
  const footerDescriptions = require(`../assets/lang/${lang}/footer-descriptions.json`);
  const cardDescriptions = require(`../assets/lang/${lang}/card-descriptions.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      downloadUrl, metatagsDescriptions, descriptions, footerDescriptions, cardDescriptions,
    },
  };
}

export default Home;
