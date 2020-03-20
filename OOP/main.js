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
         document.querySelector(".js-delete").addEventListener("click", deleteGame); 
         document.querySelector(".js-create").addEventListener("click", addGame);  
         document.querySelector(".js-update").addEventListener("click", updateGame); 
        }
    }
    const event = new AddEventListener();

    // delete 

    function deleteGame(id) {
        fetch(`${apiUrl}/${id}`, {
            method: 'DELETE'
        }).then(res => res.json()).then(jsonResp => console.log(jsonResp));

        }

// edit data/ update


function updateGame(id) {
    
    fetch(`${this.apiUrl}/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "title": "Super Mario", 
            "releaseDtae": "13339229600", 
            "genre": "Indie",
        })
        
    }).then(res => res.json()).then(jsonResp => console.log(jsonResp))
}



// add data

function addGame(game) {
    fetch(this.apiUrl, {
        method: "POST",
        body: JSON.stringify({
            "title": "Super Bunny Man", 
            "releaseDtae": "13339229600", 
            "genre": "Action, Indie",
            "publisher": "Catobyte"
            })
    }). then(res => res.json()).then(jsonResp => console.log(jsonResp))
}


const details = new GetData();
