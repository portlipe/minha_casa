import React from 'react';
import Header from './components/header/Header';
import Hero from './components/Hero';
import Units from './components/units';
import AboutUs from './components/aboutus';
import Services from './components/services';
import { MenuMobile } from './components/header/menuMobile';
import Local from './components/localization';
import Footer from './components/footer';

import Image from 'next/image';
import Activities from './components/ activities';
import Facilities from './components/facilities';
import Contact from './components/contact';

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <div>
      <a
        href="https://api.whatsapp.com/send?phone=5521973658192&text=Ol%C3%A1!"
        target="_blank"
        className="fixed bottom-[50px] right-4 md:right-[40px] z-40 flex transform transition-transform duration-300 hover:scale-105"
      >
        <div className="flex items-center justify-center gap-4">
          <div className="bg-white px-[12px] md:h-[41px] h-[28px] rounded-[12.64px] items-center justify-center flex drop-shadow-[3.5px] ">
            <h1 className="text-black lg:text-[13px] md:text-[11px] text-[10px] font-bold text-center whitespace-nowrap">
            Olá! 👋 Como podemos te ajudar?
            </h1>
          </div>
          <Image
            src="/whats.svg"
            className="md:w-14 md:h-14 w-[35px] h-[35px]"
            width={50}
            height={50}
            alt="Whats"
          />
        </div>
      </a>
        <Header />
        <MenuMobile/>
        {/* <CookieConsent/> */}
        <Hero />
        <Units/>
        <AboutUs/>
        <Services/>
        <Activities/>
        <Facilities />
        <Contact/>
        <Local/>
        <Footer/>
      </div>
    </div>
  )
}