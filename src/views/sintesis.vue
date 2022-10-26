<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.justify-content-center
        .col-lg-8.sm-8
          .titulo-sexto.color-acento-contenido
            b Gestión de mercado de productos turísticos
            p Síntesis: Tipos de productos turísticos

        .col-lg-2
          figure
          img(src="@/assets/curso/temas/ssena.svg" width='70' height='70')

    .row.justify-content-center
      .col-lg-10.mb-5
        br
        p Revise la siguiente síntesis, la cual resumen la temática abordada en el componente “Tipos de productos turísticos”.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")

</template>

<script>
export default {
  name: 'Sintesis',
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
