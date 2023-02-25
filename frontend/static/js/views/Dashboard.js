import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params){
        super(params)
        this.setTitle("Dashboard")
    }

    async getHtml() {
        return `
        <h1>Welcome</h1>
        <p></p>
        <p>
            <a href="/post" data-link>Look at discovered monsters</a>
        </p>
        `;
    }
} 