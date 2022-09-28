import React from 'react';

const FooterSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center py-20 pt-16">
        <p className="text-sm font-medium md:text-xl">{textContent.FooterSection.copyright}</p>

        <div className="flex flex-row space-x-5 text-gray-50">
          <a href="https://www.internxt.com/privacy">
            <p>Privacy</p>
          </a>
          <a href="https://help.internxt.com/en/">
            <p>Contact us</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
