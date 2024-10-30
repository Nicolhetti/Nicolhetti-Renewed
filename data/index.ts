export const navbarData = {
  homeTitle: 'Nicolhetti Projects',
}

export const footerData = {
  author: 'Redes',
  aboutTheSite: '-----',
}

export const homePage = {
  title: 'Nicolhetti Projects',
  description: 'Cada game es analizado archivo por archivo para asegurarse de ser los más seguros de Internet y no infectar a nuestros jugadores. Si el game está publicádo en la web, quiere decir que pasó los estandares de calidad y puede ser ejecutado con total seguridad.',
}

export const gamesPage = {
  title: 'Todos los Juegos',
  description: '---',
}

export const categoryPage = {
  title: 'Categorías',
  description: '---',
}

export const aboutPage = {
  title: 'Nicolhetti Projects',
  description: '--',
  aboutMe: '--',
}

export const seoData = {
  description: 'Riyad, Software Engineer at AppsCode, with over 2.5+ years experience in software development.',
  ogTitle: 'Riyad codes and helps others learn Javascript, Typescript, Vue, Nuxt, & Problem Solving',
  twitterDescription: 'My game website, where I play around with Nuxt, Vue, and more and showcase my game, resources, etc',
  image: 'https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-game/cover_ntgs6u.webp',
  mySite: 'https://nicolhetti-projects.com.ar',
  twitterHandle: '@qdnvubp',
  mailAddress: 'nicolhetti_boss@nicolhetti-projects.com.ar',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: seoData.twitterHandle },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]
