import React, { useState } from "react";
import hero from "../../../assets/hero.png";
import Nav from "../Role/Mother/Nav";
import image1 from "../../../assets/Screenshot (42).png";
import image2 from "../../../assets/Screenshot (13).png";
import image3 from "../../../assets/cc28d30398b84c9473fd39a567e9ed97.png";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import LatestNews from "../../Component/Common/LatestNews";
import GlobalNew from "../../Component/Common/GlobalNew";
import Footer from "./Footer";
import { useEffect } from "react";
import { useAuth } from "../../../Context/AuthContext";
import LoadingIndicator from "../../Component/Common/LoadingIndidator";
import { formatDateTime } from "../../../utilities/timeFormateer";

function Index(props) {
  const { news } = useAuth();
  console.log(news);

  return (
    <>
      <div className="bg-gray-200">
        <div
          className="hero container bg-[url] bg-center h-screen"
          style={{
            backgroundImage: `url(${hero})`,
            backgroundPosition: `center`,
            backgroundSize: `100% auto`,
            // backgroundAttachment: `fixed`,
            backgroundRepeat: `no-repeat`,
            filter: `brightness(80%)`,
            width: "100%",
            height: "100vh",
          }}
        >
          <Nav />
          <div className=" md:grid md:grid-cols-2 mx-[5%] md:mx-[7%]">
            <div>
              <p className="text-3xl md:text-5xl  text-white pt-10 md:pt-20">
                Be On Time, Stay Protected: Seamlessly Scheduled Vaccinations!
                
              </p>
              
              <p className="text-white pt-5 text-xs md:text-lg line-clamp-3 ">
                 Our Immunization Monitoring System ensures you stay protected
                by prioritizing on-time vaccinations with a seamless scheduling
                process.
              </p>
              <div className="flex text-white mt-10 p-1 md:p-2 rounded-lg w-fit ms-10 text-lg font-bold bg-[#137E8F]">
                <button className="text-[16px]">See your schedule</button>
                <span className="pt-2 mx-2">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 48 48"
                    {...props}
                  >
                    <g fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M12 21a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm0 2v2h2v-2zm6 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm2 0h2v2h-2zm8-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm0 2v2h2v-2zm-18 8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm4 0v2h-2v-2zm6-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm2 2h-2v2h2z"
                        clipRule="evenodd"
                      ></path>
                      <path d="M36 32.5a1 1 0 1 0-2 0v2.914l1.293 1.293a1 1 0 0 0 1.414-1.414L36 34.586z"></path>
                      <path
                        fillRule="evenodd"
                        d="M12 7a1 1 0 1 1 2 0v5a1 1 0 1 0 2 0V9h10V7a1 1 0 1 1 2 0v5a1 1 0 1 0 2 0V9h3a3 3 0 0 1 3 3v16.07A7.001 7.001 0 0 1 35 42a6.992 6.992 0 0 1-5.745-3H9a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h3zm16 28a7.001 7.001 0 0 1 6-6.93V18H8v18a1 1 0 0 0 1 1h19.29a7.001 7.001 0 0 1-.29-2m12 0a5 5 0 1 1-10 0a5 5 0 0 1 10 0"
                        clipRule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>
            </div>
            <div></div>
          </div>
        </div>

        <div className="news mt-20 mx-[3%]">
          <div className=" mb-12">
            <p className=" text-3xl font-semibold mb-2 text-[#137E8F]">
              Leatest News
            </p>
            <hr className="border-b-[3px] border-[#137E8F] w-[35%]  mb-4" />
          </div>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={1}
            slidesPerView={3.6}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log("")}
            onSlideChange={() => console.log("")}
            className=""
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 1,
              },
              560: {
                slidesPerView: 2,
                spaceBetween: 1,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 1,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 1,
              },
            }}
          >
            <div className="flex flex-wrap">
              {news && news.length>0? 
                news.map((newsInfo) => {
                  return (
                    <SwiperSlide className="h-max gap-3 mx-1 px-3 bg-white rounded-xl">
                      <LatestNews
                        image={newsInfo.image_url
                        }
                        date={formatDateTime(newsInfo.publication_date)}
                        title={newsInfo.title}
                        detaile={newsInfo.description}
                      />
                    </SwiperSlide>
                  );
                }):
                <LoadingIndicator />}
               

           
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </Swiper>
        </div>
        <div className="news mt-20 mx-[3%]">
          <div className="mb-12">
            <p className="text-3xl font-semibold mb-2 text-[#137E8F]">
              Global News
            </p>
            <hr className="border-b-[3px] border-[#137E8F] w-[32%] mb-4" />
          </div>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={1}
            slidesPerView={4.6}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log()}
            onSlideChange={() => console.log()}
            className=""
            breakpoints={{
              0: {
                slidesPerView: 1.5,
                spaceBetween: 1,
              },
              590: {
                slidesPerView: 3,
                spaceBetween: 1,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 1,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 1,
              },
            }}
          >
            <div className="flex flex-wrap">
              <SwiperSlide className="h-max gap-3 mx-1 px-3 bg-white rounded-xl">
                <GlobalNew
                  header="More than 870,000 children in Ethiopia miss out on
              lifesaving measles, diphtheria, and tetanus vaccines in
              2018"
                  link="https://www.unicef.org/ethiopia/press-releases/more-870000-children-ethiopia-miss-out-lifesaving-measles-diphtheria-and-tetanus
              "
                  process="Press release"
                  date="16 July 2019"
                />
              </SwiperSlide>
              <SwiperSlide className="h-max gap-3 mx-1 px-3 bg-white rounded-xl">
                <GlobalNew
                  header="More than 870,000 children in Ethiopia miss out on
              lifesaving measles, diphtheria, and tetanus vaccines in
              2018"
                  link="https://www.unicef.org/ethiopia/press-releases/more-870000-children-ethiopia-miss-out-lifesaving-measles-diphtheria-and-tetanus
              "
                  process="Press release"
                  date="16 July 2019"
                />
              </SwiperSlide>
              <SwiperSlide className="h-max gap-3 mx-1 px-3 bg-white rounded-xl">
                <GlobalNew
                  header="More than 870,000 children in Ethiopia miss out on
              lifesaving measles, diphtheria, and tetanus vaccines in
              2018"
                  link="https://www.unicef.org/ethiopia/press-releases/more-870000-children-ethiopia-miss-out-lifesaving-measles-diphtheria-and-tetanus
              "
                  process="Press release"
                  date="16 July 2019"
                />
              </SwiperSlide>
              <SwiperSlide className="h-max gap-3 mx-1 px-3 bg-white rounded-xl">
                <GlobalNew
                  header="More than 870,000 children in Ethiopia miss out on
              lifesaving measles, diphtheria, and tetanus vaccines in
              2018"
                  link="https://www.unicef.org/ethiopia/press-releases/more-870000-children-ethiopia-miss-out-lifesaving-measles-diphtheria-and-tetanus
              "
                  process="Press release"
                  date="16 July 2019"
                />
              </SwiperSlide>
              <SwiperSlide className="h-max gap-3 mx-1 px-3 bg-white rounded-xl">
                <GlobalNew
                  header="More than 870,000 children in Ethiopia miss out on
              lifesaving measles, diphtheria, and tetanus vaccines in
              2018"
                  link="https://www.unicef.org/ethiopia/press-releases/more-870000-children-ethiopia-miss-out-lifesaving-measles-diphtheria-and-tetanus
              "
                  process="Press release"
                  date="16 July 2019"
                />
              </SwiperSlide>
              <SwiperSlide className="h-max gap-3 mx-1 px-3 bg-white rounded-xl">
                <GlobalNew
                  header="More than 870,000 children in Ethiopia miss out on
              lifesaving measles, diphtheria, and tetanus vaccines in
              2018"
                  link="https://www.unicef.org/ethiopia/press-releases/more-870000-children-ethiopia-miss-out-lifesaving-measles-diphtheria-and-tetanus
              "
                  process="Press release"
                  date="16 July 2019"
                />
              </SwiperSlide>
              <SwiperSlide className="h-max gap-3 mx-1 px-3 bg-white rounded-xl">
                <GlobalNew
                  header="More than 870,000 children in Ethiopia miss out on
              lifesaving measles, diphtheria, and tetanus vaccines in
              2018"
                  link="https://www.unicef.org/ethiopia/press-releases/more-870000-children-ethiopia-miss-out-lifesaving-measles-diphtheria-and-tetanus
              "
                  process="Press release"
                  date="16 July 2019"
                />
              </SwiperSlide>
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </Swiper>
        </div>

        <Footer />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8"></div>
      </div>
    </>
  );
}

export default Index;
