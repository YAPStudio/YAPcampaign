/* eslint-disable prefer-const */
import _2016 from "./scenarios/2016.json";
import _2020 from "./scenarios/2020.json";
export let scenario = _2016;
export let eventIndex = 0;

export function incrementEventIndex() {
	eventIndex += 1;
}