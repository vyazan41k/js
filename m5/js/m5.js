// const object = {
//   name: "User",
//   age: 20,
//   getUserInfo() {
//     console.log("Имя:", this.name);
//     console.log("Возраст:", this.age);
//   }
// };

// object.getUserInfo();

const Car = function(color, model, price) {
  this.color = color;
  this.model = model;
  this.price = price;

  this.getColor = function() {
    return this.color;
  };

  this.getPrice = function() {
    return this.price;
  };

  this.getInfo = function() {
    console.log("Цвет:", this.color);
    console.log("Цена:", this.price);
    console.log("Модель:", this.model);
  };

  this.getModel = function() {
    return this.model;
  };

  this.compare = function(car) {
    if (this.getPrice() > car.getPrice()) {
      console.log(`${this.getModel()} дороже ${car.getModel()}`);
    } else {
      console.log(`${car.getModel()} дороже ${this.getModel()}`);
    }
  };
};

const car1 = new Car("blue", "Audi", 20000);
const car2 = new Car("green", "BMW", 50000);
const car3 = new Car("white", "Mercedes", 100000);

// car1.getInfo();
// car2.getInfo();

// const compareCardPriceces = (car1, car2) => {
//   if (car1.getPrice() > car2.getPrice()) {
//     console.log(`${car1.getModel()} дороже ${car2.getModel()}`);
//   } else {
//     console.log(`${car2.getModel()} дороже ${car1.getModel()}`);
//   }
// };

// compareCardPriceces(car1, car2);
// compareCardPriceces(car2, car3);

car1.compare(car2);
car2.compare(car3);
