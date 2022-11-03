<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Servicios turísticos
    
    .row 
      .col-lg-7
        .cajon.color-acento-contenido.p-4.mb-4
          p Al identificar los servicios prestados durante un viaje se puede evidenciar que están relacionados plenamente con los servicios turísticos brindados en la actualidad, los cuales tratan de suplir las exigencias presentadas por los clientes, buscando que cada persona logre desarrollar las actividades de ocio, descanso o esparcimiento dependiendo la tipología de turismo en la que se encuentren. También pueden ser actividades lucrativas que se presentan en el turismo de negocios.
      
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema4/g1.png', alt='')

    Separador

    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1  Caracterización de servicios turístico

    .row.mt-5.justify-content-center
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.carimg(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/g2.svg')})`}"
          )
          
          .bloque-texto-g__texto2.p-4
            p Los servicios turísticos se caracterizan dependiendo de la necesidad que tenga el visitante, dependiendo de la segmentación de mercado turístico se generan los servicios que se describen en el documento:
            br
            .row-auto 
              .col-lg-8
                a.anexo(:href="obtenerLink('downloads/Anexo_3.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/curso/temas/tema1/icono-pdf.svg")
                  .anexo__texto
                    b Anexo 3.
                    br
                    p Servicios turísticos

    Separador

    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2  Calidad del servicio

    .row 
      .col-lg-2
        figure
            img(weight="80" height="80" src='@/assets/curso/temas/tema4/g3.svg', alt='')

      .col-lg-10
        p La calidad del servicio turístico siempre está relacionada con los aspectos tangibles e intangibles de los servicios de viaje, se tiene en cuenta desde la infraestructura de los lugares donde se presta el servicio hasta el servicio al cliente de estos, sin pasar por alto las tarifas establecidas que se brindan estos lugares. Se debe establecer una relación equilibrada que contenga los factores mencionados, obteniendo como resultado una alta calidad del servicio.

    br
    
    b  #[i Estructura de la calidad del servicio]

    .row.mt-5.justify-content-center
      .col-5
        figure
          img(src='@/assets/curso/temas/tema4/g4.png', alt='')





</template>

<script>
export default {
  name: 'Tema4',
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
