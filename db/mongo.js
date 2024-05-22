import { MongoClient } from "mongodb";

const uri = `mongodb://${process.env.DB_SERVICE}.${process.env.DB_HEADLESS_SERVICE}`;

export async function getData() {
  var client = undefined
  try {
    client = new MongoClient(uri);
    const database = client.db("nagp");
    const performances = await database.collection("performances").find().toArray();
    console.log(performances);
    return { performances: performances, status: 200 };
  } catch (e) {
    console.log(e);
    return { performances: [], status: 500 };
  } finally {
    if (client) await client.close();
  }
}

export async function createData(data) {
  var client = undefined
  try {
    console.log(data);
    client = new MongoClient(uri);
    const database = client.db("nagp");
    const result = await database.collection("performances").insertOne(data);
    console.log(result)
  } catch (e) {
    console.log(e);
  } finally {
    if (client) await client.close();
  }
}


