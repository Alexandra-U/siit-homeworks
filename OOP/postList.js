class DetailView {
    constructor() {
         this.model = new GetData();
         displayGames(games);
         this.displayList();
    }

     async displayList() {
            const games = await this.model.getAll();
            const html = this.createHtml();
            document.querySelector('.js-article').append(html);
            
        

    
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
        }
    }
}
    

    
