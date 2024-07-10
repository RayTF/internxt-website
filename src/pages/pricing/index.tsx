import { useState } from 'react';
import Script from 'next/script';

import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';
import FAQSection from '@/components/shared/sections/FaqSection';
import CtaSection from '@/components/pricing/CtaSection';

import { sm_faq, sm_breadcrumb } from '@/components/utils/schema-markup-generator';
import BestStorageSection from '@/components/pricing/BestStorageSection';
import FileParallaxSection from '@/components/home/FileParallaxSection';
import { Eye, Fingerprint, LockKey, ShieldCheck } from '@phosphor-icons/react';
import InfoSection from '@/components/shared/sections/InfoSection';
import { PricingSection } from '@/components/shared/pricing/PricingSection';
import { Interval } from '@/components/services/stripe.service';
import usePricing from '@/hooks/usePricing';
import { checkout } from '@/lib/auth';
import { CouponType } from '@/lib/types';
import { SwitchButtonOptions } from '@/components/shared/pricing/components/PlanSwitch';

interface PricingProps {
  metatagsDescriptions: Record<string, any>[];
  navbarLang: Record<string, any>;
  footerLang: Record<string, any>;
  lang: string;
  textContent: Record<string, any>;
  homeComponentsLang: Record<string, any>;
}

const Pricing = ({ metatagsDescriptions, navbarLang, footerLang, lang, textContent }: PricingProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'pricing');

  const cardsData = [
    {
      icon: ShieldCheck,
      title: textContent.InfoSection.cards[0].title,
      description: textContent.InfoSection.cards[0].description,
    },
    {
      icon: LockKey,
      title: textContent.InfoSection.cards[1].title,
      description: textContent.InfoSection.cards[1].description,
    },
    {
      icon: Eye,
      title: textContent.InfoSection.cards[2].title,
      description: textContent.InfoSection.cards[2].description,
    },
    {
      icon: Fingerprint,
      title: textContent.InfoSection.cards[3].title,
      description: textContent.InfoSection.cards[3].description,
    },
  ];

  const { products, loadingCards, currencyValue, coupon } = usePricing({
    couponCode: CouponType.AllPlansCoupon,
  });

  const [pageName, setPageName] = useState('Pricing Individuals Annually');
  const [activeSwitchPlan, setActiveSwitchPlan] = useState<SwitchButtonOptions>('Individuals');
  const [billingFrequency, setBillingFrequency] = useState<Interval>(Interval.Year);
  const [businessBillingFrequency, setBusinessBillingFrequency] = useState<Interval>(Interval.Year);

  const isBusiness = activeSwitchPlan === 'Business';
  const infoText = isBusiness ? textContent.InfoSectionForBusiness : textContent.InfoSection;
  const faqSection = isBusiness ? textContent.FaqSectionForBusiness : textContent.FaqSection;

  const onPlanTypeChange = (activeSwitchPlan: SwitchButtonOptions, interval?: Interval) => {
    setActiveSwitchPlan(activeSwitchPlan);

    if (interval) {
      setBillingFrequency(interval);
      setPageName(`Pricing Individuals ${interval}`);
    }
  };

  const onIndividualSwitchToggled = (interval: Interval) => {
    setBillingFrequency(interval);
  };

  const onBusinessSwitchToggled = (interval: Interval) => {
    setBusinessBillingFrequency(interval);
  };

  const onCheckoutButtonClicked = (planId: string, planType: 'individuals' | 'business') => {
    const billingFrequencyForBilling = planType === 'individuals' ? billingFrequency : businessBillingFrequency;

    checkout({
      planId: planId,
      couponCode: coupon,
      currency: currencyValue ?? 'eur',
      mode: billingFrequencyForBilling === Interval.Lifetime ? 'payment' : 'subscription',
    });
  };

  return (
    <>
      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_faq(textContent.SchemaMarkupQuestions.faq)}
      </Script>

      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_breadcrumb('Pricing', 'pricing')}
      </Script>

      <Layout segmentName={pageName} title={metatags[0].title} description={metatags[0].description} lang={lang}>
        <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

        <PricingSection
          textContent={textContent.tableSection}
          lang={lang}
          billingFrequency={billingFrequency}
          businessBillingFrequency={businessBillingFrequency}
          decimalDiscountForIndividualPlans={0.2}
          products={products}
          loadingCards={loadingCards}
          activeSwitchPlan={activeSwitchPlan}
          onCheckoutButtonClicked={onCheckoutButtonClicked}
          onPlanTypeChange={onPlanTypeChange}
          onIndividualSwitchToggled={onIndividualSwitchToggled}
          onBusinessSwitchToggled={onBusinessSwitchToggled}
        />

        {isBusiness ? <div className="flex w-screen border border-gray-10" /> : undefined}

        <InfoSection textContent={infoText} withoutCta={isBusiness} lang={lang} cards={cardsData} />

        <BestStorageSection hideTitleAndDescription textContent={textContent.BestStorageSection} />

        <FileParallaxSection />

        <FAQSection textContent={faqSection} />

        {!isBusiness ? <CtaSection textContent={textContent.lastCtaSection} /> : undefined}

        <Footer textContent={footerLang} lang={lang} hideNewsletter={false} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/pricing.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      metatagsDescriptions,
      footerLang,
      navbarLang,
      lang,
      textContent,
    },
  };
}

export default Pricing;
