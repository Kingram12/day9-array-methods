"use strict";

let detroitWarehouse = [
    {
      name: "iPhone SE",
      price: 399,
      fiveG: false,
    },
    {
      name: "iPhone XR",
      price: 499,
      fiveG: false,
    },
    {
      name: "iPhone 11",
      price: 599,
      fiveG: false,
    },
    {
      name: "iPhone 12 Mini",
      price: 729,
      fiveG: true,
    },
    {
      name: "iPhone 12",
      price: 829,
      fiveG: true,
    },
    {
      name: "iPhone 12 Pro",
      price: 999,
      fiveG: true,
    },
    {
      name: "iPhone 12 Max",
      price: 1099,
      fiveG: true,
    },
   {
      name: "Pixel 4a",
      price: 349,
      fiveG: false,
    },
    {
      name: "Pixel 5",
      price: 699,
      fiveG: true,
    },
   ];



let newYorkWarehouse = [
    {
      name: "iPhone SE",
      price: 399,
      fiveG: false,
    },
    {
      name: "Pixel 5",
      price: 699,
      fiveG: true,
    },
    {
      name: "Pixel 4a 5G",
      price: 499,
      fiveG: true,
    },
    {
      name: "Pixel 4a 5G",
      price: 499,
      fiveG: true,
    },
    {
      name: "Pixel 4a 5G",
      price: 499,
      fiveG: true,
    },
    {
      name: "Pixel 4a",
      price: 349,
      fiveG: false,
    },
    {
      name: "Pixel 4a",
      price: 349,
      fiveG: false,
    },
    {
      name: "Galaxy S10",
      price: 750,
      fiveG: false,
    },
    {
      name: "Galaxy S10+",
      price: 1500,
      fiveG: true,
    },
   ];


let chicagoWarehouse = [
    {
      name: "Galaxy S10",
      price: 750,
      fiveG: false,
    },
    {
      name: "Galaxy S10+",
      price: 1500,
      fiveG: true,
    },
    {
      name: "Galaxy S10+",
      price: 1500,
      fiveG: true,
    },
    {
      name: "Galaxy S10+",
      price: 1500,
      fiveG: true,
    },
    {
      name: "iPhone 12",
      price: 829,
      fiveG: true,
    },
    {
      name: "iPhone 12 Pro",
      price: 999,
      fiveG: true,
    },
    {
      name: "iPhone 12 Max",
      price: 1099,
      fiveG: true,
    },
   {
      name: "Pixel 4a",
      price: 349,
      fiveG: false,
    },
    {
      name: "Pixel 5",
      price: 699,
      fiveG: true,
    },
   ];



const addPhone = (array, newName, newPrice, newFiveG) => {
    let newPhone = {
        name: newName,
        price: newPrice,
        fiveG: newFiveG,
    };
    array.push(newPhone);
};

addPhone(newYorkWarehouse, "Unicorn Max", 10000, true);

// console.log(newYorkWarehouse);

const deletePhoneByIndex = (array, index) => {
    array.splice (index, 1);
};

deletePhoneByIndex(newYorkWarehouse, 9); 


const deletePhoneByName = (array, name) => {
    let index = array.findIndex((item)=> {
        return item.name === name;
    });
    deletePhoneByIndex (array, index)
};

deletePhoneByName(chicagoWarehouse, "Pixel 4a");

// console.log(chicagoWarehouse);


const filter5G = (array, boolean) => {
   return array.filter((item) => {
        return array.fiveG = boolean;
    });
};


// console.log(filter5G(chicagoWarehouse, true));

const filterPriceLessThan = (array, price) => {
    let newArray = array.filter ((item) => {
        return item.price < price;
        }
    );
    return newArray;
};

// console.log(filterPriceLessThan(chicagoWarehouse, 900));

const filterPriceGreaterThan = (array, price) => {
    let newArray = array.filter ((item) => {
        return item.price > price;
        }
    );
    return newArray;
};

// console.log(filterPriceGreaterThan(chicagoWarehouse, 900));

const findPhoneByName = (array, name) => {
    return array.find((item) => {
        return item.name === name;
    });
};

// console.log(findPhoneByName(chicagoWarehouse, "iPhone 12 Pro"));

const calcAverageCost = (array) => {
    let totalCost = array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price;
    },0);
    return totalCost/array.length;
};

// console.log(calcAverageCost(chicagoWarehouse));

const doWeHaveA5GPhone = (array) => {
    return array.some((item) => {
        return item.fiveG;
    });
};

// console.log(doWeHaveA5GPhone(chicagoWarehouse));

const applyDiscountToPhone = (array, model, discount) => {
    array.forEach((item) => {
        if (item.name.includes(model)) {
            item.price = (1 - discount) * item.price;
        }
    });
};

applyDiscountToPhone(chicagoWarehouse, "Galaxy", 0.5);
console.log(chicagoWarehouse);