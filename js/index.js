// !select all player selected button by class
const playeButtons = document.getElementsByClassName("player-btn");

for (const playerButton of playeButtons) {
	playerButton.addEventListener("click", function (e) {
		// !get player List Length;
		const playerListLength = document.querySelectorAll("#player-list>li").length;
		if (playerListLength > 4) {
			alert("You cannot buy more than 5 people");
		} else {
			// !get Player Name from bselect button clicked
			const playerName = e.target.parentNode.childNodes[1].innerText;
			// !get ul by id
			const players = document.getElementById("player-list");
			// !create li Element
			const playerslist = document.createElement("li");
			// !li innerHTML
			playerslist.innerHTML = `
        <span class="ps-2 font-500">${playerName}</span
        `;
			// !set li Element to ul
			players.appendChild(playerslist);

			// !disable selected button
			e.target.classList.add("disabled");
		}
	});
}

// !create per player calculation
document.getElementById("calculate").addEventListener("click", function () {
	// !get per player price
	const perplayerPrice = getInputValue("per-player-price");

	// !get player List Length;
	const playerListLength = document.querySelectorAll("#player-list>li").length;

	// !calculate  players *per player price
	const totalPlayerPrice = perplayerPrice * playerListLength;
	// !get total-player-expenses element by id and show total Player Price
	getElementShow("total-player-expenses", totalPlayerPrice);
});

// !create total  calculation with manager and coach
document.getElementById("total-calculate").addEventListener("click", function () {
	// !get Manager Expenses
	const ManagerPrice = getInputValue("manager-price");
	// !get Coach Expenses
	const CoachPrice = getInputValue("coach-price");
	// !get total-player-expenses Expenses
	const totalPlayer = document.getElementById("total-player-expenses");
	const totalPlayerPriceString = totalPlayer.innerText;
	const totalPlayerPrice = parseInt(totalPlayerPriceString);

	// !make total expenses calculate
	const totalExpenses = totalPlayerPrice + CoachPrice + ManagerPrice;

	// !get total-expenses element by id and show total Expenses
	getElementShow("total-expenses", totalExpenses);
});
