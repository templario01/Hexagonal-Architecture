export class Post {
  private readonly id: number
  private readonly title: string
  private readonly content?: string
  private readonly authorId: number

  constructor(id: number, title: string, authorId: number, content?: string,) {
    this.id = id
    this.content = content
    this.title = title
    this.authorId = authorId
  }
}
