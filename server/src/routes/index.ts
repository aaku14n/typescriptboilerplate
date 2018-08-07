import express from "express"
import bodyParser from "body-parser"
import path from "path"
import cors from "cors";
import * as feed from "../db/feed"
import { Router, Request, Response } from "express"
export default function createRouter(): any {
    const router: Router = express.Router();
    router.use("/public", express.static(path.join(__dirname, "..", "public")));
    router.use(bodyParser.json({ limit: "250mb" }));
    router.use(bodyParser.urlencoded({ extended: false, limit: "250mb" }));
    router.use(cors({ origin: "*" }));
    router.get("/feeds", feed.getAllFeeds)
    router.get("/feed/:id", feed.getFeed)

    return router
}