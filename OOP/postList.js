class DetailView {
    constructor() {
         this.model = new GetData();
        //  document.querySelector('.js-article').addEventListener('click', this.handleDeleteClick.bind(this))
    }

    async displayList() {
        const games = await this.model.getAll();
        const html = this.createHtml();
        document.querySelector('.js-article').append(html);
    }

    emptyMovieList() {
        document.querySelector('.js-article').innerHTML = '';
    }

    createHtml(games) {
        const fragment = document.createDocumentFragment();

        for(const game of games) {
            const article = document.createElement('article');
            const poster = document.createElement('img');
            const title = document.createElement('h2');
            const deleteBtn = document.createElement('button');

            poster.src = game.imageUrl;
            title.innerHTML = game.title;
            // deleteBtn.innerHTML = 'Delete';
            // deleteBtn.setAttribute('data-delete-movie', game._id);

            article.append(poster, title) //deleteBtn);
            fragment.append(article);
        }

        return fragment;
    }
}