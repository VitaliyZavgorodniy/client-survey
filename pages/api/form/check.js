import { connectToDatabase } from "util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const { id } = req.body;

  const result = await db.collection("surveys").findOne({ id });

  res.status(200).json(result ? true : false);
};
