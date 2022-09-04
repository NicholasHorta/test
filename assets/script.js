const btn = document.getElementById("btn");
const options = document.getElementById("options");
const text = document.getElementById("text");
let index = 0;
const optionsArr = [
  {
    options: ["a mask", "a bird", "two people dancing"],
    img: "https://i.ytimg.com/vi/ztXFL9M5KbE/maxresdefault.jpg",
  },
  {
    options: ["a heart", "a beetle", "a turtle"],
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.fineartamerica.com%2Fimages%2Fartworkimages%2Fmediumlarge%2F2%2F1-rorschach-inkblot-testcard-10-erzebet-s.jpg&f=1&nofb=1",
  },
  {
    options: ["a prey mantis", "two men digging", "two men blowing smoke"],
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.dailykos.com%2Fimages%2F703503%2Fstory_image%2FRorschachsymbol.jpg%3F1564865917&f=1&nofb=1",
  },
  {
    options: ["an skull", "a snake emerging", "a man praying"],
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.fineartamerica.com%2Fimages%2Fartworkimages%2Fmediumlarge%2F2%2F1-rorschach-inkblot-testcard-2-erzebet-s.jpg&f=1&nofb=1",
  },
  {
    options: ["a baby", "a future terror", "Chloe & Nicks Baby"],
    img: "./assets/IMG_20220827_134212.jpg",
  },
];

btn?.addEventListener("click", () => {
  btn.textContent = "Next";
  nextOption();
});

function nextOption() {
  if(text){
    text.remove()
  }
  options.innerHTML = "";
  const image = document.createElement("img");
  image.setAttribute("src", `${optionsArr[index].img}`);
  options?.appendChild(image);
  setTimeout(() => {
    for (let x = 0; x < 3; x++) {
      const btnOptions = document.createElement("button");
      btnOptions.textContent = `I see ${optionsArr[index].options[x]}`;
      options?.appendChild(btnOptions);
    }
    index += 1;
  }, 100);
}
