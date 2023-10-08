//creating connections
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB"); //if fruitsDB database is exit then it will connect with it otherwise it will create new database

//defining the schema means structure of database
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry. No name is specified"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

//creating a model means collections it must me in singular form and first letter must be a captial it will automatically convert it into pular form
const Fruit = mongoose.model("Fruit", fruitSchema); //Fruit here is a collections which will get converted into a fruits automatically

//inserting a document in fruits collections/model
const fruit = new Fruit({
  // name: "Apple",
  rating: 38,
  review: "Pretty solid as fruit but weird in taste",
});

// fruit.save(); //it will save the above data into collections fruits .

// for person data collections
//Schema creating
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit : fruitSchema
});

//creating model
const Person = mongoose.model("Person", personSchema); // Person plural from is people
const pineapple = new Fruit({
  name: "Pineapple",
  rating: 8,
  review: "little bit tasty",
});
const person = new Person({
  name: "Amy",
  age: 22,
  favouriteFruit : pineapple
});

// person.save();

//insertMany
const kiwi = new Fruit({
  name: "kiwi",
  rating: 10,
  review: "good in taste",
});

(async()=>{
  await Person.updateOne({_id : "6523074c11f04616c8dfa365"},{favouriteFruit : kiwi});
})()

const orange = new Fruit({
  name: "Orange",
  rating: 9,
  review: "pretty sour",
});

// const pineapple = new Fruit({
//   name: "Pineapple",
//   rating: 8,
//   review: "little bit tasty",
// });

// Fruit.insertMany([kiwi,orange,pineapple]);

// console.log(Fruit.find({}));

// we can get element by two ways

// 1. by using promise

// Fruit.find({}).then((data)=> console.log(data));

// 2. by using async/await function

async function getAllList() {
  try {
    const fruits = await Fruit.find({});
    mongoose.connection.close();
    console.log(fruits);
  } catch (error) {
    console.log(error);
  }
}

// getAllList();

async function getEachName() {
  try {
    const fruits = await Fruit.find({});
    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  } catch (err) {
    console.log(err);
  }
}

getEachName();

// Fruit.updateOne({_id : "6522fcd240cbf4adde333152"},{name : "Mango"});

// (async()=>{
//   await Fruit.updateOne({_id : "6522fcd240cbf4adde333152"},{name : "Mango"});
// })();

// (async () => {
//   await Fruit.deleteOne({ _id: "6522fd554fb1f561f629b9bf" });
// })();

// (async () => {
//   await Fruit.deleteOne({ _id: "6522fc66d898b79c353a8ccd" });
// })();

// (async () => {
//   try {
//     await Person.deleteMany({});
//     console.log("successfully deleted all the data");
//   } catch (err) {
//     console.log(err);
//   }
// })();

