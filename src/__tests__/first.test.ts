import User from '@models/User'

describe('User', () => {
  it('should pass', () => {
    const user: User = {
      name: 'User 01',
      email: 'user01@example.com'
    }
    expect(user).toBeDefined()
  })
})
