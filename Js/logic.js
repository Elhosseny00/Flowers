let nav = document.getElementById("nav");
let links = [
  { linkName: "Home", href: "#home" },
  { linkName: "About", href: "#about" },
  { linkName: "Flowers", href: "#flowers" },
  { linkName: "Contact", href: "#contact" },
];
let unOrderList = document.createElement("ul");
links.forEach((link, index) => {
  let li = document.createElement("li");
  let mylink = document.createElement("a");
  mylink.setAttribute("href", link.href);
  mylink.textContent = link.linkName;
  li.appendChild(mylink);
  unOrderList.appendChild(li);
  if (index === 0) mylink.classList.add("active");
  mylink.addEventListener("click", () => {
    document
      .querySelectorAll("nav a")
      .forEach((link) => link.classList.remove("active"));
    mylink.classList.add("active");
    nav.classList.remove("active");
    btn.classList.remove("burger");
  });
});
nav.appendChild(unOrderList);

let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  btn.classList.toggle("burger");
  nav.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !btn.contains(e.target)) {
    nav.classList.remove("active");
    btn.classList.remove("burger");
  }
});
