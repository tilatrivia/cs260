window.addEventListener('load', () => {
    let tileArray = document.getElementsByClassName('clue-tile');

    for (let tile of tileArray) {
        tile.addEventListener('click', tileClicked);
    }
})


function tileClicked(event) {
    let state = event.currentTarget.attributes["data-state"].value;
    console.log(state);

    if (state === "unseen") {
        event.currentTarget.children[0].style.display = "none";
        event.currentTarget.children[1].style.display = "inline-block";

        event.currentTarget.attributes["data-state"].value = "clue";
    } else if (state === "clue") {
        event.currentTarget.children[1].style.display = "none";
        event.currentTarget.children[2].style.display = "inline-block";

        event.currentTarget.attributes["data-state"].value = "question";
    } else if (state === "question") {
        event.currentTarget.children[2].style.display = "none";

        event.currentTarget.attributes["data-state"].value = "seen";
    } else if (state === "seen") {
        event.currentTarget.children[1].style.display = "inline-block";

        event.currentTarget.attributes["data-state"].value = "clue";
    } else {
        console.log("Tile state error!", event);
    }
}