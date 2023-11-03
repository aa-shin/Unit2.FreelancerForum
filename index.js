const freelancers = [
  { name: "Alice", price: 30, occupation: "writer" },
  { name: "Bob", price: 50, occupation: "teacher" },
  { name: "Carol", price: 40, occupation: "programmer "},
];

// get sum of price
const sumPrice = freelancers.reduce ((accumulator, object) => {
  return (accumulator + object.price);
}, 0);
// get mean of price
const meanPrice = sumPrice/freelancers.length;
console.log(meanPrice);

// style
const body = document.body;
const h1El = document.createElement("h1");
const h3El = document.createElement("h3");
const h2El = document.createElement("h2");
const div = document.createElement("div")
const namelistEl = document.createElement("ul");
const nameTitle = document.createElement("h2");
const nameli1 = document.createElement("li");
const nameli2 = document.createElement("li");
const nameli3 = document.createElement("li");
const occupationlistEl = document.createElement("ul");
const occupationTitle = document.createElement("h2");
const occupationli1 = document.createElement("li");
const occupationli2 = document.createElement("li");
const occupationli3 = document.createElement("li");
const pricelistEl = document.createElement("ul");
const priceTitle = document.createElement("h2");
const priceli1 = document.createElement("li");
const priceli2 = document.createElement("li");
const priceli3 = document.createElement("li");

h1El.textContent = "Freelancer Forum";
h3El.textContent = "The average starting price is " + "$" +[meanPrice]+ ".";
h2El.textContent = "Available Freelancers";
nameTitle.textContent = `Name`;
nameli1.textContent = freelancers[0].name;
nameli2.textContent = freelancers[1].name;
nameli3.textContent = freelancers[2].name;
occupationTitle.textContent = `Occupation`;
occupationli1.textContent = freelancers[0].occupation;
occupationli2.textContent = freelancers[1].occupation;
occupationli3.textContent = freelancers[2].occupation;
priceTitle.textContent = `Price`;
priceli1.textContent = `$`+freelancers[0].price;
priceli2.textContent = `$`+freelancers[1].price;
priceli3.textContent = `$`+freelancers[2].price;

body.appendChild(h1El);
body.appendChild(h3El);
body.appendChild(h2El);
body.appendChild(div);
div.appendChild(namelistEl);
namelistEl.appendChild(nameTitle);
namelistEl.appendChild(nameli1);
namelistEl.appendChild(nameli2);
namelistEl.appendChild(nameli3);
div.appendChild(occupationlistEl);
occupationlistEl.appendChild(occupationTitle);
occupationlistEl.appendChild(occupationli1);
occupationlistEl.appendChild(occupationli2);
occupationlistEl.appendChild(occupationli3);
div.appendChild(pricelistEl);
pricelistEl.appendChild(priceTitle);
pricelistEl.appendChild(priceli1);
pricelistEl.appendChild(priceli2);
pricelistEl.appendChild(priceli3);

h1El.setAttribute("style", "margin:auto; padding:10px; width:50%; text-align:center;");
h3El.setAttribute("style", "margin:auto; padding:10px; width:50%; text-align:center; font-size:130%; font-weight:lighter;");
h2El.setAttribute("style", "margin:auto; padding:10px; width:50%; text-align:center;");
div.setAttribute("style", "margin:auto; width:50%; text-align:center; display:flex; flex-direction:row;");
namelistEl.setAttribute("style", "margin:auto; padding:5px; width:30%; flex-direction:column; list-style-type:none;");
nameli1.setAttribute("style", "margin:auto; width:50%; font-size:130%;");
nameli2.setAttribute("style", "margin:auto; width:50%; font-size:130%;");
nameli3.setAttribute("style", "margin:auto; width:50%; font-size:130%;");
occupationlistEl.setAttribute("style", "margin:auto; padding:5px; width:30%; flex-direction:column; list-style-type:none;");
occupationli1.setAttribute("style", "margin:auto; width:50%; font-size:130%;");
occupationli2.setAttribute("style", "margin:auto; width:50%; font-size:130%;");
occupationli3.setAttribute("style", "margin:auto; width:50%; font-size:130%;");
pricelistEl.setAttribute("style", "margin:auto; padding:5px; width:30%; flex-direction:column; list-style-type:none;");
priceli1.setAttribute("style", "margin:auto; width:50%; font-size:130%;");
priceli2.setAttribute("style", "margin:auto; width:50%; font-size:130%;");
priceli3.setAttribute("style", "margin:auto; width:50%; font-size:130%;");