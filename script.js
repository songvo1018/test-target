const rangeInput = document.getElementById("rangeInput");
const rangeInputStyle = getComputedStyle(rangeInput);
const rangeOutput = document.getElementById("rangeOutput");
const target = document.getElementById("target");
const infoOutput = document.getElementById("info");

const MAX_VALUE = rangeInput.max;
target.innerHTML = `$${MAX_VALUE}`;

const setValue = () => {
	const percentageStep = 100 / rangeInput.max;
	const newValue = rangeInput.value - rangeInput.min;

	const newPosition =
		((newValue * parseInt(rangeInputStyle.width)) / 100) * percentageStep;

	rangeOutput.innerHTML = `<span>$${newValue}</span>`;
	rangeOutput.style.left = `calc(${newPosition}px)`;

	// update information block
	(function (newValue) {
		const diff = MAX_VALUE - newValue;
		let str = `You have reached your target.`;

		if (newValue < MAX_VALUE) {
			str = `You need $${diff} more to reach your target.`;
		}

		infoOutput.innerHTML = str;
	})(newValue);
};

document.addEventListener("DOMContentLoaded", setValue);
rangeInput.addEventListener("input", setValue);
