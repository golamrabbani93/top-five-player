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
