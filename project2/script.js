window.addEventListener('load', () => {
    let tileArray = document.getElementsByClassName('clue-tile');

    for (let tile of tileArray) {
        tile.addEventListener('click', tileClicked);
    }

    document.getElementById('reset-board').addEventListener('click', () => {
        for (let tile of tileArray) {
            showTileUnseen(tile);
        }
    });

    document.getElementById('show-clues').addEventListener('click', () => {
        for (let tile of tileArray) {
            showTileClue(tile);
        }
    });

    document.getElementById('show-questions').addEventListener('click', () => {
        for (let tile of tileArray) {
            showTileQuestion(tile);
        }
    });

    fetchQuestionsAndUpdateBoard();

})


function tileClicked(event) {
    let tile = event.currentTarget;
    let state = tile.attributes["data-state"].value;
    console.log(tile, state);

    if (state === "unseen") {
        showTileClue(event.currentTarget);
    } else if (state === "clue") {
        showTileQuestion(event.currentTarget);
    } else if (state === "question") {
        showTileSeen(event.currentTarget);
    } else if (state === "seen") {
        showTileClue(event.currentTarget);
    } else {
        console.log("Tile state error!", event);
    }
}


function setBoardShow(event) {}


function showTileUnseen(tile) {
    tile.children[0].style.display = "inline-block";
    tile.children[1].style.display = "none";
    tile.children[2].style.display = "none";
    tile.attributes["data-state"].value = "unseen";
}

function showTileClue(tile) {
    tile.children[0].style.display = "none";
    tile.children[1].style.display = "inline-block";
    tile.children[2].style.display = "none";
    tile.attributes["data-state"].value = "clue";
}

function showTileQuestion(tile) {
    tile.children[0].style.display = "none";
    tile.children[1].style.display = "none";
    tile.children[2].style.display = "inline-block";
    tile.attributes["data-state"].value = "question";
}

function showTileSeen(tile) {
    tile.children[0].style.display = "none";
    tile.children[1].style.display = "none";
    tile.children[2].style.display = "none";
    tile.attributes["data-state"].value = "seen";
}


function fetchQuestionsAndUpdateBoard() {
    const questionPromise = new Promise((resolve, reject) => {
        let baseURL = 'http://jservice.io/api/';
        const MAX_CATEGORIES = 18418;

        // Get Category IDs randomly
        let categoryIDs = new Array;
        let i = 0;
        while (i < 6) {
            categoryIDs[i] = Math.ceil(Math.random() * MAX_CATEGORIES);

            // Check for duplicates
            let isUnique = true;
            for (let j = 0; j < i; ++j) {
                if (categoryIDs[i] === categoryIDs[j]) {
                    isUnique = false;
                    break;
                }
            }

            if (isUnique) {
                ++i;
                continue;
            } else {
                continue;
            }
        }

        let categories = new Array;
        for (let categoryIndex = 0; categoryIndex < 6; ++categoryIndex) {
            let categoryURL = baseURL + 'category?id=' + categoryIDs[categoryIndex];
            fetch(categoryURL)
                .then((response) => {
                    return response.json();
                })
                .then((json) => {
                    // Build Category Object
                    categories[categoryIndex] = {
                        title: json.title.toUpperCase(),
                        clues: new Array
                    }

                    // If there are only five clues use them in order.
                    if (json.clues_count === 5) {
                        for (let i = 0; i < 5; ++i) {
                            categories[categoryIndex].clues.push({
                                answer: json.clues[i].answer.toUpperCase(),
                                question: json.clues[i].question.toUpperCase()
                            })
                        }
                    } else {
                        let clueIDs = new Array;
                        let i = 0;
                        while (i < 5) {
                            clueIDs[i] = Math.ceil(Math.random() * json.clues_count);

                            let isUnique = true;
                            for (let j = 0; j < i; ++j) {
                                if (clueIDs[i] === clueIDs[j]) {
                                    isUnique = false;
                                    break;
                                }
                            }

                            if (isUnique) {
                                ++i;
                                continue;
                            } else {
                                continue;
                            }
                        }

                        for (let i = 0; i < 5; ++i) {
                            categories[categoryIndex].clues.push({
                                answer: json.clues[i].answer.toUpperCase(),
                                question: json.clues[i].question.toUpperCase()
                            })
                        }
                    }
                }).then(() => {
                    if (categories.length === 6 &&
                        categories[0] &&
                        categories[1] &&
                        categories[2] &&
                        categories[3] &&
                        categories[4] &&
                        categories[5]) {
                            resolve(categories);
                        }
                }).catch((err) => {
                    console.error(err);
                });
        }
    });
    questionPromise.then((categories) => {
        modifyGameBoard(categories);
    });
}


function modifyGameBoard(categories) {
    console.log(categories);

    for (let i = 0; i < 6; ++i) {
        let headingId = 'category-name-' + i;

        let currentHeading = document.getElementById(headingId);

        currentHeading.innerHTML = categories[i].title;

        for(let j = 0; j < 5; ++j) {
            let tileId = 'tile-' + i + '-' + j;

            let currentTile = document.getElementById(tileId);

            currentTile.children[1].innerHTML = categories[i].clues[j].question;
            currentTile.children[2].innerHTML = categories[i].clues[j].answer;
        }
    }
}