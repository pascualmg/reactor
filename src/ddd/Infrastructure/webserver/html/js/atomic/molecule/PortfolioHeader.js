class PortfolioHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
<style>
   .portfolio-header {
    background-image: url("https://raw.githubusercontent.com/pascualmg/cdn/main/header-background.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw; /* Ancho total de la vista */
    height: auto; 
} 

    .header-content {
        background-color: var(--aqua-bg);
    }
    .header-social-media {
        background-color: var(--bg-alt);
    }
    .header-location {
        color: var(--magenta);
    }
    .header-photo img {
        border-radius: 50%; 
        object-fit: cover; 
        width: 200px; 
        height: 200px; 
    }
    .header-title {
        color: var(--aqua); /* Color de los títulos */
    }
     .header-title-2 {
        color: var(--head2); /* Color de los títulos */
    }
     .header-title-3 {
        color: var(--head3); /* Color de los títulos */
    }
    
    .centeredText {
        text-align: center;
    }
    
</style>
<section class="portfolio-header">
    <div class="header-content">
        <div class="header-photo">
            <img src="https://raw.githubusercontent.com/pascualmg/cdn/main/me.png" alt="Profile picture">
        </div>
        <h1 class="header-title centeredText">PascualMG</h1>
        <h2 class="header-title-2 centeredText">PHP backend Software engineer</h2>
        <h3 class="header-title-3 centeredText" >and GW-BASIC junior</h3>
    </div>
    <div class="header-social-media">
        <!-- Social media buttons/icons -->
atomos para los botones de las rss 
    </div>
    <div class="header-location">
        <img src="https://cdn.wikimg.net/en/chronowiki/images/2/2d/EarthMan.gif" alt="earthbound"></>
    </div>
</section>`
    }
}

customElements.define('portfolio-header', PortfolioHeader);
export default PortfolioHeader