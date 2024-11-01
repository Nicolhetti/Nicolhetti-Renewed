import { Feed } from 'feed'
import { serverQueryContent } from '#content/server'

const basePath = 'https://nicolhetti-projects.versel.app'

export default defineEventHandler(async (event) => {
  setHeader(event, 'content-type', 'text/xml')
  const docs = await serverQueryContent(event).sort({ date: -1 }).find()
  const feed = new Feed({
    title: 'Nicolhetti Projects',
    description: 'Nicolhetti Projects',
    id: basePath,
    link: basePath,
    language: 'en',
    favicon: `${basePath}/favicon.ico`,
    copyright: 'MIT',
    author: {
      name: 'Nicolhetti',
      email: 'nicolhetti_boss@nicolhetti-projects.com.ar',
      link: basePath,
    },
  })

  // Add the feed items
  docs.forEach((doc) => {
    feed.addItem({
      title: doc.title || '',
      id: basePath + doc._path,
      link: basePath + doc._path,
      description: doc.description,
      content: doc.description,
      date: new Date(doc.date),
    })
  })

  return feed.rss2()
})
