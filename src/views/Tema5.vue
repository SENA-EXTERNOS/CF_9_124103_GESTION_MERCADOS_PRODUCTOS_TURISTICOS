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
          p Los aspectos que caracterizan la geografía turística están dados por la incidencia que puede tener un territorio a partir de los sucesos históricos acontecidos, lo cual hace de esto un factor de atracción para turistas y visitantes. A continuación, se presenta un video en el cual se desarrolla ampliamente este tema sobre la geografía turística. 
      
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema5/g1.png', alt='')

    Separador

    .titulo-tercero.my-5
      h3 Ubicación de destinos turísticos 

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/aQokH-6FxOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador

    .titulo-tercero.my-5
      h3 Componentes de destinos turísticos

    .row.my-5
      .col-lg-7
        .cajon.color-acento-contenido.p-4.mb-4
          p Son los elementos que tienen un gran potencial para convertir los lugares en un destino turístico, estos se relacionan de forma estructural, en donde cada uno de estos elementos se compagina para determinar turísticamente al destino
              
                  
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema5/g2.png', alt='')

    Separador

    .titulo-tercero.my-5
      h3 Atractivos turísticos

    .row.mt-5.justify-content-center.my-5
      .col-10
        .bloque-texto-g.color-primario.p-4
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/g3.svg')})`}"
          )
          .bloque-texto-g2__texto.p-4
            p Cuando se habla de atractivos turísticos es primordial tener en cuenta los elementos que lo conforman, estos se encuentran integrados por: recursos naturales, recursos culturales y actividades turísticas. Teniendo en cuenta la composición del atractivo turístico, se pueden desarrollar actividades dentro del entorno natural y a la vez, cultural.



    Separador

    .titulo-tercero.my-5
      h3 Perfil del viajero

    .row.mt-5.justify-content-center.my-5
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.carimg(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/g4.svg')})`}"
          )
          .bloque-texto-g__texto2.p-4
            p En el momento en que se perfila a una persona para realizar un viaje, se hace necesario tener en cuenta la motivación circunstancial que esta tiene, esto le permite al planificador turístico realizar cierta segmentación del cliente clasificándolo según sus gustos, costumbres y preferencias. 


    .row.my-5
      .col-lg-2
        figure
            img(src='@/assets/curso/temas/tema5/g5.svg', alt='')
      .col-lg-10
        p Para ampliar información sobre los componentes turísticos, los atractivos turísticos y el perfil del viajero, los invitamos a revisar el documento #[strong Anexo 4. componentes de los destinos turísticos.] 

        .row
          .col-lg-8
            a.anexo(:href="obtenerLink('downloads/Anexo_4.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/curso/temas/tema1/icono-pdf.svg")
              .anexo__texto
                b Anexo 4.
                p #[b Componentes de los destinos turísticos.]


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
