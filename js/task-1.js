function isEnoughCapacity(products, containerSize) {
  let totalQuantity = 0;
  for (let key in products) {
    if (products.hasOwnProperty(key)) {
      totalQuantity += products[key];
    }
  }
  return totalQuantity <= containerSize;
}

// Перевірка функції
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // Повинно вивести true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // Повинно вивести false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // Повинно вивести true

console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // Повинно вивести false
