import { plainToInstance } from 'class-transformer'
import { Post } from '../domain/entities/post'
import { prisma } from './prisma/prisma'

export class PostInfrastucture {
  async save(): Promise<Post> {
    const { id, authorId, content, title } = await prisma.post.create({
      data: {
        title: '',
        authorId: 1,
      },
    })

    return new Post(id, title, authorId, content ?? undefined)
  }
}
