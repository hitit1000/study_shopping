data = [
  {
    icon: "blue_p.png",
    item: "p",
    color: "blue",
    gender: "male",
    size: "large size",
  },
  {
    icon: "blue_s.png",
    item: "s",
    color: "blue",
    gender: "female",
    size: "small size",
  },
  {
    icon: "blue_t.png",
    item: "t",
    color: "blue",
    gender: "male",
    size: "middle size",
  },
  {
    icon: "pink_p.png",
    item: "p",
    color: "pink",
    gender: "female",
    size: "large size",
  },
  {
    icon: "pink_s.png",
    item: "s",
    color: "pink",
    gender: "female",
    size: "small size",
  },
  {
    icon: "pink_t.png",
    item: "t",
    color: "pink",
    gender: "male",
    size: "large size",
  },
  {
    icon: "yellow_p.png",
    item: "p",
    color: "yellow",
    gender: "male",
    size: "large size",
  },
  {
    icon: "yellow_p.png",
    item: "p",
    color: "yellow",
    gender: "male",
    size: "large size",
  },
  {
    icon: "yellow_p.png",
    item: "p",
    color: "yellow",
    gender: "male",
    size: "large size",
  },
];

const content = document.querySelector(".content");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const logo = document.querySelector(".logo");

const parsingItem = (data) => {
  data.map((data, index) => {
    const addItem = document.createElement("div");
    const addImage = document.createElement("img");
    const addText = document.createElement("span");
    addImage.src = `./imgs/${data.icon}`;
    addImage.width = "80";
    addItem.className = `contentItem`;
    addText.innerText = `${data.gender}, ${data.size}`;
    addItem.appendChild(addImage);
    addItem.appendChild(addText);
    content.appendChild(addItem);
  });
};

const handleClickBtn1 = () => {
  const newData = data.filter((data) => data.item === "t");
  while (content.hasChildNodes()) {
    content.removeChild(content.firstChild);
  }
  parsingItem(newData);
};

const handleClickBtn2 = () => {
  const newData = data.filter((data) => data.item === "p");
  while (content.hasChildNodes()) {
    content.removeChild(content.firstChild);
  }
  parsingItem(newData);
};

const handleClickBtn3 = () => {
  const newData = data.filter((data) => data.item === "s");
  while (content.hasChildNodes()) {
    content.removeChild(content.firstChild);
  }
  parsingItem(newData);
};

const handleClickBtn4 = () => {
  const newData = data.filter((data) => data.color === "blue");
  while (content.hasChildNodes()) {
    content.removeChild(content.firstChild);
  }
  parsingItem(newData);
};

const handleClickBtn5 = () => {
  const newData = data.filter((data) => data.color === "pink");
  while (content.hasChildNodes()) {
    content.removeChild(content.firstChild);
  }
  parsingItem(newData);
};

const handleClickBtn6 = () => {
  const newData = data.filter((data) => data.color === "yellow");
  while (content.hasChildNodes()) {
    content.removeChild(content.firstChild);
  }
  parsingItem(newData);
};

const handleClicklogo = () => {
  while (content.hasChildNodes()) {
    content.removeChild(content.firstChild);
  }
  parsingItem(data);
};

btn1.addEventListener("click", handleClickBtn1);
btn2.addEventListener("click", handleClickBtn2);
btn3.addEventListener("click", handleClickBtn3);
btn4.addEventListener("click", handleClickBtn4);
btn5.addEventListener("click", handleClickBtn5);
btn6.addEventListener("click", handleClickBtn6);
logo.addEventListener("click", handleClicklogo);

parsingItem(data);
