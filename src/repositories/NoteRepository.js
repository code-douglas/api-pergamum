import prisma from '../database/prisma.js';

class NoteRepository {
  async create(data) {
    return await prisma.note.create({
      data,
    });
  }

  async findAllByUser(userId) {
    return await prisma.note.findMany({
      where: { userId },
      include: { checklist: true },
    });
  }
}

export default new NoteRepository();
