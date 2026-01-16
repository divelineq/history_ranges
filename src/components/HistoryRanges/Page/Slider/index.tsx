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

const Container = styled.div`
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
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .swiper-button-next.swiper-button-disabled,
    .swiper-button-prev.swiper-button-disabled {
      opacity: 0;
      pointer-events: none;
} 
`;

const OFFSET = 50;

function Slider({ data, selectCategory, onSelectCategoryChange }: Props) {
	return (
		<Container>
			<Swiper
				modules={[Navigation, Pagination]}
				className="swiper"
				spaceBetween={OFFSET}
				slidesOffsetBefore={OFFSET}
				slidesPerView={2}
				navigation={{
					enabled: true,
				}}
			>
				<Controls
					offset={OFFSET}
					slot="container-start"
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
