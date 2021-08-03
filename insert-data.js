const { MongoClient } = require('mongodb');

const url = "mongodb+srv://dbUser:usercanaccessblack@cluster0.epwup.mongodb.net/Cluster0?retryWrites=true&w=majority";
const client = new MongoClient(url);

const dbName = "test";

async function run(){
    try {
        await client.connect();
	    console.log('Connected correctly to server');
        const db = client.db(dbName); // instantiate the db

        // Use the collection people
        const col = db.collection("people");

        // Construct a document
        let personDocument = {
            "name": { "first": "Alan", "last": "Turing" },
            "birth": new Date(1912, 5, 23),
            "death": new Date(1954, 5, 7),
            "contribs": ["Turing Machines", "Turing Test", "Turingery"],
            "views": 1250000
        }

        // Insert a single document, wait for promise so we can read it back
        const p = await col.insertOne(personDocument);
        // Find one document
        const myDoc = await col.findOne();
        // Print to the console
        console.log(myDoc);

    } catch(err){
        console.log(err.stack);
    }
    
    finally{
	    await client.close();
    }
} 


run().catch(console.dir);
