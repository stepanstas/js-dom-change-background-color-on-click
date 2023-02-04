const pageContainer = document.querySelector(".container");
console.log(pageContainer.hasAttribute("class"));
console.log(pageContainer.getAttribute("class"));
console.log(pageContainer.removeAttribute("class"));
pageContainer.setAttribute("class", "page-container");
pageContainer.style.cssText = `
display: flex;
flex-direction: column;
min-height: 100vh;
`;

const header = document.querySelector("header");
header.style.cssText = `
display: flex;
justify-content: center;
align-items: center;
text-align: center;
background: black;
color: white;
padding: 1rem;
position: sticky; 
top: 0;
right: 0;
left: 0;
`;

const main = document.querySelector("main");
main.style.cssText = `
display: flex;
flex-direction: column;
place-items: center;
flex: 1 1;
`;

const containerColors = document.querySelector("main div");
containerColors.setAttribute("class", "container-colors");
containerColors.style.cssText = `
display: flex;
flex-direction: column;
margin: auto;
`

const pageTitle = document.createElement("h1");
pageTitle.textContent = "DOM Manipulation Practice";
pageTitle.setAttribute("class", "page-title");
header.appendChild(pageTitle);

const listTitle = document.querySelector(".container-colors > h2");
listTitle.setAttribute("class", "list-title");
listTitle.style.cssText = `
font-size: 4rem;
margin: auto;
`;

const list = document.querySelector("ul");
list.style.cssText = `
list-style-type: none;
line-height: 2rem;
text-align: center;
font-size: 1.25rem;
font-weight: bold;
`
const listItems = document.querySelectorAll("ul li");
listItems.forEach(item => {
    let color = item.textContent.toLowerCase();
    switch (color) {
        case "red":
            item.style.color = "red";
            break;
        case "green":
            item.style.color = "green";
            break;
        case "blue":
            item.style.color = "blue";
            break;
        case "yellow":
            item.style.color = "yellow";
            break;
        case "pink":
            item.style.color = "pink"
            break;
        default:
            item.style.color = "";
            break;
    }

    item.addEventListener("mouseover", (changeColor) => {
        item.style.cssText = `
        cursor: pointer;
        `;
        item.style.color = color;
    });

    item.addEventListener("click", () => {
        let color = item.textContent.toLowerCase();
        switch (color) {
            case "red":
                document.body.style.backgroundColor = "red";
                break;
            case "green": 
                document.body.style.backgroundColor = "green";
                break;
            case "blue": 
                document.body.style.backgroundColor = "blue";
                break;
            case "yellow": 
                document.body.style.backgroundColor = "yellow";
                break;
            case "pink": 
                document.body.style.backgroundColor = "pink";
                break;
            default:
                document.body.style.backgroundColor = "white";
                break;
        }
    });
});

const footer = document.querySelector("footer");
footer.style.cssText = `
text-align: center;
background-color: black;
color: white;
padding: 1rem;
margin-top: auto;
`;
const copyright = document.createElement("small");
copyright.textContent = "Created by Stepan";
footer.appendChild(copyright);
