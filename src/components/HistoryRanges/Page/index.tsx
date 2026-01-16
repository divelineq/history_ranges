import type { HistoryCategoryEnum } from "../enums";
import type { HistoryRangesType } from "../types";
import { CircleWithDots } from "./CircleWithDots";
import { DateRange } from "./DateRange";
import { Header } from "./Header";
import { Slider } from "./Slider";

type Props = {
	data: ReadonlyMap<HistoryCategoryEnum, HistoryRangesType[]>;
	selectCategory: HistoryCategoryEnum;
	onSelectCategoryChange: (category: HistoryCategoryEnum) => void;
};

function Page({ data, selectCategory, onSelectCategoryChange }: Props) {
	const currentData = data.get(selectCategory);

	if (!currentData) {
		return <div>Нет данных для отображения</div>;
	}

	return (
		<>
			<Header />
			<DateRange start={currentData[0].year} end={currentData.at(-1)!.year} />
			<CircleWithDots
				data={data}
				selectCategory={selectCategory}
				onSelectCategoryChange={onSelectCategoryChange}
			/>
			<Slider
				selectCategory={selectCategory}
				data={currentData}
				onSelectCategoryChange={onSelectCategoryChange}
			/>
		</>
	);
}

export { Page };
