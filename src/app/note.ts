export class Note {
  title: string;
  content: string;
  _id: string;
  constructor(Title: string, Content: string, id: string) {
    this.title = Title;
    this.content = Content;
    this._id = id;
  }
}
