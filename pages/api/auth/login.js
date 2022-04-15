import NextCors from "nextjs-cors";
import { connectToDatabase } from "util/mongodb";
import { generate_token } from "util/generateToken";

const handlder = async (req, res) => {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  const { db } = await connectToDatabase();
  const { login, password } = req.body;

  const user = await db
    .collection("users")
    .findOne({ login, password, isActive: true });

  if (!!user) {
    if (!!user.token) {
      const result = await db.collection("users").findOne({ login, password });
      res.json({ token: result.token, name: result.name, phone: result.login });
    } else {
      const token = generate_token();

      const insert = await db.collection("users").updateOne(
        { login, password },
        {
          $set: { token },
        },
        { upsert: true }
      );

      const result = await db.collection("users").findOne({ token });

      res.json({ token: result.token, name: result.name, phone: result.login });
    }
  } else return res.json({ error: "User not found" });
};

export default handlder;
