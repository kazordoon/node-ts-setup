import User from '@models/User'
import { Request, Response } from 'express'

class UsersController {
  public index (req: Request, res: Response) {
    const users: User[] = [
      {
        name: 'User 1',
        email: 'user1@example.com',
      },
      {
        name: 'User 2',
        email: 'user2@example.com',
      },
      {
        name: 'User 3',
        email: 'user3@example.com',
      },
    ];

    return res.render('index', { users })
  }
}

export default new UsersController()
