import React from 'react';
import { HardDrives, Image, PaperPlaneTilt } from 'phosphor-react';

const SuiteSection = ({ textContent, lang }) => {
  return (
    <section className="relative flex w-full flex-col">
      {/* Apps designed to protect your privacy */}
      <div className="z-10 flex flex-col items-center py-16">
        <div className="px-6 text-left sm:text-center">
          <div className="flex flex-col items-center px-5 pb-16 text-center">
            <h1 className="text-4xl font-semibold">{textContent.SuiteSection.title}</h1>
            <p className="max-w-[756px] pt-5 text-xl font-normal">{textContent.SuiteSection.subtitle}</p>
          </div>

          <div className="flex flex-col space-y-20 text-left text-white lg:grid lg:grid-cols-1 lg:grid-rows-2 lg:gap-20 lg:space-y-0">
            <div className="flex flex-col items-start justify-start overflow-hidden rounded-2xl bg-cool-gray-100 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-0">
              <div className="w-auto space-y-10 p-20 lg:h-[480px] lg:w-[480px]">
                <HardDrives size={40} className="text-primary" />
                <h4 className="text-4xl font-medium lg:text-4xl">{textContent.SuiteSection.drive.title}</h4>
                <h5 className="text-base sm:text-xl">{textContent.SuiteSection.drive.subtitle}</h5>
              </div>

              <div className="lg:pl-15 relative mt-16 flex self-stretch  lg:mt-0">
                <div className="hidden lg:flex lg:max-w-[480px]">
                  <img src="/images/privacy/drive-image.png" />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start overflow-hidden rounded-2xl bg-cool-gray-100 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-0">
              <div className="w-auto space-y-10 p-20 lg:h-[480px] lg:w-[480px]">
                <Image size={40} className="text-primary" />
                <h4 className="text-4xl font-medium lg:text-4xl">{textContent.SuiteSection.photos.title}</h4>
                <h5 className="text-base sm:text-xl">{textContent.SuiteSection.photos.subtitle}</h5>
              </div>

              <div className="lg:pl-15 relative mt-16 flex self-stretch  lg:mt-0">
                <div className="hidden lg:flex lg:max-w-[480px]">
                  <img src="/images/privacy/photos-image.png" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start overflow-hidden rounded-2xl bg-cool-gray-100 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-0">
              <div className="w-auto space-y-10 p-20 lg:h-[480px] lg:w-[480px]">
                <PaperPlaneTilt size={40} className="text-primary" />
                <h4 className="text-4xl font-medium lg:text-4xl">{textContent.SuiteSection.send.title}</h4>
                <h5 className="text-base sm:text-xl">{textContent.SuiteSection.send.subtitle}</h5>
              </div>

              <div className="lg:pl-15 relative mt-16 flex self-stretch lg:mt-0">
                <div className="hidden lg:flex lg:max-w-[480px]">
                  <img src="/images/privacy/send-image.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuiteSection;
