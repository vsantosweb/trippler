import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination]);

export const Container = styled.div`
  div{
    div {
      text-align: center;
      font-size: 18px;
      background: #fff;
      max-height: 210px;
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  width: 100%;
  height: 100%;

  .swiper-pagination {
    bottom: 0;
    left: 0;
    margin: 0.8em;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 0.2em 0.5em;
    border-radius: 20px;
    position: absolute;
    z-index: 12222;
    font-size: 12px;
    font-weight: bold;
  }
`;
