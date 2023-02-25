import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params){
        super(params)
        this.setTitle("Posts")
    }

    async getHtml() {
        async function getData(url){
            const response = await fetch(url)
            return response.json().catch(error => console.log(error));
        }

        const data = await getData('/static/js/views/data.json');

        let listPosts = "<section class='monster-container'>";
        
        for(let i in data){
            listPosts += "<div class='monster card p-3'><a href='/post-view/"+data[i]['id']+"' data-link><img src='https://app.pixelencounter.com/api/basic/monsters/"+data[i]['id']+"/webp?size=100' height='100' width='100'><p>"+data[i]['name']+"</p></a></div>";
        }
        listPosts +="</section>";

        return `
        <h1></h1>
        `+listPosts;
    }
}