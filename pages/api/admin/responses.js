import NextCors from "nextjs-cors";
import { connectToDatabase } from "../../../util/mongodb";
import { DateTime } from "luxon";

export default async (req, res) => {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });
  
  const { db } = await connectToDatabase();
  const { from_date, to_date } = req.body;

  const result = await db
    .collection("surveys")
    .find({
      created_at: {
        $gte: DateTime.fromISO(from_date).toString(),
        $lt: DateTime.fromISO(to_date).toString(),
      },
    })
    .toArray();

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json(result);
};