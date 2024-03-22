# reducer-repository 2

## State Shape

Initial state shape is as follows:
{
items: [],
}

We use an object containing an items array. I used an object in order to allow the initial state to be flexible and grow over time if need be.

## Updating State Shape

When adding items to the cartState, we first search through the current state and identify if the item is already in the cart and set a contains flag to either true or false.

When removing items from the cartState, we filter through the items array and remove the item.id that matches the action.id

### Cart contains the item

Flag remains false, we return the state object, within the items array we spread items array and add a new object that contains id, name, cost, and count.

### Cart does not contain item

Flag is set to true, we return the state object, map through the items and find the item.id that matches the action.id and incriment the count within the item object.
