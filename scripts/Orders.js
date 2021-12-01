import { getOrders, getOrderBuilder, addCustomOrder } from "./database.js";

export const Orders = () => {
  const orders = getOrders();

  let htmlString = `<h2>Custom Car Orders</h2>
  <ul>`;

  for (const order of orders) {
    htmlString += `<li>
    Order #${order.id} was ordered.
  </li>
  `;
  }

  return htmlString + "</ul>";
};

document.addEventListener("click", (event) => {
  if (event.target.id === "orderButton") {
  const builtOrder = getOrderBuilder();
  if (Object.keys(builtOrder).length >= 4) {
    addCustomOrder();
  }
  }
})