const pageContainer = document.querySelector(".container");
console.log(pageContainer.hasAttribute("class"));
console.log(pageContainer.getAttribute("class"));
console.log(pageContainer.removeAttribute("class"));
pageContainer.setAttribute("class", "page-container");
pageContainer.style.cssText = `
display: flex;
flex-direction: column;
place-content: center;
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
height: 6rem;
position: fixed; 
top: 0;
right: 0;
left: 0;
`;
const pageTitle = document.createElement("h1");
pageTitle.textContent = "DOM Manipulation Practice";
pageTitle.setAttribute("class", "page-title");
header.appendChild(pageTitle);

const main = document.querySelector("main");
main.style.cssText = `
margin: auto;
`;

const listTitle = document.querySelector("main > h2");
listTitle.setAttribute("class", "list-title");
listTitle.style.cssText = `
font-size: 4rem;
`;

const list = document.querySelector("ul");
list.style.cssText = `
list-style-type: none;
line-height: 2rem;
text-align: center;
margin: 2rem auto;
`
const listItems = document.querySelectorAll("ul li");
listItems.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.cssText = `
        cursor: pointer;
        `;
    })
listItems.forEach(item => {
    item.addEventListener("click", () => {
        let color = item.textContent.toLowerCase();
        switch (color) {
            case "red":
                document.body.style.backgroundColor = "red";
                document.body.style.color = "white";
                break;
            case "green": 
                document.body.style.backgroundColor = "green";
                document.body.style.color = "white";
                break;
            case "blue": 
                document.body.style.backgroundColor = "blue";
                document.body.style.color = "white";
                break;
            case "yellow": 
                document.body.style.backgroundColor = "yellow";
                document.body.style.color = "black";
                break;
            case "pink": 
                document.body.style.backgroundColor = "pink";
                break;
            default:
                document.body.style.backgroundColor = "white";
                break;
        }
    });
})});