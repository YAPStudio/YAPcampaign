import "./index.html";
import "./index.less";
import { scenario, eventIndex, incrementEventIndex } from "./scenario.js";
import renderNoChoice from "./renderNoChoice.js";
import renderChoice from "./renderChoice.js";
import renderResults from "./renderResults.js";

window.addEventListener("DOMContentLoaded", () => {
	renderIntro();
});

const eventCount = scenario.events.length;
const candidateCount = scenario.candidates.length;

function clear() {
	const app = document.getElementById("app");
	while(app.firstChild) {
		app.removeChild(app.firstChild);
	}
}

function processEvent() {
	if(eventIndex < eventCount) {
		clear();
		const eventType = scenario.events[eventIndex].type;
		switch(eventType) {
			case "choice":
				renderChoice(scenario, eventIndex, processEvent);
				break;
			case "no-choice":
				renderNoChoice(scenario, eventIndex, processEvent);
				break;
		}
		incrementEventIndex();
	} else {
		renderResults(scenario);
	}
}

function renderIntro() {
	const app = document.getElementById("app");
	const intro = document.createElement("div");
	intro.appendChild(document.createTextNode(scenario.intro));
	const start = document.createElement("button");
	start.appendChild(document.createTextNode("Start"));
	start.addEventListener("click", () => {
		processEvent();
	});
	app.appendChild(intro);
	app.appendChild(start);
}