import { Room, Tag, User } from "../../models/index.js";

export default async (req, res) => {
  try {
    const list = await Room.findAll({
      include: [
        {
          model: Tag, // Board에서의 카테고리 가져오기
          include: [
            {
              model: Tag, // 상위 카테고리 가져오기
              as: "parent",
              attributes: {
                exclude: ["createdAt", "updatedAt", "deletedAt"],
              },
              include: [
                {
                  model: Tag, // 하위 카테고리 가져오기
                  as: "children",
                  attributes: {
                    exclude: ["createdAt", "updatedAt", "deletedAt"],
                  },
                },
              ],
            },
            {
              model: Tag, // 하위 카테고리 가져오기
              as: "children",
              attributes: {
                exclude: ["createdAt", "updatedAt", "deletedAt"],
              },
            },
          ],
          attributes: {
            exclude: ["createdAt", "updatedAt", "deletedAt"],
          },
        },
        {
          model: User,
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
    });

    res.json(list);
  } catch (err) {
    console.error(err);
    res.send("error");
  }
};
