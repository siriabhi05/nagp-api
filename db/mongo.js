import { MongoClient } from "mongodb";

const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_SERVICE}.${process.env.DB_HEADLESS_SERVICE}`;

export async function getData() {
  var client = undefined
  try {
    client = new MongoClient(uri);
    const database = client.db("nagp");
    const performances = await database.collection("performances").find().toArray();
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
    client = new MongoClient(uri);
    const database = client.db("nagp");
    await database.collection("performances").insertOne(data);
    return { msg: "Successfull", staus: 200 }
  } catch (e) {
    console.log(e);
    return { msg: "Failed", staus: 500 }
  } finally {
    if (client) await client.close();
  }
}


