export class Cards {
  constructor(options) {
    this.options = Object.assign(
      {},
      {
        title: "",
        paragraph: "",
        cards: [],
        debug: false
      },
      options
    );
    if (!this.shouldRun()) {
      // If we're not between the running dates, get out
      return false;
    }

    let cards = "";
    this.options.cards.forEach(card => {
      cards += `
      <div class="card" style="background-image: url('${card.image}');">
      <h2>${card.title}</h2>
      <a class="cta" href="${card.cta_link}">${card.cta_label}</a>
      </div>
      `;
    });

    const markup = `
    <div class="cards-container">
        <div class="container ${this.options.align}">
          <h1 class="title"><span>${this.options.title}</span></h1>
          <p>${this.options.paragraph}</p>
          <div class="cards">
            ${cards}
          </div>
        </div>
    </div>`;
    // We need that timeout to FIGHT the CMS
    window.setTimeout(this.writeCards.bind(this, markup), 500);
  }
  shouldRun() {
    if (this.options.debug) {
      console.log("Options", this.options);
    }
    return this.options.cards.length > 0;
  }
  writeCards(markup) {
    let title = document
      .getElementById("app-root")
      .getElementsByTagName("h1")[0];

    let container = document.createElement("div");
    container.id = "ifawCards";
    container.innerHTML = markup;

    title.nextSibling.append(container);
    title.remove();
    console.log(markup);
  }
}
