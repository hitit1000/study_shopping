const logo = document.querySelector(".logo");
const btns = document.querySelector(".buttons");
const list = document.querySelector(".items");

const creatItems = (data) => {
  const creatList = data.map(
    (data) =>
      `  <li class="item ${data.type} ${data.color}">
        <img class="itemImage" src="${data.image}" alt="" />
        <span class="itemText">${data.gender}, ${data.size}</span>
      </li>`
  );
  list.innerHTML = creatList.join("");
};

const displayAllItem = () => {
  fetch("./data.json")
    .then((items) => items.json())
    .then((json) => json.items)
    .then((data) => creatItems(data));
};

const handleLogo = () => {
  Object.values(list.children).map((li) => li.classList.remove("hidden"));
};
const handleBtns = (event) => {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;
  if (dataset.value === undefined) {
    return;
  }
  Object.values(list.children).map((li) => {
    if (Object.values(li.classList).includes(value)) {
      li.classList.remove("hidden");
    } else {
      li.classList.add("hidden");
    }
  });
};
logo.addEventListener("click", handleLogo);
btns.addEventListener("click", handleBtns);

displayAllItem();
