import { dbo } from "../utils/db.js";

export async function addHitch(req, res) {
  try {
    const dbResponse = await dbo
      .collection("article")
      .insertOne({ name: "Der Kuppler", preis: 99, herteller: "KGB" });

    if (dbResponse.acknowledged) res.status(201).end();
    res.status(500).end();
  } catch (err) {
    console.log(err);
    resourceLimits.status(500).end();
  }
}

export async function getHitches(req, res) {
  try {
    const dbResponse = await dbo.collection("article").find().toArray();
    console.log(dbResponse);
    res.json(dbResponse);
  } catch (error) {
    res.status(500).end();
  }
}
