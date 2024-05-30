import { Room, Tag } from "../../models/index.js";

export default async (req, res) => {
  try {
    if (!req.user) throw new Error("not logged in");
    const tag = await tag.findOne({
      where: { id: req.body.tagId },
    });
    const room = await Room.create(req.body);
    await tag.addRoom(room);
    await req.user.addRoom(room);
    res.json(room);
  } catch (err) {
    console.error(err);
    res.send("error");
  }
};
