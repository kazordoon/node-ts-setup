/* eslint-disable import/first */
import dotenv from 'dotenv'

if (process.env.NODE_ENV === 'development') {
  dotenv.config()
} else if (process.env.NODE_ENV === 'test') {
  dotenv.config({
    path: '.env.test'
  })
}

import app from './app'

app.listen(app.get('PORT'), app.get('HOST'), () => {
  console.log(`Server running on ${app.get('HOST')}:${app.get('PORT')}`)
})
