export interface BlogPost {
  title: string
  date: string
  description: string
  image: string
  alt: string
  ogImage: string
  tags: string[]
  published: boolean
  update: string
  release: string
  downloadLinks: { 
    name: string; 
    url: string; 
    buttonColor?: string;
  }[]
}