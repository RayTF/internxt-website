import Image from 'next/image';
import Link from 'next/link';

interface UseCouponSectionProps {
  textContent: any;
  redirectUrl: string;
}

export const UseCouponSection = ({ textContent, redirectUrl }: UseCouponSectionProps) => {
  return (
    <section className="flex flex-col bg-primary-dark py-20 px-5">
      <div className="flex flex-col items-center gap-12 text-center">
        <div className="flex max-w-[810px] flex-col items-center gap-8 text-center">
          <p className="text-3xl font-semibold text-white md:text-5xl">{textContent.title}</p>
          <Link
            href={redirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="get-started-link"
            className="flex w-full items-center justify-center rounded-lg border border-transparent bg-white px-6 py-2 text-lg font-medium text-primary hover:bg-blue-10 focus:outline-none sm:inline-flex sm:w-max"
          >
            {textContent.cta}
          </Link>
        </div>
        <div className="content flex h-full w-full flex-col px-5 pt-6">
          <Image
            src="/images/home/internxt_secure_cloud_storage.webp"
            alt="Internxt secure cloud storage"
            draggable={false}
            loading="lazy"
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </section>
  );
};
