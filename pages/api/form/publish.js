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
  const { data } = req.body;

  await db.collection("surveys").insertOne({
    id: data.id,
    ratingSite: data.ratingSite,
    ratingOperator: data.ratingOperator,
    ratingCourier: data.ratingCourier,
    ratingKitchen: data.ratingKitchen,
    commentSite: data.commentSite,
    commentOperator: data.commentOperator,
    commentCourier: data.commentCourier,
    commentKitchen: data.commentKitchen,
    order: data.order,
    operator: data.operator,
    kitchen: data.kitchen,
    courier: data.courier,
    phone: data.phone,
    customername: data.customername,
    created: data.created,
    confirmed: data.confirmed,
    printed: data.printed,
    sent: data.sent,
    delivered: data.delivered,
    created_at: DateTime.now().toISO(),
  });

  res.status(200).json({ answer: "success" });
};
