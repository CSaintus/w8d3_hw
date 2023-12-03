import { createUser, createItem, addToCart, printCart, cartTotal, removeFromCart } from './Functions';


const user = createUser('John Doe', 25);


const itemA = createItem('Item A', 10, 'Description for Item A');
const itemB = createItem('Item B', 15, 'Description for Item B');
const itemC = createItem('Item C', 20, 'Description for Item C');


addToCart(itemA, user);

printCart(user);

console.log('Cart Total:', cartTotal(user));


addToCart(itemB, user);

addToCart(itemC, user);

addToCart(itemA, user);

printCart(user);


console.log('Cart Total:', cartTotal(user));

removeFromCart(itemA, user);

printCart(user);

console.log('Cart Total:', cartTotal(user));
