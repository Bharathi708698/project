import './App.css';
import { Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import 'bootstrap/dist/css/bootstrap.min.css';
import OTPVerification from './pages/testing';
import Login from './pages/login';
import Verify from './pages/verify';
import { useState } from 'react';

function App() {
  const [currentForm , setCurrentForm] = useState("login")

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }
  return (
    <div>
      <Routes>
        
        <Route path='/login' element={currentForm === "login" ? <Login onFormSwitch = {toggleForm}/> : <Verify onFormSwitch = {toggleForm}/>}  />

      </Routes>
    </div>
  );
}

export default App;

                                      /*
                                      const MongoClient = require('mongodb').MongoClient;

// Connection URL and database name
const url = 'mongodb://localhost:27017';
const dbName = 'your-database-name';

// Create a new MongoClient
const client = new MongoClient(url);

// Connect to the MongoDB server
client.connect(function(err) {
  if (err) {
    console.error('Failed to connect to the database:', err);
    return;
  }

  console.log('Connected successfully to the database');

  const db = client.db(dbName);

  // Specify the collection name and the value to match
  const collectionName = 'your-collection-name';
  const valueToMatch = 'value-to-match';

  // Update operation using $set operator
  db.collection(collectionName).updateMany({ yourArrayField: valueToMatch }, { $set: { yourArrayField: '' } }, function(err, result) {
    if (err) {
      console.error('Failed to update array element:', err);
    } else {
      console.log(`Updated ${result.modifiedCount} array elements`);
    }

    // Close the MongoDB connection
    client.close();
  });
});
                                      */

/*
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URI
const uri = 'mongodb://localhost:27017';
// Database name
const dbName = 'your_database_name';
// Collection name
const collectionName = 'your_collection_name';

// Sample input
const input = 'your_input_value';

// Update function
async function updateArrayDocument() {
  try {
    // Connect to MongoDB
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Find documents where array matches the input
    const filter = { arrayField: input };
    const update = { $set: { updatedField: 'new_value' } };

    // Update the matched documents
    const result = await collection.updateMany(filter, update);

    console.log(`${result.modifiedCount} documents updated`);

    // Close the MongoDB connection
    client.close();
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

// Call the update function
updateArrayDocument();

*/

/*
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017'; // MongoDB connection URL
const dbName = 'yourDatabaseName'; // Your database name
const collectionName = 'yourCollectionName'; // Your collection name

// Function to update the array document in MongoDB
async function updateArrayDocument(input, newValue) {
  try {
    // Connect to MongoDB
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    
    // Update the array document where input matches a value in the array
    const result = await collection.updateOne(
      { arrayField: input }, // Match the input in the arrayField
      { $set: { 'arrayField.$': newValue } } // Update the matched array element with the newValue
    );

    // Check if the document was updated successfully
    if (result.modifiedCount > 0) {
      console.log('Array document updated successfully.');
    } else {
      console.log('No matching array document found.');
    }

    // Close the MongoDB connection
    client.close();
  } catch (error) {
    console.error('Error:', error);
  }
}

// Usage example
updateArrayDocument('value1', 'newValue');

*/


/*
const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'your_database_name';

// Collection Name
const collectionName = 'your_collection_name';

// Given input
const givenInput = 'your_given_input';

// MongoDB array field
const arrayField = 'your_array_field';

// Update value
const updateValue = 'your_update_value';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to MongoDB
client.connect(function (err) {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected successfully to MongoDB');

  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  // Update the document where given input and array value are equal
  collection.updateMany({ [arrayField]: givenInput }, { $set: { [arrayField]: updateValue } }, function (err, result) {
    if (err) {
      console.error('Error updating document:', err);
    } else {
      console.log('Documents updated:', result.modifiedCount);
    }

    // Close the connection
    client.close();
  });
});

*/
