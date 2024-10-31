export const navbarData = {
  homeTitle: 'Nicolhetti Projects',
}

export const footerData = {
  author: 'Redes',
  aboutTheSite: 'Aún nada :/',
}

export const homePage = {
  title: 'Nicolhetti Projects',
  description: 'Cada juego es analizado archivo por archivo para asegurarse de ser los más seguros de Internet y no infectar a nuestros jugadores. Si el game está publicádo en la web, quiere decir que pasó los estandares de calidad y puede ser ejecutado con total seguridad.',
}

export const gamesPage = {
  title: 'Todos los Juegos',
  description: 'Aquí encontrarás todos los juegos publicados actualmente',
}

export const categoryPage = {
  title: 'Categorías',
  description: 'Aquí encontrarás todas las categorías disponibles',
}

export const aboutPage = {
  title: 'Nicolhetti Projects',
  description: '¡Bienvenidos a Nicolhetti Projects! Aquí encontrarás juegos analizados para tu seguridad.',
  aboutMe: `Soy un apasionado gamer de Argentina, y como muchos de ustedes, he enfrentado las dificultades de una economía complicada.<br>
Desde siempre, el acceso a juegos de calidad ha sido un desafío, lo que me llevó a buscar alternativas en sitios de dudosa reputación.<br>
Sin embargo, esta búsqueda a menudo terminaba en frustración: la mayoría de esos juegos estaban infestados de malware, lo que me hizo cuestionar la seguridad de lo que estaba descargando.<br>
Fue en ese momento de frustración que decidí dar un paso adelante. Así nació Nicolhetti Projects, un espacio donde mi misión es compartir juegos que he analizado meticulosamente, archivo por archivo, para asegurarme de que sean los más seguros de internet.<br>
Cada juego que ofrezco ha pasado por un riguroso proceso de verificación. Si encuentro algún archivo infectado, hago todo lo posible para limpiarlo. Si no puedo eliminar las detecciones, simplemente descarto el juego y busco otra fuente.<br>
Todo esto lleva mucho tiempo y dedicación, ya que soy una sola persona comprometida con brindarles la mejor experiencia posible.<br>
Mi objetivo es que puedan disfrutar de los juegos sin preocupaciones, sabiendo que han sido revisados para su seguridad.<br>
Espero que valoren el esfuerzo que pongo en cada descarga y que juntos podamos construir una comunidad más segura para todos los gamers.<br>
¡Gracias por formar parte de esta aventura!`,
}


export const seoData = {
  description: 'Aquí encontrarás juegos analizados para tu seguridad.',
  ogTitle: '¡Bienvenidos a Nicolhetti Projects!',
  twitterDescription: 'Aquí encontrarás juegos analizados para tu seguridad.',
  image: 'https://i.imgur.com/iNJsP0E.png',
  mySite: 'https://nicolhetti-projects.vercel.app/',
  twitterHandle: '@nicolhetti',
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
