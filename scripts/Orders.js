import {
  getPaints,
  getInteriors,
  getTechnologies,
  getWheels,
  getOrders,
  getOrderBuilder,
  addCustomOrder,
} from "./database.js";
import { Paints } from "./Paints.js";

export const Orders = () => {
  const orders = getOrders();

  let htmlString = `<h2>Custom Car Orders</h2>
  <ul>`;

  htmlString += orders.map((order) => buildCustomOrder(order)).join("");

  return htmlString + "</ul>";
};

const buildCustomOrder = (order) => {
  const paints = getPaints();
  const interiors = getInteriors();
  const techs = getTechnologies();
  const wheels = getWheels();

  const orderedPaint = paints.find((paint) => order.id === paint.id);
  const orderedInterior = interiors.find(
    (interior) => order.id === interior.id
  );
  const orderedTech = techs.find((tech) => order.id === tech.id);
  const orderedWheel = wheels.find((wheel) => order.id === wheel.id);

  const totalCost = orderedPaint.price + orderedInterior.price + orderedTech.price + orderedWheel.price;
  const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return `<li>
    ${orderedPaint.color} car with ${orderedWheel.wheelType} wheels, ${orderedInterior.seatType}, and the ${orderedTech.option} for a total cost of ${costString}
  </li>`;
};

document.addEventListener("click", (event) => {
  if (event.target.id === "orderButton") {
    const builtOrder = getOrderBuilder();
    if (Object.keys(builtOrder).length >= 4) {
      addCustomOrder();
    }
  }
});
