// *// ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*

let discount = prompt('Какая скидка?')

let totalSale = 0

let total = 0

let max = {}

let min = {}

let average = 0

let arr = [

    {

        name: 'Milk',

        price: 3.25

    },

    {

        name: 'Coffee',

        price: 1.5

    },

    {

        name: 'Ice Cream',

        price: 7.85

    },

    {

        name: 'Tomatos',

        price: 4.14

    },

    {

        name: 'Onion',

        price: 2.25

    }

]

let arr_sale = []

// *// 1. Сохранить самый дорогой товар в переменную`max`*

// *// 2. Сохранить самый дешевый товар в переменную`min`*

// *// 3. Сохранить общую цену без скидок в переменную`total`*

// *// 4. Сохранить общую цену со скидкой в переменную`totalSale`*

// *// 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную `arr_sale`*

// *// 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок*

// *// * Писать весь код в функции `setup()`*

// *// ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*

const setup = () => {
   
    

    let totalSale = 0;
    let total = 0;
    let max = arr[0];  
    let min = arr[0];  
    let arr_sale = [];

  
    for (let item of arr) {
        total += item.price;  

        if (item.price > max.price) {
            max = item;  
        }
        if (item.price < min.price) {
            min = item; 
        }
    }

    
    for (let item of arr) {
        let discountedPrice = item.price * (1 - discount);
        arr_sale.push({ name: item.name, price: discountedPrice });
        totalSale += discountedPrice; 
    }

   
    let average = total / arr.length;

    
    console.log('Самый дорогой товар:', max);
    console.log('Самый дешевый товар:', min);
    console.log('Общая цена без скидок:', total);
    console.log('Общая цена со скидкой:', totalSale);
    console.log('Массив товаров со скидкой:', arr_sale);
    console.log('Средняя цена:', average);
}

    
    
    
 console.log();


setup()