import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params){
        super(params)
        this.setTitle("Settings")
    }

    async getHtml() {
        return `
        <h1>About</h1>
        <p>Made with pixel encounter API (generates randomly generated pixel monsters in SVG format).</p>
        <p>
            <a href="https://pixelencounter.com/" data-link>Visit the API</a>
        </p>
        `;
    }
}