import React from 'react';
import { useRouter } from 'next/router';
import SignUpBanner from '../banners/SignUpBanner';

const HeroSection = ({ textContent, bannerText }) => {
  const router = useRouter();
  const lang = router.locale;

  return (
    <section className="overflow-hidden pt-16">
      <div className=" flex h-60 items-center justify-center border-b border-white bg-gradient-to-b from-primary to-primary-dark">
        <h1 className="text-center text-5xl font-semibold text-white sm:text-6xl">{textContent.title}</h1>
      </div>
      <div className="flex flex-col items-center justify-center p-5 text-center md:p-20 lg:text-left">
        <div className="flex w-full max-w-[672px] flex-col">
          <p className="text-2xl font-medium">{textContent.paragraph1.title}</p>
          <p className="mt-5 text-lg font-normal">{textContent.paragraph1.body}</p>
          <p className="mt-8 text-lg font-normal">{textContent.paragraph1.body2}</p>
        </div>
        <div className="mt-16 flex w-full items-center justify-center xl:px-64">
          <SignUpBanner textContent={bannerText} lang={lang} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-5 pt-11 text-center md:p-20 md:pt-0 lg:text-left">
        <div className="flex w-full max-w-[672px] flex-col">
          <p className="text-2xl font-medium">{textContent.paragraph2.title}</p>
          <p className="mt-5 text-lg font-normal">{textContent.paragraph2.body}</p>
          <p className="mt-8 text-lg font-normal">{textContent.paragraph2.body2}</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-5 pt-11 text-center md:p-20 md:pt-0 lg:text-left">
        <div className="flex w-full max-w-[672px] flex-col">
          <p className="text-2xl font-medium">{textContent.paragraph3.title}</p>
          <p className="mt-5 text-lg font-normal">{textContent.paragraph3.body}</p>
        </div>
        {lang !== 'en' && (
          <>
            <div className="mt-16 flex xl:px-64">
              <img
                src="/images/cyber-awareness/all-eyes-of-you.png"
                alt="all eyes of you image"
                className="rounded-3xl"
              />
            </div>

            <div className="flex flex-col items-center justify-center p-5 py-11 md:p-20">
              <p className="mb-4 text-center text-4xl font-semibold">{textContent.footer}</p>
              <a
                href="/pricing"
                className="mt-8 flex h-10 w-56 items-center justify-center rounded-lg bg-primary text-white hover:bg-primary-dark"
              >
                {textContent.button}
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
