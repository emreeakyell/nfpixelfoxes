import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCards, Pagination, Navigation, Autoplay } from "swiper";

import fox1 from "../assets/Nfts/fox1.png";
import fox2 from "../assets/Nfts/fox2.png";
import fox3 from "../assets/Nfts/fox3.png";
import fox4 from "../assets/Nfts/fox4.png";
import fox5 from "../assets/Nfts/fox5.png";

const Container = styled.div`
  width: 25vw;
  height: 70vh;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    background-color: ${(props) => props.theme.carouselColor};
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-button-next {
    //responsiveyi bozarsa değiştir
    color: ${(props) => props.theme.text};
    margin-right: 20px;
  }
  .swiper-button-prev {
    color: ${(props) => props.theme.text};
    margin-left: 20px;
  }
`;

const Coursel = () => {
  return (
    <Container>
      {" "}
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        scrollbar={{
          draggable: true,
        }}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={fox1} alt="The fox" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fox2} alt="The fox" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fox3} alt="The fox" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fox4} alt="The fox" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fox5} alt="The fox" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Coursel;
