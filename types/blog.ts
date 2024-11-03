export interface BlogPost {
  title: string
  date: string
  description: string
  image: string
  alt: string
  ogImage: string
  tags: string[]
  published: boolean
}

declare global {
  interface Window {
    DISQUS?: any;
  }
}
