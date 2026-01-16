import { HistoryCategoryEnum } from "./enums";

export const HISTORY_RANGES_TYPES_TO_NAMES: ReadonlyMap<
	HistoryCategoryEnum,
	string
> = new Map([
	[HistoryCategoryEnum.Movies, "Фильмы"],
	[HistoryCategoryEnum.Books, "Книги"],
	[HistoryCategoryEnum.Games, "Игры"],
	[HistoryCategoryEnum.Music, "Музыка"],
]);
