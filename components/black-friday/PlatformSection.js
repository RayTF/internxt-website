import { AppleLogo, LinuxLogo, WindowsLogo } from 'phosphor-react';
import React from 'react';
import styles from './BF-HeroSection.module.scss';

const PlatformSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center pb-32">
        <div className="center flex items-center py-24 px-20 text-center">
          <p className="text-semibold text-4xl text-white">{textContent.PlatformSection.title}</p>
        </div>
        <div className="sm:gap-x-30 flex flex-row flex-wrap justify-center gap-y-10 gap-x-20 lg:gap-x-40">
          <div className="flex flex-col items-center space-y-6">
            <img src="/images/special-offer/black-friday/Linux.png" width={26.5} height={32} />
            <p className="text-white">{textContent.PlatformSection.linux}</p>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <img src="/images/special-offer/black-friday/Frame.png" width={26.5} height={32} />
            <p className="text-white">{textContent.PlatformSection.mac}</p>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <AppleLogo size={32} color="white" weight="fill" />
            <p className="text-white">{textContent.PlatformSection.iOS}</p>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <img src="/images/special-offer/black-friday/Union.png" width={26.5} height={32} />
            <p className="text-white">{textContent.PlatformSection.android}</p>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <WindowsLogo size={32} color="white" weight="fill" />
            <p className="text-white">{textContent.PlatformSection.windows}</p>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 -z-10 flex h-full w-full ${styles.neonBlur} pointer-events-none origin-center`}
      />
    </section>
  );
};

export default PlatformSection;
