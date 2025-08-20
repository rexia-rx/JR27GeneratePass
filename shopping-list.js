/**
 * JavaScript Basics Assignment: Shopping List Management
 * 
 * Assignment Goal: Practice JavaScript basic data types, arrays, objects, conditions, loops and functions
 */

console.log('=== JavaScript Shopping List Management Assignment ===\n');

// =====================================================
// 1. Data and Variables
// =====================================================

console.log('1. Data and Variables');
console.log('----------------------------------');

// Create shopping list array
let shoppingList = ['Apple', 'Banana', 'Milk', 'Bread'];

console.log('Initial shopping list:', shoppingList);
console.log('Shopping list length:', shoppingList.length);
console.log();

// =====================================================
// 2. Array Operations
// =====================================================

console.log('2. Array Operations');
console.log('--------------------------------');

// Add two items to the shopping list
shoppingList.push('Eggs', 'Yogurt');
console.log('Shopping list after adding two items:', shoppingList);

// Remove the last item from the shopping list
let removedItem = shoppingList.pop();
console.log('Removed item:', removedItem);
console.log('Shopping list after removing last item:', shoppingList);
console.log();

// =====================================================
// 3. Conditions and Loops
// =====================================================

console.log('3. Conditions and Loops');
console.log('------------------------------------');

// Create function to check if shopping cart is full
function checkShoppingCartFull() {
    if (shoppingList.length > 5) {
        console.log('Your shopping cart is full');
    } else {
        console.log(`Shopping cart has space, currently has ${shoppingList.length} items`);
    }
}

// Test shopping cart full functionality
checkShoppingCartFull();

// Add more items to test
shoppingList.push('Rice', 'Vegetables', 'Meat');
console.log('After adding more items:', shoppingList);
checkShoppingCartFull();

// Use loop to traverse shopping list and output with numbering
console.log('\nShopping List (with numbering):');
for (let i = 0; i < shoppingList.length; i++) {
    console.log(`${i + 1}. ${shoppingList[i]}`);
}

// Alternative way using for...of loop
console.log('\nShopping List (using for...of loop):');
let index = 1;
for (let item of shoppingList) {
    console.log(`${index}. ${item}`);
    index++;
}
console.log();

// =====================================================
// 4. Functions and Objects
// =====================================================

console.log('4. Functions and Objects');
console.log('------------------------------------');

// Create function to check if item is in shopping list
function isItemInShoppingList(itemName) {
    return shoppingList.includes(itemName);
}

// Test search functionality
console.log('Search for "Apple":', isItemInShoppingList('Apple'));
console.log('Search for "Orange":', isItemInShoppingList('Orange'));

// Create shopping item objects
let shoppingItem1 = {
    name: 'Apple',
    price: 8.5,
    quantity: 6
};

let shoppingItem2 = {
    name: 'Milk',
    price: 12.0,
    quantity: 2
};

let shoppingItem3 = {
    name: 'Bread',
    price: 6.5,
    quantity: 1
};

console.log('\nShopping item object examples:');
console.log('Item 1:', shoppingItem1);
console.log('Item 2:', shoppingItem2);
console.log('Item 3:', shoppingItem3);

// =====================================================
// 5. Extended Features
// =====================================================

console.log('\n5. Extended Features');
console.log('--------------------------------');

// Create shopping item array (containing objects)
let detailedShoppingList = [shoppingItem1, shoppingItem2, shoppingItem3];

// Function to calculate total price
function calculateTotalPrice(itemList) {
    let totalPrice = 0;
    for (let item of itemList) {
        totalPrice += item.price * item.quantity;
    }
    return totalPrice;
}

// Function to display detailed shopping list
function displayDetailedList(itemList) {
    console.log('\nDetailed Shopping List:');
    console.log('No.  | Item Name | Price | Qty  | Subtotal');
    console.log('-----|-----------|-------|------|----------');
    
    for (let i = 0; i < itemList.length; i++) {
        let item = itemList[i];
        let subtotal = (item.price * item.quantity).toFixed(2);
        console.log(`${(i + 1).toString().padEnd(4)} | ${item.name.padEnd(9)} | ${item.price.toFixed(2).padStart(5)} | ${item.quantity.toString().padStart(4)} | ${subtotal.padStart(8)}`);
    }
    
    let total = calculateTotalPrice(itemList);
    console.log('-----|-----------|-------|------|----------');
    console.log(`Total: $${total.toFixed(2)}`);
}

// Function to add item to detailed list
function addItemToDetailedList(name, price, quantity) {
    let newItem = {
        name: name,
        price: price,
        quantity: quantity
    };
    detailedShoppingList.push(newItem);
    console.log(`Item added: ${name}`);
}

// Function to remove item by name
function removeItemByName(itemName) {
    let index = detailedShoppingList.findIndex(item => item.name === itemName);
    if (index !== -1) {
        let removedItem = detailedShoppingList.splice(index, 1)[0];
        console.log(`Item removed: ${removedItem.name}`);
        return removedItem;
    } else {
        console.log(`Item not found: ${itemName}`);
        return null;
    }
}

// Test extended features
displayDetailedList(detailedShoppingList);

console.log('\n--- Add New Item Test ---');
addItemToDetailedList('Banana', 4.5, 8);
addItemToDetailedList('Eggs', 15.0, 1);

displayDetailedList(detailedShoppingList);

console.log('\n--- Remove Item Test ---');
removeItemByName('Milk');
displayDetailedList(detailedShoppingList);

// =====================================================
// 6. Interactive Features Demo
// =====================================================

console.log('\n6. Interactive Features Demo');
console.log('--------------------------------------------');

// Search items functionality
function searchItems(keyword) {
    let results = detailedShoppingList.filter(item => 
        item.name.includes(keyword)
    );
    
    if (results.length > 0) {
        console.log(`Search results for "${keyword}":`);
        results.forEach((item, index) => {
            console.log(`${index + 1}. ${item.name} - Price: $${item.price}, Quantity: ${item.quantity}`);
        });
    } else {
        console.log(`No items found containing "${keyword}"`);
    }
}

// Sort by price functionality
function sortByPrice(ascending = true) {
    let sortedList = [...detailedShoppingList].sort((a, b) => {
        return ascending ? a.price - b.price : b.price - a.price;
    });
    
    console.log(`Sorted by price (${ascending ? 'ascending' : 'descending'}):`);
    sortedList.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - $${item.price}`);
    });
}

// Test search and sort functionality
console.log('\n--- Search Functionality Test ---');
searchItems('App');
searchItems('Egg');
searchItems('xyz');

console.log('\n--- Sort Functionality Test ---');
sortByPrice(true);  // ascending
console.log();
sortByPrice(false); // descending

// =====================================================
// 7. Assignment Summary
// =====================================================

console.log('\n=== Assignment Completion Summary ===');
console.log('✅ Completed all assignment requirements:');
console.log('1. ✅ Created shopping list array');
console.log('2. ✅ Implemented array add and remove operations');
console.log('3. ✅ Created conditional function (shopping cart full)');
console.log('4. ✅ Used loops to traverse and output with numbering');
console.log('5. ✅ Created function to find items');
console.log('6. ✅ Created shopping item objects');
console.log('7. ✅ Extended implementation with detailed list, total price calculation, etc.');
console.log();

console.log('Final state:');
console.log('Basic shopping list:', shoppingList);
console.log('Detailed shopping list item count:', detailedShoppingList.length);
console.log('Total value: $' + calculateTotalPrice(detailedShoppingList).toFixed(2));