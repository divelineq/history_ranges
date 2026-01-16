import { useState } from "react";
import { HistoryCategoryEnum } from "./enums";
import { HISTORY_RANGES_INFO_TO_TYPE } from "./HistoryRangesInfoToType";
import { Page } from "./Page";

function HistoryRanges() {
	const [selectCategory, setSelectCategory] = useState(
		HistoryCategoryEnum.Books,
	);
	return (
		<Page
			data={HISTORY_RANGES_INFO_TO_TYPE}
			selectCategory={selectCategory}
			onSelectCategoryChange={setSelectCategory}
		/>
	);
}

export { HistoryRanges };
