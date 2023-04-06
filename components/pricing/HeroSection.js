import React from 'react';
import Image from 'next/image';
import { Alarm, Coin, CreditCard, Detective } from 'phosphor-react';
import Countdown from '../components/Countdown';
import { checkout } from '../../lib/auth';
import Infinity from '/public/images/lifetime/infinity.svg';

const TWOTB_OFF_COUPON = 'P8PSpVs6';

const HeroSection = ({ textContent }) => {
  const feeds = [
    {
      icon: Coin,
      title: textContent.feeds.firstFeed,
    },
    {
      icon: CreditCard,
      title: textContent.feeds.secondFeed,
    },
    {
      icon: Detective,
      title: textContent.feeds.thirdFeed,
    },
  ];

  return (
    <section className="overflow-hidden pt-12">
      <div className="flex flex-col items-center justify-center space-y-10 py-24 px-6 lg:flex-row lg:space-y-0 lg:space-x-48">
        <div className="flex flex-col space-y-10">
          <div className="flex max-w-[470px] flex-col items-center justify-center space-y-10 lg:items-start">
            <div className="flex flex-row rounded-lg bg-gray-5 px-5 py-2">
              <Alarm size={32} className="mr-4 text-primary" />
              <Countdown textColor={'black'} dt={'2023-04-25T00:00:00'} />
            </div>
            <div className="flex flex-col space-y-16">
              <div className="flex flex-col text-center lg:text-start">
                <p className="text-7xl font-bold">
                  {textContent.title.line1}
                  <span className="text-primary">{textContent.title.blueText}</span>
                  {textContent.title.line2}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center lg:items-start">
                <div className="flex flex-col items-start space-y-4">
                  {feeds.map((feed) => (
                    <div className="flex flex-row items-center space-x-4" key={feed.title}>
                      <feed.icon size={32} className="text-primary" />
                      <p className="text-xl font-medium text-gray-80">{feed.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-5 space-x-8 lg:flex-row lg:space-y-0">
            <button
              className="flex w-max items-center justify-center rounded-lg bg-primary px-5 py-3 font-semibold text-white"
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById('priceTable').offsetTop,
                  behavior: 'smooth',
                })
              }
            >
              {textContent.cta.title}
            </button>
          </div>
        </div>
        <div className="flex flex-col rounded-3xl">
          <div className="absolute h-[520px] w-[487px] rounded-3xl shadow-2xl" />
          <Image
            alt="Internxt lifetime plan"
            src="/images/pricing/internxt-lifetime-plan.png"
            className="z-10 shadow-2xl"
            width={613}
            height={520}
            layout="intrinsic"
            loading="eager"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
