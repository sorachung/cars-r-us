import { Technologies } from "./Technologies.js";
import { Wheels } from "./Wheels.js";
import { Paints } from "./Paints.js";
import { Interiors } from "./Interiors.js";

export const CarsRUs = () => {
  return `
    <h1>Cars-R-Us</h1>
      <section class="choices__paints options">
        ${Paints()}
      </section>
      <section class="choices__interiors options">
        ${Interiors()}
      </section>
      <section class="choices__wheels options">
        ${Wheels()}
      </section>
      <section class="choices__technologies options">
        ${Technologies()}
      </section>
  `;
};
