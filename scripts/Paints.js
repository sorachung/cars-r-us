import { getPaints } from "./database.js";

export const Paints = () => {
  const paints = getPaints();

  return `<h2>Paints</h2>
    <select id="paint">
      <option value="0">Select a paint color</option>
      ${paints
        .map((paint) => `<option value="${paint.id}">${paint.color}</option>`)
        .join("")}
          </select>
  </section>
  `;
};
