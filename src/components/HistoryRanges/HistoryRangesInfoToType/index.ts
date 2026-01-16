import { HistoryCategoryEnum } from "../enums";
import type { HistoryRangesType } from "../types";
import { BOOKS_INFO } from "./Books";
import { GAMES_INFO } from "./Games";
import { MOVIES_INFO } from "./Movies";
import { MUSIC_INFO } from "./Music";

export const HISTORY_RANGES_INFO_TO_TYPE: ReadonlyMap<
	HistoryCategoryEnum,
	HistoryRangesType[]
> = new Map([
	[HistoryCategoryEnum.Movies, MOVIES_INFO],
	[HistoryCategoryEnum.Music, MUSIC_INFO],
	[HistoryCategoryEnum.Books, BOOKS_INFO],
	[HistoryCategoryEnum.Games, GAMES_INFO],
]);
