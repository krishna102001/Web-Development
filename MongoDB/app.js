//jshint esversion:6

// **************    old version      ************** \\

const {MongoClient} = require("mongodb");
const assert = require("assert");

const uri = "mongodb://localhost:27017";

const dbName = 'fruitsDB';

const client =  new MongoClient(uri);

client.connect(function(err){
    assert.equal(null,err);
    console.log("connected successfully to DB server");
    const db = client.db(dbName);
    // client.close();
    inserDocuments(db,function(){
        client.close();
    })
});

const inserDocuments = function(db,callback){
    const collection = db.collection('fruits');
    collection.insertMany([
        {
            name : 'apple',
            score : 80,
            review : 'tasty'
        },
        {
            name : 'orange',
            score : 5,
            review : 'bad'
        },
        {
            name : 'grapes',
            score : 10,
            review : 'good'
        }
    ],function(err,result){
        assert.equal(err,null);
        assert.equal(3,result.result.n);
        assert.equal(3,result.ops.length);
        console.log("inserted 3 documents into collections");
        callback(result);
    });
}

const findDocuments = function(db,callback){
    const collection = db.collection('fruits');
    collection.find({}).toArray(function(err,fruits){
        assert.equal(err,null);
        console.log("found the following records");
        console.log(fruits);
        callback(fruits);
    })
}


// *************     new version ways    ****************** \\
import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017";

// Create a new client and connect to MongoDB
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect to the "insertDB" database and access its "haiku" collection
    const database = client.db("insertDB");
    const haiku = database.collection("haiku");
    
    // Create a document to insert
    const doc = {
      title: "Record of a Shriveled Datum",
      content: "No bytes, no problem. Just insert a document, in MongoDB",
    }
    // Insert the defined document into the "haiku" collection
    const result = await haiku.insertOne(doc);

    // Print the ID of the inserted document
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
     // Close the MongoDB client connection
    await client.close();
  }
}
// Run the function and handle any errors
run().catch(console.dir);



// import { MongoClient } from "mongodb";

// // Replace the uri string with your MongoDB deployment's connection string.
// const uri = "<connection string uri>";

// const client = new MongoClient(uri);

async function run() {
  try {
    
    // Get the database and collection on which to run the operation
    const database = client.db("shopDB");
    const movies = database.collection("products");

    // Query for a movie that has the title 'The Room'
    const query = { name : "Rubber" };

    // const options = {
    //   // Sort matched documents in descending order by rating
    //   sort: { "imdb.rating": -1 },
    //   // Include only the `title` and `imdb` fields in the returned document
    //   projection: { _id: 0, title: 1, imdb: 1 },
    // };

    // Execute query
    const movie = await movies.findOne(query);

    // Print the document returned by findOne()
    console.log(movie);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
