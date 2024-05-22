import { MongoClient } from "mongodb";



export async function getData() {
  try {
    const uri = `mongodb://${process.env.DB_SERVICE}.${process.env.DB_HEADLESS_SERVICE}`;
    console.log("mongodburi: " + uri);
    const client = new MongoClient(uri);
    console.log("mongodb client created");
    const database = client.db("db");
    const performances = await database.collection("nagp").find({}).toArray();
    console.log(performances);
    return { performances: performances, status: 200 };
  } catch (e) {
    console.log(e);
    return { performances: [], status: 500 };
  } finally {
    if (client) await client.close();
  }
}
