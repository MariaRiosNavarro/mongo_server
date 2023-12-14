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
    // das 2.{} in find kann man benutzen um den Datenbankzeiger optionen mit zu geben. limit limitiert die anzahl der geholten dokumente und skip überspringt die angeben anzahl von dokumente
    // die gewünschte projektion der daten kann mit dem optionalen .project({name:1}) konfiguriert werden
    // const dbResponse = await dbo.collection('article').find({<ganz normale find operationen ausführen>}, { limit: 2, skip: 3 }).project({ name: 1 }).toArray()
    // const dbResponse = await dbo.collection('article').find({ preis: { $gte: 99 } }).toArray()
    const dbResponse = await dbo.collection("article").find().toArray();
    console.log(dbResponse);
    res.json(dbResponse);
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
}

// export async function getOneHitches(req, res) {
//   try {
//     const dbResponse = await dbo
//       .collection("article")
//       .find({ _id: new ObjectId("657acc35d2dd3feb8d4f2952") })
//       .toArray();
//     console.log(dbResponse);
//     res.json(dbResponse);
//   } catch (error) {
//     res.status(500).end();
//   }
// }
