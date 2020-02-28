const url = "https://games-world.herokuapp.com/games";

(async function() {
    const games = await fetch(url).then(res => res.json());
    displayGames(games);
    attachEventListeners();
})();

function displayGames(games) {
    for(const game of games) {
        const h1  = document.createElement("h1");
        h1.href = url + game._id;
        h1.innerHTML = game.title;

        document.body.append(h1);
        document.body.append(document.createElement("p"));

        const p = document.createElement("p");
        document.body.append(p);
        p.innerHTML = game.description;

        const img = document.createElement("img");
        img.src = game.imageUrl;
        document.body.append(img);
        document.body.append(document.createElement("p"))

        const editBtn = document.createElement('button');
        editBtn.innerHTML = 'Edit';
        document.body.append(editBtn);
        editBtn.classList.add('edit-button');
        editBtn.setAttribute('game-id', games);
    
    
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'Delete';
        document.body.append(deleteBtn);
        deleteBtn.classList.add('delete-button');
        deleteBtn.setAttribute('game-id', games);
    }
}


function attachEventListeners() {
    document.addEventListener('click', handleClick);

    function handleClick(e) {
        const gameId = e.target.getAttribute('game-id');
        if(e.target.classList.contains('edit-button')) {
            handleEdit(gameId);
        } else if(e.target.classList.contains('delete-button')) {
            handleDelete(gameId);
        }
    }

}
function handleEdit(gameId) {
    fetch(`${url}/${gameId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'I love games'
    })
    .then(res => res.json())
    .then(console.log)
}

function handleDelete(gameId) {
    fetch(`${url}/${gameId}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(console.log);
}




