import React from 'react';
import Image from 'next/image';
import { CaretRight } from 'phosphor-react';

const BannersSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center justify-center space-y-16 py-20">
        <div className="flex">
          <p className="text-2xl font-semibold text-gray-100 md:text-4xl">{textContent.title}</p>
        </div>
        <div className="flex flex-col space-y-9 md:flex-row md:space-y-0 md:space-x-9">
          <div className="flex w-screen max-w-xs flex-col items-center justify-center space-y-6 rounded-2xl bg-gray-1 p-10 text-center">
            <Image
              src="/images/virus-scanner/PasswordChecker.png"
              width={125}
              height={70}
              layout={'intrinsic'}
              loading={'lazy'}
            />
            <p className="max-w-[240px] text-2xl font-medium">{textContent.passwordCheckerBanner.title}</p>
            <div
              onClick={() => window.open('https://internxt.com/password-checker', '_blank')}
              className="flex cursor-pointer flex-row items-center justify-center text-primary"
            >
              <p className="text-sm font-semibold">{textContent.passwordCheckerBanner.cta}</p>
              <CaretRight size={14} weight={'bold'} />
            </div>
          </div>
          <div className="flex w-screen max-w-xs flex-col items-center justify-center space-y-6 rounded-2xl bg-gray-1 p-10 text-center">
            <Image
              src="/images/virus-scanner/ByteConverter.png"
              width={95}
              height={70}
              layout={'intrinsic'}
              loading={'lazy'}
            />
            <p className="max-w-[200px] text-2xl font-medium">{textContent.byteConverterBanner.title}</p>
            <div
              onClick={() => window.open('https://internxt.com/byte-converter', '_blank')}
              className="flex cursor-pointer flex-row items-center justify-center text-primary"
            >
              <p className="text-sm font-semibold">{textContent.byteConverterBanner.cta}</p>
              <CaretRight size={14} weight={'bold'} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannersSection;
