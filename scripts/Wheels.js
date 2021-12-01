import { getWheels } from "./database.js";

export const Wheels = () => {
  const wheels = getWheels();

  return `<h2>Wheels</h2>
    <select id="wheels">
      <option value="0">Select wheels</option>
      ${wheels
        .map(
          (wheel) => `<option value="${wheel.id}">${wheel.wheelType}</option>`
        )
        .join("")}
    </select>
  `;
};
