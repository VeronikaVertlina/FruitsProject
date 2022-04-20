//jshint esversion:6

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB");

//insert some database
//1. To create a new schema
const fruitsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

//2. To cretae a mongoose model
const Fruit = mongoose.model("Fruit", fruitsSchema);

//3. To create a new fruit document
const fruit = new Fruit({
  name: "Peach",
  rating: 9,
  review: "Peaches are so yummy."
});

//4. To calls the SAVE method in Mongoose to save this
// - fruit document into a Fruit collection inside a fruitsDB
fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "John",
  age: 37
});

//person.save();

// Add new documents
// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 10,
//   review: "The best fruit."
// });
// const orange = new Fruit({
//   name: "Orange",
//   score: 3,
//   review: "Too sour for me."
// });
// const banana = new Fruit({
//   name: "Banana",
//   score: 3,
//   review: "Weird texture."
// });

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if(err){
//     console.log(err);
//   }else {
//     console.log("Succesfully saved all the fruits to FruitsDB.");
//   }
// });

Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {
    // mongoose.connection.close();
    setTimeout(function() {
      mongoose.disconnect();
    }, 500);

    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    });

  }
});



// const insertDucuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection("fruits");
//   // Insert same documents
//   collection.insertMany([
//     {
//       name: "Apple",
//       rating: 7,
//       review: "Pretty solidas a fruit."
//     }
//   ], function(err, result) {
//     assert.equal(err, null);
//     assert.equal(3, result.result.n);
//     assert.equal(3, result.ops.length);
//     callback(result);
//   });
// };

// const findDocuments = function(db, callback) {
//   // Get the document collection
//   const collection = db.collection("fruits");
//   // Find same findDocuments
//   collection.find({}).toArray(function(err, fruits) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(fruits);
//     callback(fruits);
//   });
// };
