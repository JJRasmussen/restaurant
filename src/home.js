import {addElement} from "./domManipulation.js";

const addQuoteToDom = (quoteNumber, authorFirstName, author, quote) => {
    addElement("div", "informationTile", quoteNumber + "Tile", "#content","");
    addElement("div", "customerQuote", quoteNumber + "Quote", "#" + quoteNumber + "Tile", "");
    addElement("p", "quote", "quote" + authorFirstName, "#" + quoteNumber + "Quote", quote);
    addElement("p", "quote" + authorFirstName, authorFirstName, "#" + quoteNumber + "Quote", author);
};

const showQuotes = () => {
console.log("test 0");
addElement("h1", "headline", "tavernName", "#content", "The Roasted Pickle"); 

//type, setClass, setId, appendElementTo, textInElement
addQuoteToDom("first", "Rita", "Rita Thorne", "Such lovely place, I am there at least twice a week for the shared songs and the blackpot pies");
addQuoteToDom("second", "Erik", "Erik Lorkins", "Such lovely place, I am there at least twice a week for the shared songs and the blackpot pies");
}

export { showQuotes };

//add opening hours

/*


<div class="informationTile" id="events">
    <h2 class="tileTitle">Weekly Events</h2>
    <ul>
        <li class="eventTitle">Sing-a-long-songs
        <p class="eventDescription">Through the evening our local troubadour, Eliza Echdahl, will organize a sing-along making us all into a choir for the night.</p>
        <p class="eventDescription">After some singing she will take over and sing a couple of song in regards to the current season and events.</p>
        </li>
        
        <li class="eventTitle">Big Bretts Belly Battle
        <p class="eventDescription">Whomsoever can out-eat Big Brett will win the grand prize.</p>
        <p class="eventDescription">Entry prices: 5 silver pieces</p>
        </li>
    </ul>
</div>
*/