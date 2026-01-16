import styled, { css } from "styled-components";
import type { HistoryCategoryEnum } from "../enums";
import { HISTORY_RANGES_TYPES_TO_NAMES } from "../humanization";
import type { HistoryRangesType } from "../types";

type Props = {
	data: ReadonlyMap<HistoryCategoryEnum, HistoryRangesType[]>;
	selectCategory: HistoryCategoryEnum;
	onSelectCategoryChange: (category: HistoryCategoryEnum) => void;
};

const SIZE = 540;
const R = SIZE / 2;

const TARGET_ANGLE = -45;

const Circle = styled.div<{ rot: number }>`
  position: absolute;
  width: ${SIZE}px;
  height: ${SIZE}px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;

  transform: rotate(${({ rot }) => rot}deg);
  transition: transform 500ms ease;
  transform-origin: 50% 50%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const DotLabel = styled.span`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};

  opacity: 0;
  transform: scale(0.6);
  transition: opacity 200ms ease, transform 200ms ease;
`;

const DotActiveText = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: 600;

  position: absolute;
  left: 60px;
  top: 50%;

  opacity: 0;
  transform: translateY(-50%) translateX(-6px);

  transition-property: opacity, transform;
  transition-duration: 400ms, 400ms;
  transition-timing-function: ease, ease;
  transition-delay: 0s, 0s;

  pointer-events: none;
`;

const expandedStyles = css`
  width: 56px;
  height: 56px;
  background: ${({ theme }) => theme.colors.background};

  ${DotLabel} {
    opacity: 1;
    transform: scale(1);
  }

  ${DotActiveText} {
    opacity: 1;
    transform: translateY(-50%) translateX(0);
    transition-delay: 1s, 1s;
  }
`;

const Dot = styled.button<{ angle: number; active: boolean; rot: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0;
  padding: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.text};

  transform:
    translate(-50%, -50%)
    rotate(${({ angle }) => angle}deg)
    translate(${R}px)
    rotate(${({ angle }) => -angle}deg)
    rotate(${({ rot }) => -rot}deg);

  display: grid;
  place-items: center;
  cursor: pointer;

  transition: width 200ms ease, height 200ms ease, background-color 200ms ease;

  &:hover,
  &:focus-visible {
    ${expandedStyles}
  }
    

  ${({ active }) => active && expandedStyles}

  @media (max-width: 768px) {
    display: none;
  }
`;

function CircleWithDots({
	data,
	selectCategory,
	onSelectCategoryChange,
}: Props) {
	const angles = Array.from(data.keys()).map(
		(_, i) => (360 / data.size) * i - 90,
	);

	const rot = TARGET_ANGLE - angles[selectCategory];

	return (
		<Circle rot={rot}>
			{Array.from(data.keys()).map((n, i) => {
				const angle = angles[i];
				const active = i === selectCategory;

				return (
					<Dot
						key={n}
						type="button"
						angle={angle}
						active={active}
						rot={rot}
						onClick={() => onSelectCategoryChange(i)}
						aria-label={`Select ${n}`}
					>
						<DotLabel>{n + 1}</DotLabel>
						<DotActiveText>
							{HISTORY_RANGES_TYPES_TO_NAMES.get(n)}
						</DotActiveText>
					</Dot>
				);
			})}
		</Circle>
	);
}

export { CircleWithDots };
