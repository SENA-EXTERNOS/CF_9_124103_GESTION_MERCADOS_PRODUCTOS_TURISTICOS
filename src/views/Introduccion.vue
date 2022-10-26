<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row
      .col-md-7
        p Estimado aprendiz, bienvenido a este recurso educativo que describe las características fundamentales de diversos tipos de productos turísticos como son los servicios de viaje, productos turísticos según el destino, geografía turística, patrimonio cultural su historia y tipos de territorio, en otros aspectos, igualmente podrá conocer las tecnologías de información y comunicación que favorecen la búsqueda de productos de turismo a través de plataformas y sistemas globales de reserva, con lo anterior aprenderá a reconocer la tipología de productos turísticos, sus características y factores que determinan la logística para su gestión.
        | #[b En el siguiente video conocerá de forma general, la temática que estudiará a lo largo del componente formativo. ¡Muchos éxitos en este proceso de aprendizaje!]
      .col-md-5
        img(src="@/assets/curso/temas/introduccion.svg", alt="").banner-principal-decorativo-3  
    br
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption VIDEO
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
