const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const listaEl = document.querySelector(".lista")

  const itemsEl = document.querySelectorAll(".lista li")
  // console.log(itemsEl)

  for (let el of itemsEl) {
    el.remove()
  }


  for (const item of cosasQueAprendimos) {
    const newElLi = document.createElement("li")
    newElLi.textContent = item.tema
    const clasesQueAgregare = item.class || "item"
    newElLi.classList.add(clasesQueAgregare)
    console.log(newElLi)
    listaEl.appendChild(newElLi)
  }


}

main();
