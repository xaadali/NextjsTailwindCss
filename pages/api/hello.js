// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import ConnectMongoose from "../../database/connection";
import Km from "../../database/schema";
export default function handler(req, res) {
  ConnectMongoose().catch((error) => console.log(error));
  const create = new Km({ name: "Saad" });
  create.save().then(() => {
    res.status(200).json(create);
  });

  // res.status(200).json({ name: "John Doe" });
}
