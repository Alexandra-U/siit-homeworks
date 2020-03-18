// get data

class GetData {
    apiUrl = "https://games-world.herokuapp.com/games";
    getAll() {
        return fetch(this.apiUrl).then(res => res.json());
    }
   
}

// display data

class DisplayData {
    constructor() {
        const model = new GetData();
        this.posts = model.getAll();
    }

    async displayList() {
        const fragment = document.createDocumentFragment();

        for(const post of await this.posts) {
            const postHtml = this.createPostHtml(post);
            fragment.append(postHtml);
        }
        document.body.append(fragment);
    }



    createPostHtml(post) {
        const p = document.createElement("p");
        const a  = document.createElement("a");
        a.href = 'detailList.html?postId=' + post._id;
        a.innerHTML = post.title;
        p.append(a);

        return p; 
    } 
}

const view = new DisplayData();
view.displayList();

// delete data

class AddEventListener {
    constructor() {
         document.querySelector(".js-delete").addEventListener("click", handleClick); 
         document.querySelector(".js-create").addEventListener("click", addGame);  
         document.querySelector(".js-update").addEventListener("click", updateGame); 
        }
    }
    const event = new AddEventListener();

    function handleClick(e) {
        apiUrl = "https://games-world.herokuapp.com/games";
        fetch(`${apiUrl}/${e}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(console.log("Deleted"));

        }

// edit data/ update


function updateGame() {
    fetch("https://games-world.herokuapp.com/games", {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'I love games'
    })
    .then(res => res.json())
    .then(console.log)
}



// add data

function addGame(game) {
    fetch("https://games-world.herokuapp.com/games", {
        method: "POST",
        data: game
    });

    console.log({
        "title": "Super Bunny Man", 
        "releaseDtae": "13339229600", 
        "genre": "Action, Indie",
        "publisher": "Catobyte",
    });
}


const details = new DetailView();
details.displayPost();