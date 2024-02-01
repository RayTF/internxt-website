import React, { useEffect, useState } from 'react';
import { GlobalDialog, useGlobalDialog } from '../../contexts/GlobalUIManager';
import WheelComponent from './components/WheelComponent';
import { X } from '@phosphor-icons/react';
import TextInput from '../components/TextInput';
import { notificationService } from '../Snackbar';
import { stripeService } from '../services/stripeService';
import { CouponType } from '../../pages/api/stripe/get_coupons';

const SHOW_WHEEL_BANNER = 'showWheelBanner';

type views = 'wheel' | 'congratulations';

const COUPON_CODES = {
  '10% OFF': 'Wheel10',
  '15% OFF': 'Wheel15',
  '25% OFF': 'Wheel20',
  '30% OFF': 'Wheel30',
  '45% OFF': 'Wheel45',
  '50% OFF': 'Wheel50',
};

const WheelBanner = () => {
  const globalDialogs = useGlobalDialog();

  const [bannerVisible, setBannerVisible] = useState(false);
  const [view, setView] = useState<views>('wheel');
  const [result, setResult] = useState('');
  const [coupon, setCoupon] = useState('');

  useEffect(() => {
    const getSquareBannerLS = sessionStorage.getItem(SHOW_WHEEL_BANNER);
    if (getSquareBannerLS) setBannerVisible(false);
    else setBannerVisible(true);
  }, []);

  useEffect(() => {
    if (result) {
      stripeService
        .getCoupon(CouponType[COUPON_CODES[result]])
        .then((res) => {
          setCoupon(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [result]);

  function handleOnClose() {
    setBannerVisible(false);
    sessionStorage.setItem(SHOW_WHEEL_BANNER, 'false');
    globalDialogs.closeDialog(GlobalDialog.Wheel);
  }

  function handleOnCopy() {
    navigator.clipboard.writeText(coupon);
    notificationService.openSuccessToast('Copied to clipboard');
  }

  return (
    <section
      className={`${
        bannerVisible || globalDialogs.dialogIsOpen(GlobalDialog.Wheel) ? 'flex' : 'hidden'
      }  fixed top-0 left-0 right-0 bottom-0 z-50 h-screen bg-black bg-opacity-50 px-10 lg:px-0`}
    >
      <div
        className={`${
          bannerVisible || globalDialogs.dialogIsOpen(GlobalDialog.Wheel) ? 'flex' : 'hidden'
        } absolute top-1/2 left-1/2
        flex w-full max-w-[1000px] -translate-y-1/2 -translate-x-1/2 transform flex-col bg-white text-neutral-900 lg:rounded-2xl`}
      >
        <button className="absolute right-0 m-7 flex w-auto text-black" onClick={handleOnClose}>
          <X size={32} />
        </button>
        {view === 'wheel' ? (
          <WheelComponent onViewChange={() => setView('congratulations')} setResult={setResult} />
        ) : view === 'congratulations' ? (
          <div className="flex min-h-screen flex-col items-center justify-center space-y-7 px-5 lg:min-h-full lg:py-32">
            <div className="flex w-full flex-col items-center space-y-5 text-center">
              <p className="text-4xl font-bold text-primary lg:text-7xl">Congratulations!</p>
              <p className="text-xl font-semibold text-gray-100">Choose your plan and activate your offer with code:</p>
            </div>
            <div className="flex flex-col items-center space-y-8 rounded-2xl border-2 border-primary/7 bg-primary/2 p-9 px-5">
              <div className="flex max-w-[512px] flex-col items-center space-y-8">
                <div className="w-full">
                  <TextInput value={coupon} disabled className="items-center text-center" />
                </div>
                <button
                  onClick={handleOnCopy}
                  className="flex w-max flex-col items-center rounded-lg bg-primary py-2.5 px-20 text-lg font-medium text-white"
                >
                  Get your discount
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default WheelBanner;
