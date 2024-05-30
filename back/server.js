import express from "express";

import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import multer from "multer";
import cors from "cors";

import router from "./controllers/index.js";
import { Tag, sequelize } from "./models/index.js";
// MVC 패턴

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(
  cors({
    origin: ["http://127.0.0.1:5500", "http://localhost"],
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET || "aws"));

app.use(router);

const force = true;

try {
  if (force) {
    await sequelize.sync({ force });

    await Tag.create({ name: "전체", href: "./" });

    const OX = await Tag.create({ name: "찬반토론", href: "./" });

    await OX.addChildren(
      await Category.create({ name: "정보공유", href: "./" })
    );
    await OX.addChildren(
      await Category.create({ name: "친목수다", href: "./" })
    );
  }
} catch (err) {
  console.error(err);
}

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "server open");
});
