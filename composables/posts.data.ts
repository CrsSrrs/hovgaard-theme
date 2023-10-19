import { createContentLoader } from 'vitepress'
import type { Post } from '../../theme-types'

const data = [] as Post[]
export { data }

export default createContentLoader('news/**/!(index).md', {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url,
        date: formatDate(frontmatter.date),
        excerpt: frontmatter.excerpt || excerpt,
        thumbnail: frontmatter.thumbnail,
        external: frontmatter.external,
      }))
      .sort((a, b) => b.date.time - a.date.time)
  }
})

function formatDate(raw: string): Post['date'] {
  const date = new Date(raw)
  // date.setUTCHours(12)
  return {
    time: +date,
    string: date.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
}
