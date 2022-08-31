const orders = [
{
    id: 1,
    bread:  "Texas Toast",
    meat:  "Tuna",
    toppings: ["onions","jalapenos"],
    cheese: "Spicy Pepper Jack"
},
{
    id: 2,
    bread:  "Ciabatta",
    meat:  "ALL NEW Brisket",
    toppings: ["tomato","green onions","spinach"],
    cheese: "Swiss"
}
]

//  a lotta lost on this one, understand that its a function to export the orders data but there is alot going on in 
// this one
export const getOrders = () => {
    let ordersData = orders.map(order =>({...order}))
    return ordersData;
}

// your guess is as good as mine whats happening here but in 3 weeks im gonna know wtf this is 
const getNewOrderId = () => {
    let highestOrderId = orders.sort((a, b) => b.id - a.id)[0].id
    return highestOrderId + 1
  }

  export const addNewOrder = (order) => {
    const newId = getNewOrderId()
    order.id = newId
    // pushing new orders up into the orders array
    orders.push(order) 
    console.log(orders)

    // dispatches a new custom event (might need more explaining on this one too)
    document.dispatchEvent(new CustomEvent ('stateChanged'))
  };