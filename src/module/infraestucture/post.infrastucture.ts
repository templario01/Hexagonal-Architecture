import { Post } from '../domain/entities/post'
import { PostRepository } from '../domain/repositories/post.repository'
import { prisma } from './prisma/prisma'

export class PostInfrastucture implements PostRepository {
  async save(post: Post): Promise<Post> {
    const { properties } = post
    await prisma.post.create({
      data: {
        title: properties().title,
        content: properties().content,
        authorId: properties().authorId,
      },
    })

    return post
  }
}
