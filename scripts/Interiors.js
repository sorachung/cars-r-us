import { getInteriors } from "./database.js";

export const Interiors = () => {
  const interiors = getInteriors();

  return `<h2>Interiors</h2>
    <select id="interior">
      <option value="0">Select an interior</option>
      ${interiors
        .map(
          (interior) =>
            `<option value="${interior.id}">${interior.seatType}</option>`
        )
        .join("")}
    </select>
  `;
};

document.addEventListener("change", (event) => {
  if (event.target.id === "interior") {
    const interiors = getInteriors();
    const currentInterior = interiors.find(
      (interior) => interior.id === parseInt(event.target.value)
    );
    window.alert(`you selected ${currentInterior.seatType}.`);
  }
});
