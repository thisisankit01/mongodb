import { MongoClient } from "mongodb";

// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://ankit:ankit@<cluster-url>?retryWrites=true&w=majority";
 
//constructed new client in mongo db to access
const client = new MongoClient(uri);


async function run() {
  try {
    const database = client.db('sample_mflix'); //connected to db 
    const movies = database.collection('movies'); //accessed db collection

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' }; //movied with the title
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);