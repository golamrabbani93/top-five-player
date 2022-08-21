// !create common function get input value by id

function getInputValue(id) {
	const inputValue = document.getElementById(id);
	const inputValueString = inputValue.value;
	const input = parseInt(inputValueString);
	// !IF Input is Not A Number To show Below Alert
	if (isNaN(input)) {
		// !Alert Massage
		alert("Please Input Price with Valid Number (Ex:1000)");
		return 0;
	} else {
		return input;
	}
}

// !create common function get element text and show inner text by id

function getElementShow(id1, id2) {
	const getElement = document.getElementById(id1);

	const showElement = id2;

	getElement.innerText = showElement;
}
