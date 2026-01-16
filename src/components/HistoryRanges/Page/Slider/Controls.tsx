import styled from "styled-components";
import "swiper/css";
import type { HistoryCategoryEnum } from "../../enums";
import { HISTORY_RANGES_INFO_TO_TYPE } from "../../HistoryRangesInfoToType";

type ControlsProps = {
	selectCategory: HistoryCategoryEnum;
	onSelectCategoryChange: (category: HistoryCategoryEnum) => void;
	offset: number;
} & React.HTMLAttributes<HTMLDivElement>;

const TopBar = styled.div<{ offset: number }>`
  margin-left: ${({ offset }) => offset}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;    
  justify-content: flex-start; 
  margin-bottom: 12px;

	p {
		font-size: 14px;
	}

	.buttons {
		display: flex;
		gap: 6px;
	}


`;

const NavBtn = styled.button`
  width: 46px;
  height: 46px;
  border-radius: 100%;
	background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
	&:hover {
		transition: background-color 200ms ease;
		cursor: pointer;
		background: ${({ theme }) => theme.colors.border};
	}
`;

function Controls({
	selectCategory,
	onSelectCategoryChange,
	offset,
	...props
}: ControlsProps) {
	return (
		<TopBar offset={offset} {...props}>
			<p>
				{selectCategory + 1}/{HISTORY_RANGES_INFO_TO_TYPE.size}
			</p>
			<div className="buttons">
				<NavBtn
					disabled={selectCategory === 0}
					onClick={() => onSelectCategoryChange(selectCategory - 1)}
					aria-label="Prev"
				>
					‹
				</NavBtn>
				<NavBtn
					disabled={selectCategory === HISTORY_RANGES_INFO_TO_TYPE.size - 1}
					onClick={() => onSelectCategoryChange(selectCategory + 1)}
					aria-label="Next"
				>
					›
				</NavBtn>
			</div>
		</TopBar>
	);
}

export { Controls };
