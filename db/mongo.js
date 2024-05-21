import { MongoClient } from "mongodb";

export async function getData() {
  try {
    const uri = `mongodb://${process.env.DB_SERVICE}.${process.env.DB_HEADLESS_SERVICE}`;
    const client = new MongoClient(uri);
    const database = client.db("db");
    const performances = await database.collection("nagp").find({}).toArray();
    return performances;
  } catch (e) {
    console.log(e);
    return e;
  } finally {
    if (client) await client.close();
  }
}
