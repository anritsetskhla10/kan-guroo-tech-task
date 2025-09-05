import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/autoplay';
import { partners } from '../../constants/PartnersConst';

const PartnersSwitcher = () => {
  const { t } = useTranslation();

  const translatedPartners = partners.map((partner, index) => ({
    ...partner,
    name: t(`homePage.partnersSection.list.${index}`),
  }));

  return (
    <div className="relative max-w-6xl mx-auto">
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 40 },
          1280: { slidesPerView: 5, spaceBetween: 40 },
        }}
        className="mySwiper py-4" 
      >
        {translatedPartners.map((partner, index) => (
          <SwiperSlide key={index} className="h-full">
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-6 bg-white
                         rounded-2xl shadow-md h-48 transition-transform duration-300 
                         hover:scale-105 hover:shadow-xl"
            >
              <div className="flex-grow flex items-center justify-center">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-20 max-w-full object-contain" 
                />
              </div>
              <p className="text-center mt-4 font-semibold text-sm text-text-main w-full">
                {partner.name}
              </p>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrows */}
      <div className="swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 left-[-45px] z-10 p-2 bg-white/50 dark:bg-black/30 rounded-full cursor-pointer hover:bg-white dark:hover:bg-black transition-colors">
        <FiChevronLeft className="text-2xl text-primary-dark dark:text-white" />
      </div>
      <div className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 right-[-45px] z-10 p-2 bg-white/50 dark:bg-black/30 rounded-full cursor-pointer hover:bg-white dark:hover:bg-black transition-colors">
        <FiChevronRight className="text-2xl text-primary-dark dark:text-white" />
      </div>
    </div>
  );
};

export default PartnersSwitcher;