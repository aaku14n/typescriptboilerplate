import { FeedComponent } from "../../../shared/feed.interface";
import { Request, Response } from "express";

const feedMock: Array<FeedComponent> = [
  {
    id: "1",
    title: "First post",
    imageUrl: "http://via.placeholder.com/350x150"
  },
  {
    id: "2",
    title: "Second post",
    imageUrl: "http://via.placeholder.com/350x150"
  },
  {
    id: "3",
    title: "Third post",
    imageUrl: "http://via.placeholder.com/350x150"
  },
  {
    id: "4",
    title: "Fourth post",
    imageUrl: "http://via.placeholder.com/350x150"
  },
  {
    id: "5",
    title: "Fifth post",
    imageUrl: "http://via.placeholder.com/350x150"
  },
  {
    id: "6",
    title: "Sixth post",
    imageUrl: "http://via.placeholder.com/350x150"
  },
  {
    id: "7",
    title: "Seventh post",
    imageUrl: "http://via.placeholder.com/350x150"
  },
  {
    id: "8",
    title: "Eight post",
    imageUrl: "http://via.placeholder.com/350x150"
  },
  {
    id: "9",
    title: "Ninth post",
    imageUrl: "http://via.placeholder.com/350x150"
  }
];

export function getAllFeeds(req: Request, res: Response) {
    // get data from data base here and return to
    // response
    res.send(feedMock);
}
export function getFeed(req: Request, res: Response) {
    const { id } = req.params;
    const feed = feedMock.find((f:FeedComponent) => { return f.id == id })
    if (feed) {
        res.send(feed)
    } else {
        res.send("no data")
    }

}
