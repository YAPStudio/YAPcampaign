export default function renderChoice(scenario, eventIndex, processEvent) {
	renderPrompt(scenario, eventIndex);
	renderAnswers(scenario, eventIndex);
	renderConfirm(scenario, eventIndex, processEvent);
}

function renderPrompt(scenario, eventIndex) {
	const app = document.getElementById("app");
	const prompt = document.createElement("div");
	prompt.classList.add("prompt");
	const promptText = document.createElement("p");
	promptText.classList.add("prompt-text");
	promptText.appendChild(document.createTextNode(scenario.events[eventIndex].prompt.text));
	prompt.appendChild(promptText);
	if(scenario.events[eventIndex].prompt.images) {
		for(const imageName of scenario.events[eventIndex].prompt.images) {
			const image = document.createElement("img");
			image.classList.add("prompt-image");
			image.src = scenario.images[imageName].src;
			image.width = scenario.images[imageName].width;
			prompt.appendChild(image);
		}
	}
	if(scenario.events[eventIndex].prompt.subtext) {
		const subtext = document.createElement("p");
		subtext.classList.add("prompt-subtext");
		subtext.appendChild(document.createTextNode(scenario.events[eventIndex].prompt.subtext));
		prompt.appendChild(subtext);
	}
	app.appendChild(prompt);
}

function renderAnswers(scenario, eventIndex) {
	const app = document.getElementById("app");
	const answersContainer = document.createElement("div");
	answersContainer.classList.add("answers-container");
	let answerIndex = 0;
	for(const answer of scenario.events[eventIndex].answers) {
		const answerContainer = document.createElement("div");
		answerContainer.classList.add("answer-container");
		const answerInput = document.createElement("input");
		answerInput.type = "radio";
		answerInput.name = "answer";
		answerInput.value = answerIndex;
		const answerLabel = document.createElement("label");
		answerLabel.appendChild(answerInput);
		answerLabel.appendChild(document.createTextNode(answer.text));
		answerContainer.appendChild(answerLabel);
		answersContainer.appendChild(answerContainer);
		answerIndex += 1;
	}
	app.appendChild(answersContainer);
}

function renderConfirm(scenario, eventIndex, processEvent) {
	const app = document.getElementById("app");
	const buttonContainer = document.createElement("div");
	buttonContainer.classList.add("button-container");

	const button = document.createElement("button");
	button.appendChild(document.createTextNode("Confirm!"));
	button.addEventListener("click", () => {
		calculateResults(scenario, eventIndex);
		processEvent();
	});
	app.appendChild(button);
}

function calculateResults(scenario, eventIndex) {
	const answerIndex = document.querySelector("input[name=\"answer\"]:checked").value;
	for(const stateIndex in scenario.events[eventIndex].answers[answerIndex].results) {
		scenario.states[stateIndex] += scenario.events[eventIndex].answers[answerIndex].results[stateIndex];
	}
}