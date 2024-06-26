import React from 'react';
import { CTAButtonArrowDP, HSecondary, SectionWrapper, CTAButton } from './';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

const FVE = () => {
  return (
    <SectionWrapper id='fve' innerDivStyle='flex my-32 md:my-32 flex-col justify-center bg-primary-50 rounded-lg items-center mx-8 md:mx-16 lg:mx-36 w-screen sm:grid sm:grid-cols-2 shadow-xl'>
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div
          className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
        >
          <h2 className="text-4xl sm:text-6xl mb-10 text-center font-bold">
            FVE na ohřev vody
          </h2>

          <p className="text-m sm:text-l">
            Máte jedinečnou příležitost získat dotaci až 70 000 Kč na instalaci FVE na ohřev vody. Ušetřete na energiích, chraňte planetu a užívejte si teplou vodu díky slunci. Tato nabídka je omezená, tak neváhejte. Investujte do své budoucnosti a budoucnosti naší planety. Pro více informací nás kontaktujte.
          </p>

          <div className="mt-4 md:mt-8">
            <Link
              href='https://www.damepanely.cz/'
              className="inline-block rounded-full bg-green-500 px-6 pb-2.5 pt-2.5 text-xl font-bold leading-normal text-white shadow-md transition ease-in-out hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg scale-100 hover:scale-110 duration-200"
            >
              Získejte FVE na ohřev vody za symbolickou korunu!
            </Link>
          </div>
        </div>
      </div>
      <div className='w-full h-full aspect-w-4 aspect-h-3'>
        <img
          src='/business/fve_zoomed.png'
          alt='house'
          className='object-cover object-center h-full w-full rounded-tr-lg rounded-br-lg'
        />
      </div>
    </SectionWrapper >
  );
};

export default FVE;
