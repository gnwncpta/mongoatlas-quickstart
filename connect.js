const { MongoClient } = require('mongodb');

const url = "mongodb+srv://dbUser:usercanaccessblack@cluster0.epwup.mongodb.net/Cluster0?retryWrites=true&w=majority";
const client = new MongoClient(url);

const dbName = "test";

async function run(){
    try {
        await client.connect();
	    console.log('Connected correctly to server');
    } catch(err){
        console.log(err.stack);
    }

    finally{
	    await client.close();
    }
} 


run().catch(console.dir);
