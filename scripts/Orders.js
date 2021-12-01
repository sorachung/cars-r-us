import { getOrders } from "./database.js";

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
