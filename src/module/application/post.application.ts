import { Post } from '../domain/entities/post'
import { PostRepository } from '../domain/repositories/post.repository'

export class PostApplication {
  readonly repository: PostRepository

  constructor(repository: PostRepository) {
    this.repository = repository
  }

  save(post: Post): Promise<Post> {
    return this.repository.save(post)
  }
}
