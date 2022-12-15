import React from 'react';
import Image from 'next/image';

const FeaturesSection = ({ textContent, lang }) => {
  const maliciousMalwareText = textContent.scanFiles.description.split('malicious malware')[0];

  const maliciousMalware = textContent.scanFiles.description.substr(
    textContent.scanFiles.description.indexOf('malicious malware'),
    17,
  );

  return (
    <section className="relative bg-gradient-to-b from-cool-gray-5 to-white py-20 lg:pt-10 lg:pb-0">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center space-y-20 px-4 lg:p-16">
        {/* Marketing text */}
        <div className="flex w-full flex-col space-y-16">
          <div className="flex flex-col items-center space-y-6 px-4 text-center">
            <h3 className="text-4xl font-semibold">{textContent.whyToScan.title}</h3>
            <div className="flex flex-col">
              <p className="text-xl font-light text-gray-80">{textContent.whyToScan.description}</p>
              <p className="text-xl font-light text-gray-80">{textContent.whyToScan.description1}</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-16">
            {/* Viruses hate privacy */}
            <div className="flex flex-col items-center md:flex-row md:space-x-16">
              <div className="flex flex-col justify-center space-y-5 px-10 pb-7 text-center md:max-w-md md:pb-0 md:text-left">
                <p className="text-3xl font-semibold">{textContent.virusesHatePrivacy.title}</p>
                <p className="text-xl font-light">{textContent.virusesHatePrivacy.description}</p>
              </div>
              <div className="flex">
                <Image
                  src={`/images/virus-scanner/VirusesHatePrivacy.png`}
                  width={573}
                  height={390}
                  alt="Viruses Hate Privacy"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Prevent malware */}
            <div className="flex flex-col-reverse items-center md:flex-row md:space-x-16">
              <div className="flex">
                <Image
                  src={`/images/virus-scanner/StopMalware.png`}
                  width={573}
                  height={390}
                  alt="Viruses Hate Privacy"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center space-y-5 px-10 pb-7 text-center md:max-w-md md:pb-0 md:text-left">
                <p className="text-3xl font-semibold">{textContent.stopMalware.title}</p>
                <p className="text-xl font-light">{textContent.stopMalware.description}</p>
              </div>
            </div>
            {/* Free online scanner */}
            <div className="flex flex-col justify-center space-y-5 px-10 text-center md:max-w-3xl">
              <p className="text-3xl font-semibold">{textContent.freeOnlineScanner.title}</p>
              <p className="text-xl font-light">{textContent.freeOnlineScanner.description}</p>
            </div>
            {/* Scan files card and info */}
            <div className="flex flex-col items-center md:flex-row md:space-x-16">
              <div className="flex flex-col justify-center space-y-5 px-10 pb-7 text-justify md:max-w-md md:pb-0 md:text-left">
                <p className="text-center text-3xl font-semibold md:text-start">{textContent.scanFiles.title}</p>
                <p className="text-xl font-light">
                  {maliciousMalwareText}
                  {
                    <button
                      onClick={() => {
                        window.open('https://blog.internxt.com/what-is-malware/', '_blank');
                      }}
                    >
                      <p className="text-primary underline underline-offset-4">{maliciousMalware}</p>
                    </button>
                  }
                  .
                </p>
              </div>
              <div className="flex">
                <Image
                  src={`/images/virus-scanner/ScanFiles.png`}
                  width={573}
                  height={390}
                  alt="Viruses Hate Privacy"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
