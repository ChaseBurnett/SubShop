// importing orders and new orders to my main.js
import {getOrders, addNewOrder} from './orders.js'

// using to display my html via JS
document.getElementById('app').innerHTML = `
<h1>CHASES SUB SHOP</h1>
<div>
  <h3>Please make your sub</h3>
  <div class="subForm">
    <div class="bread">
      <p>Pick your bread</p>
      <label for="ciabatta"> Fresh Ciabatta</label>
      <input id="ciabatta" name="bread" type="radio" value="ciabatta" />
      <label for="wholeWheat">Soft Whole Wheat Bubs</label>
      <input id="wholeWheat" name="bread" type="radio" value="wholeWheat" />
      <label for="texasToast">Big Ol Texas Toast</label>
      <input id="texasToast" name="bread" type="radio" value="texasToast" />
      </div>
      <div class="meat">
        <p>Pick your Proteins</p>
        <ul>
          <li>
            <input id="roastBeef" name="meat" type="checkbox" value="roastBeef" />
            <label for="roastBeef">Roast Beef</label>
          </li>
          <li>
            <input id="turkey" name="meat" type="checkbox" value="turkey" />
            <label for="turkey">Smoked Turkey</label>
          </li>
          <li>
            <input id="Tuna" name="meat" type="checkbox" value="Tuna" />
            <label for="Tuna">Tuna</label>
          </li>
          <li>
            <input id="chicken" name="toppings" type="checkbox" value="chicken" />
            <label for="chicken">Shredded Chicken</label>
          </li>
          <li>
            <input id="brisket" name="toppings" type="checkbox" value="brisket" />
            <label for="brisket">ALL NEW BRISKET</label>
          </li>
        </ul>
    </div>
    <div class="toppings">
        <p>Pick your Favorite Toppings (Select all that apply)</p>
        <ul>
          <li>
            <input id="spinach" name="toppings" type="checkbox" value="spinach" />
            <label for="spinach">Spinach</label>
          </li>
          <li>
            <input id="tomato" name="toppings" type="checkbox" value="tomato" />
            <label for="tomato">Tomatoes</label>
          </li>
          <li>
            <input id="Black Olives" name="toppings" type="checkbox" value="Black Olives" />
            <label for="Black Olives">Black Olives</label>
          </li>
          <li>
            <input id="Green Peppers" name="toppings" type="checkbox" value="Green Peppers" />
            <label for="Green Peppers">Green Peppers</label>
          </li>
          <li>
            <input id="Onions" name="toppings" type="checkbox" value="Onions" />
            <label for="Onions">Onions</label>
          </li>
          li>
            <input id="jalapenos" name="toppings" type="checkbox" value="jalapenos" />
            <label for="jalapenos">Spicy Jalapenos</label>
          </li>
        </ul>
    </div>
    <div class="cheese">
    <p>Pick your Cheese</p>
    <ul>
      <li>
        <input id="american" name="cheese" type="checkbox" value="american" />
        <label for="american">American</label>
      </li>
      <li>
        <input id="Cheddar" name="cheese" type="checkbox" value="Cheddar" />
        <label for="Cheddar">Cheddar</label>
      </li>
      <li>
        <input id="Swiss" name="cheese" type="checkbox" value="Swiss" />
        <label for="Swiss">Swiss</label>
      </li>
      <li>
        <input id="pepperJack" name="cheese" type="checkbox" value="pepperJack" />
        <label for="pepperJack">Spicy Pepper Jack</label>
      </li>
      <li>
        <input id="noCheese" name="cheese" type="checkbox" value="noCheese" />
        <label for="noCheese">NO CHEESE</label>
      </li>
    </ul>
</div>
    <div class="extras">
      <label for="specialInstructions">Notes/Special Instructions</label>
      <div>
        <textarea id="specialInstructions"></textArea>
      </div>
    </div>
    <div>
      <button id="submitOrder">Order Pizza</button>
    </div>
  </div>
  <h3>Orders</h3>
  <div id="orders"></div>
</div>
`;

// Putting the orders on the DOM

const displayOrders = () => {
    // keeps it local
    let ordersHtml = "";
    const orders = getOrders()
    orders.foreach(order => {
        ordersHtml += 
        `<div>Bread:${order.bread}</div>
        <div>Meat:${order.meat}</div>
        <div>Toppings:${order.toppings}</div>
        <div>Cheese:${order.cheese}</div>
        <div>Instructions:${order.instructions}</div>
        `
    });
    document.getElementById('orders').innerHTML = ordersHtml
};

displayOrders()

// adding an event listener

document.addEventListener('click', (e) => {
    if(e.target.id === 'submitOrder'){
        const breadElement = document.querySelector("input[name=bread]:checked")?.value
        console.log(breadElement)

        const meatElement = document.querySelector("input[name=meat]:checked")?.value
        console.log(meatElement)

        const toppingsArray = [];
        const toppings = toppingsElements.forEach(toppingElement => {toppingsArray.push(toppingElement.value)});
        console.log(toppingsArray)

        const cheeseElement = document.querySelector("input[name=cheese]:checked")?.value
        console.log(cheeseElement)

        const instructions = document.getElementById('specialInstructions')?.value
        console.log(instructions)

    // confused why i need this object here but I think its so that there is a format for new objects that are entered
    // by a user during the click event?

    let newOrder = {
        bread: breadElement,
        meat: meatElement,
        toppings: toppingsArray,
        cheese: cheeseElement,
        instructions: instructions
    };
    // calling the function? why do I need newOrder inside the ()?
    addNewOrder(newOrder)
    console.log(newOrder)
    }
});

//  adding a listener event to let us know that something has been selected and changed, i think

document.addEventListener('stateChanged', event => {
    displayOrders()
})

