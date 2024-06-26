import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Alarm } from '@phosphor-icons/react';

import Countdown from '@/components/components/Countdown';
import { Interval } from '@/components/services/stripe.service';
import Header from '@/components/shared/Header';
import HeroSectionSafeArea from '@/components/shared/HeroSectionSafeArea';
import usePricing from '@/hooks/usePricing';
import { getImage } from '@/lib/getImage';
import { CardsType } from '@/pages/affiliates/[filename]';
import { PriceCardsForAffiliatesPartners } from './PriceCardsForAffiliatesParnters';
import CardSkeleton from '@/components/components/CardSkeleton';
import { CouponType } from '@/lib/types';

interface HeroSectionForPartnerProps {
  textContent: any;
  cardsType: CardsType | undefined;
  pathname: string;
  couponName: CouponType;
}

interface ActivePlan {
  currency: string;
  price: string;
  priceId: string;
  storage: string;
}

export const HeroSectionForPartner = ({ textContent, cardsType, pathname, couponName }: HeroSectionForPartnerProps) => {
  const [activeSwitchPlan, setActiveSwitchPlan] = useState<string>('5TB');
  const [activeProduct, setActiveProduct] = useState<ActivePlan>();
  const isOnlyOnePlan = cardsType === 'one';

  const { products, coupon, loadingCards, currency, currencyValue } = usePricing({
    couponCode: couponName,
  });

  const lifetimePlans = products?.individuals?.[Interval.Lifetime];

  useEffect(() => {
    if (!loadingCards && lifetimePlans && lifetimePlans.length > 0) {
      const initialProduct = lifetimePlans.find((plan: ActivePlan) => plan.storage === '5TB');
      if (initialProduct) {
        setActiveProduct(initialProduct);
        setActiveSwitchPlan('5TB');
      }
    }
  }, [loadingCards, lifetimePlans]);

  return (
    <section
      className="overflow-hidden bg-cover bg-no-repeat pt-12 lg:pb-10"
      style={{
        backgroundImage: `url('${getImage('/images/lifetime/celebration/normal-bg.png')}')`,
      }}
    >
      <HeroSectionSafeArea>
        <div className="flex max-w-[545px] flex-col gap-12 text-white">
          {cardsType === 'all' ? (
            <div className="flex flex-row items-center gap-6">
              <Image src={getImage(`/images/affiliates/logos/${pathname}.svg`)} alt="PCMag" width={74} height={89} />
              <p className="max-w-[250px] text-lg font-medium lg:text-2xl">{textContent.exclusiveLabel[pathname]}</p>
            </div>
          ) : undefined}
          <div className="hidden flex-row items-center gap-4 rounded-lg lg:flex">
            <Alarm size={32} className=" text-white" />
            <Countdown textColor={'white'} />
          </div>
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <Header>{textContent[cardsType!].title}</Header>
            {textContent[cardsType!].description.map((text, index) => (
              <p key={index} className="hidden font-semibold text-white lg:flex lg:text-2xl">
                {text}
              </p>
            ))}
          </div>
        </div>
        <div className="hidden flex-col gap-3 lg:flex">
          {isOnlyOnePlan || (!lifetimePlans && loadingCards) ? undefined : (
            <div className="flex w-full flex-col gap-7">
              <div className="flex w-full items-center justify-center text-2xl font-medium text-white">
                <p>{textContent.all.choosePlanLabel}</p>
              </div>
              <div id="billingButtons" className="flex flex-row rounded-lg bg-cool-gray-10 p-0.5">
                {lifetimePlans.map((product: ActivePlan) => (
                  <button
                    key={product.storage}
                    type="button"
                    onClick={() => {
                      setActiveSwitchPlan(product.storage);
                      setActiveProduct(product);
                    }}
                    className={`w-full rounded-lg py-0.5 px-6 font-semibold ${
                      activeSwitchPlan === product.storage ? 'bg-green text-white shadow-sm' : 'text-gray-100'
                    }`}
                  >
                    {product.storage}
                  </button>
                ))}
              </div>
            </div>
          )}
          {activeProduct ? (
            <PriceCardsForAffiliatesPartners
              coupon={coupon}
              currency={currency}
              currencyValue={currencyValue}
              planId={activeProduct?.priceId}
              popular={activeProduct?.storage === '5TB'}
              price={Number(activeProduct?.price) * 0.2}
              priceBefore={activeProduct?.price.split('.')[0]}
              storage={activeProduct.storage}
            />
          ) : (
            <CardSkeleton />
          )}
        </div>
      </HeroSectionSafeArea>

      <div className="flex w-full flex-col bg-white p-3 lg:hidden">
        <div className="flex flex-col items-center justify-center gap-3">
          {isOnlyOnePlan || (!lifetimePlans && loadingCards) ? undefined : (
            <div className="flex w-full flex-col gap-7">
              <div className="hidden w-full items-center justify-center text-2xl font-medium text-white lg:flex">
                <p>{textContent.all.choosePlanLabel}</p>
              </div>
              <div id="billingButtons" className="flex flex-row rounded-lg bg-cool-gray-10 p-0.5">
                {lifetimePlans.map((product: ActivePlan) => (
                  <button
                    key={product.storage}
                    type="button"
                    onClick={() => {
                      setActiveSwitchPlan(product.storage);
                      setActiveProduct(product);
                    }}
                    className={`w-full rounded-lg py-0.5 px-6 font-semibold ${
                      activeSwitchPlan === product.storage ? 'bg-green text-white shadow-sm' : 'text-gray-100'
                    }`}
                  >
                    {product.storage}
                  </button>
                ))}
              </div>
            </div>
          )}
          {activeProduct ? (
            <PriceCardsForAffiliatesPartners
              coupon={coupon}
              currency={currency}
              currencyValue={currencyValue}
              planId={activeProduct?.priceId}
              popular={activeProduct?.storage === '5TB'}
              price={Number(activeProduct?.price) * 0.2}
              priceBefore={activeProduct?.price.split('.')[0]}
              storage={activeProduct.storage}
            />
          ) : (
            <CardSkeleton />
          )}
        </div>
      </div>
    </section>
  );
};
