'use client';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/file-converter/main-state/HeroSection';
import { ToolsSection } from '@/components/shared/ToolsSection';
import Footer from '@/components/layout/Footer';
import { FeaturesSection } from '@/components/file-converter/main-state/FeaturesSection';
import CtaSection from '@/components/shared/CtaSection';
import QASection from '@/components/shared/FaqSection';

const FileConverter = ({
  metatagsDescriptions,
  navbarLang,
  textContent,
  footerLang,
  lang,
  toolsContent,
  bannerLang,
}) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'file-converter');

  return (
    <Layout segmentName="File Converter" title={metatags[0].title} description={metatags[0].description} lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <HeroSection textContent={textContent.HeroSection} />

      <FeaturesSection textContent={textContent.FeaturesSection} bannerText={bannerLang.SignUpFileConverterBanner} />

      <CtaSection textContent={textContent.CtaSection} url="https://drive.internxt.com/new" />

      <ToolsSection textContent={toolsContent} lang={lang} />

      <CtaSection textContent={textContent.CtaSection2} url="https://drive.internxt.com/new" />

      <QASection textContent={textContent.QASection} />

      <Footer textContent={footerLang} lang={lang} hideNewsletter={false} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/en/metatags-descriptions.json`);
  const navbarLang = require(`@/assets/lang/en/navbar.json`);
  const textContent = require(`@/assets/lang/en/file-converter/file-converter.json`);
  const footerLang = require(`@/assets/lang/en/footer.json`);
  const toolsContent = require(`@/assets/lang/en/components/tools/ToolSection.json`);
  const bannerLang = require(`@/assets/lang/en/banners.json`);

  return {
    props: {
      metatagsDescriptions,
      navbarLang,
      textContent,
      footerLang,
      lang,
      toolsContent,
      bannerLang,
    },
  };
}

export default FileConverter;
