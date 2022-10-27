<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Geografía turística   

    .row 
      .col-lg-7
        .cajon.color-acento-contenido.p-4.mb-4
          p A continuación, se presenta un video en el cual podrá conocer los aspectos que caracterizan la geografía turística dada la incidencia que puede tener un territorio a partir de los sucesos históricos acontecidos, los cuales hacen de esto un facto de atracción de turistas y visitantes.   
      
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema5/g1.png', alt='')

    Separador

    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1  Ubicación de destinos turísticos 

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador

    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2  Componentes de destinos turísticos

    .row 
      .col-lg-7
        .cajon.color-acento-contenido.p-4.mb-4
          p Los componentes de los destinos turísticos son los elementos con gran potencial que conforman los destinos turísticos, a su vez se relacionan de forma estructural, en donde cada uno de los elementos se compagina para determinar turísticamente el destino.
      
        p Para ampliar información sobre los componentes turísticos, los atractivos turísticos y el perfil del viajero, los invitamos a revisar el documento:
        
        .row
          .col-lg-10
            a.anexo(:href="obtenerLink('downloads/Anexo_4.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/curso/temas/tema1/icono-pdf.svg")
              .anexo__texto
                b Anexo 4.
                br
                p Componentes de los destinos turísticos. 
                  
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema5/g2.png', alt='')

    Separador

    #t_5_3.titulo-segundo.color-acento-contenido
      h2 5.3  Atractivos turísticos

    .row.mt-5.justify-content-center
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.testdisenio2(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/g3.svg')})`}"
          )
          .bloque-texto-g__texto.p-4.testdisenio
            p Cuando se habla de atractivos turísticos es primordial tener en cuenta los elementos que lo componen, estos se encuentran conformados por: recursos naturales, recursos culturales y actividades turísticas, teniendo un orden de conformación como es el caso de las actividades turísticas, que se puede desarrollar dentro del entorno natural y cultural.

    br

    .row 
      .col-lg-2
        figure
            img(src='@/assets/curso/temas/tema5/g5.svg', alt='')
      .col-lg-10
        p Para ampliar información sobre los componentes turísticos, los atractivos turísticos y el perfil del viajero, los invitamos a revisar el documento:

        .row
          .col-lg-8
            a.anexo(:href="obtenerLink('downloads/Anexo_4.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/curso/temas/tema1/icono-pdf.svg")
              .anexo__texto
                b Anexo 4.
                br
                p Componentes de los destinos turísticos, sección atractivos turísticos. 

    Separador

    #t_5_4.titulo-segundo.color-acento-contenido
      h2 5.4  Perfil del viajero

    .row.mt-5.justify-content-center
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.testdisenio2(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/g4.svg')})`}"
          )
          .bloque-texto-g__texto.p-4.testdisenio
            p Al momento en que se perfila una persona para realizar un viaje se hace necesario tener en cuenta la motivación circunstancial que se tiene, esto le permite al planificador turístico realizar cierta perfilación frente al cliente, a su vez lo clasifica identificando sus gustos, costumbres y preferencias. 

    br

    .row 
      .col-lg-2
        figure
            img(src='@/assets/curso/temas/tema5/g5.svg', alt='')
      .col-lg-10
        p Para ampliar información sobre los componentes turísticos, los atractivos turísticos y el perfil del viajero, los invitamos a revisar el documento:

        .row
          .col-lg-8
            a.anexo(:href="obtenerLink('downloads/Anexo_4.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/curso/temas/tema1/icono-pdf.svg")
              .anexo__texto
                b Anexo 4.
                br
                p Componentes de los destinos turísticos, sección perfil del viajero. 


</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
