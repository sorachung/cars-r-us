import { getTechnologies } from "./database.js";

export const Technologies = () => {
  const techs = getTechnologies();

  return `<h2>Technologies</h2>
      <select id="tech">
          <option value="0">Select a technology package</option>
          ${techs
            .map((tech) => {
              return `<option value="${tech.id}">${tech.option}</option>`;
            })
            .join("")}
      </select>
  `;
};

document.addEventListener("change", (event) => {
  if (event.target.id === "tech") {
    const techs = getTechnologies();
    const currentTech = techs.find((tech) => tech.id === parseInt(event.target.value))
    window.alert(`you selected ${currentTech.option} (${currentTech.description})`)
  }
})