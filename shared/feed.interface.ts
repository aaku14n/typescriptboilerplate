export interface Feed {
    id:number;
    title:string;
    imageUrl:string
}
export interface FeedComponent {
    id:number | string;
    title:string;
    description?:string;
    imageUrl:string
}
export interface FeedComponentStore {
    feed:FeedComponent;
    loading:boolean
}
export interface FeedStore {
    feeds:Feed[];
    loading:boolean
}
export interface RootState {
    feeds:any;
    feed:any
}
export default interface StoreState {
    feeds: FeedStore;
    feed:FeedComponentStore
  }