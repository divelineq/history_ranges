import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { HistoryCategoryEnum } from "../../enums";
import type { HistoryRangesType } from "../../types";
import { Controls } from "./Controls";

type Props = {
	data: HistoryRangesType[];
	selectCategory: HistoryCategoryEnum;
	onSelectCategoryChange: (category: HistoryCategoryEnum) => void;
};

const Container = styled.div<{ isMobileSize: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  padding-left: 40px;
  width: 70%;
  margin: 0 auto;
  padding-bottom: 20px;
  align-items: center;

  overflow: hidden;

  .swiper {
    padding-left: 20px;
     --controls-h: 72px;
     --nav-offset: 34px;

    h1 {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 24px;
      font-weight: 400;
      }
  }

  .swiper-button-next,
  .swiper-button-prev {
    top: calc(50% + (var(--controls-h) / 2) + var(--nav-offset));
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    padding: 10px;
    border-radius:100%;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.10);
    display: ${({ isMobileSize }) => (isMobileSize ? "none" : "flex")};
    align-items: center;
    justify-content: center;
  }

  .swiper-button-next.swiper-button-disabled,
  .swiper-button-prev.swiper-button-disabled {
    opacity: 0;
    pointer-events: none;

  } 

  @media (max-width: 768px) {
    width: 90%;
    padding-left: 0;
    padding-bottom: 0;
    margin: 0 auto;
    border-top: 1px solid ${({ theme }) => theme.colors.border};

      .swiper {
        --controls-h: 0px;
        --nav-offset: 0px;
        padding-left: 0;
        transform: none !important;

         h1 {
          font-size: 18px;
          font-weight: 500;
          }

          p {
            font-size: 16px;
          }
      }

      .swiper-button-next,
      .swiper-button-prev {
        display: none !important;
        top: auto !important;
        transform: none !important;
        box-shadow: none !important;
      }

      .swiper-pagination {
        bottom: 20px; 
      }

      .swiper-pagination-bullet {
        width: 6px;
        height: 6px;
        background: #cfd3da;
        opacity: 1;
        margin: 0 6px !important; /* расстояние между точками */
      }

      .swiper-pagination-bullet-active {
        background: #2b2f38; /* активная точка темнее */
      }


  }
`;

const OFFSET = 50;

function Slider({ data, selectCategory, onSelectCategoryChange }: Props) {
	const mobileWidth = window.innerWidth <= 786;

	return (
		<Container isMobileSize={mobileWidth}>
			<Swiper
				modules={[Navigation, Pagination]}
				className="swiper"
				spaceBetween={!mobileWidth ? OFFSET : 0}
				slidesOffsetBefore={!mobileWidth ? OFFSET : 0}
				slidesPerView={2}
				pagination={{ clickable: true, enabled: mobileWidth }}
				navigation={{
					enabled: !mobileWidth,
				}}
			>
				<Controls
					offset={!mobileWidth ? OFFSET : 0}
					slot={!mobileWidth ? "container-start" : "container-end"}
					selectCategory={selectCategory}
					onSelectCategoryChange={onSelectCategoryChange}
				/>
				{data.map((item) => (
					<SwiperSlide key={item.year}>
						<h1>{item.year}</h1>
						<p>{item.name}</p>
					</SwiperSlide>
				))}
			</Swiper>
		</Container>
	);
}

export { Slider };
