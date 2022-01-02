export default function renderNoChoice(scenario, eventIndex, processEvent) {
	renderPrompt(scenario, eventIndex);
	renderConfirm(processEvent);
}

function renderPrompt(scenario, eventIndex) {
	const app = document.getElementById("app");
	const promptContainer = document.createElement("div");
	promptContainer.classList.add("prompt-container");
	const prompt = document.createElement("p");
	prompt.classList.add("prompt-text");
	prompt.appendChild(document.createTextNode(scenario.events[eventIndex].prompt));
	promptContainer.appendChild(prompt);
	if(scenario.events[eventIndex].image) {
		const image = document.createElement("img");
		image.classList.add("prompt-image");
		image.src = scenario.images[scenario.events[eventIndex].image].src;
		image.width = scenario.images[scenario.events[eventIndex].image].width;
		promptContainer.appendChild(image);
	}
	if(scenario.events[eventIndex].subtext) {
		const subtext = document.createElement("p");
		subtext.classList.add("prompt-subtext");
		subtext.appendChild(document.createTextNode(scenario.events[eventIndex].subtext));
		promptContainer.appendChild(subtext);
	}
	app.appendChild(promptContainer);
}

/*
function renderSubText(scenario, eventIndex) {
	const app = document.getElementById("app");
	const subtextContainer = document.createElement("div");
	subtextContainer.classList.add("subtext-container");
	const subtext = document.createElement("p");
	promptText.classList.add("prompt-text");
	promptText.appendChild(document.createTextNode(scenario.events[eventIndex].text));
	promptContainer.appendChild(promptText);
	if(scenario.events[eventIndex].subtext) {
		const image = document.createElement("img");
		image.src = scenario.images[scenario.events[eventIndex].image].src;
		image.width = scenario.images[scenario.events[eventIndex].image].width;
		promptContainer.appendChild(image);
	}
	app.appendChild(question);
}
*/

function renderConfirm(processEvent) {
	const app = document.getElementById("app");
	const button = document.createElement("button");
	button.appendChild(document.createTextNode("Confirm!"));
	button.addEventListener("click", () => {
		processEvent();
	});
	app.appendChild(button);
}