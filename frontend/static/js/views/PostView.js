import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params){
        super(params)
        this.setTitle("Viewing Post")
    }

    async getHtml() {
       // console.log(this.params.id)
        const nu  = Number(this.params.id)

        async function getData(url){
            const response = await fetch(url)
            return response.json().catch(error => console.log(error));
        }

        const data = await getData('/static/js/views/data.json');

        const monster = data.find(item => item.id === nu)

        return `
        <figure class="monster-details">
        <img src='https://app.pixelencounter.com/api/basic/monsters/`+monster.id+`/webp?size=100' height='100' width='100'>
        <div class="right">
        <h1>`+monster.name+` (`+monster.uniqueness+`)</h1>
        <p>Element : `+monster.element+` </p>
        <p>Level : `+monster.level+`</p>
        </div>
        <div class="details">
        <p>Strenght `+monster.attributes.strength+`</p>
        <p>Dexterity `+monster.attributes.dexterity+`</p>
        <p>Endurance `+monster.attributes.endurance+`</p>
        <p>Intelligence `+monster.attributes.intelligence+`</p>
        <p>Encountered : `+monster.encountered+`</p>
        </div>
        <p class="back"><a href='/post' data-link>Back</a></p>
        </figure>`;
    }
}