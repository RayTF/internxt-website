import Image from 'next/image';

const HeroSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className="w-full lg:mx-4">
        <div className="flex max-w-screen-xl items-center justify-center lg:mx-auto lg:justify-start">
          <div className="flex flex-col space-y-10 space-x-0 py-20 px-5 lg:flex-row lg:space-y-0 lg:space-x-32 lg:pt-32 lg:pb-20">
            <div className="flex max-w-[533px] flex-col space-y-8  text-center lg:text-left">
              <h1 className="text-5xl font-semibold text-gray-100 md:text-6xl">
                {textContent.title.how} <span className="text-primary">{textContent.title.blueText}</span>{' '}
                {textContent.title.normalText}
              </h1>
              <p className="text-xl text-gray-80">{textContent.description}</p>
            </div>
            <div className="flex flex-col">
              <Image
                src={`/images/success-stories/${textContent.image.src}`}
                alt={textContent.image.alt}
                width={496}
                height={520}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
