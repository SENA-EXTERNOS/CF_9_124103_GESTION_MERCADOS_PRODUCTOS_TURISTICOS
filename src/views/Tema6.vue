<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Patrimonio cultural

    .row 
      .col-lg-7
        .bloque-texto-b.color-acento-contenido.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p De acuerdo con la UNESCO en la Convención de UNESCO (1972), #[i “el Patrimonio Cultural se compone de aquello que a lo largo de la historia han creado los hombres de una nación y que, en el momento presente, seguimos creando los que vivimos en la actualidad”]. (Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura [<b>UNESCO</b>], 1972)
            br
            br
            p El patrimonio cultural es uno de los ejes fundamentales del turismo ya que de este se desliga un legado de tradición. Tiene como valor la conservación de tradiciones, costumbres, gastronomía y conocimientos arquitectónicos de un lugar o una región en específico, con el fin de proteger y salvaguardar la riqueza cultural de cada uno de los destinos. 
 
            i.fas.fa-quote-right

      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema6/g1.png', alt='')



    p.my-5 El turismo tiene un valor importante dentro de la caracterización de patrimonio cultural ya que sirve como herramienta conservadora en los lugares donde se realicen actividades enfocadas al turismo cultural. 


        
    .row 
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema6/g2.png', alt='') 
      .col-lg-8
        p El turismo es el encargado de ser el transmisor de identidad mediante las actividades relacionadas con el entorno cultural, además de tener la capacidad de identificar los diferentes bienes de interés cultural (BIC) los cuales son declarados mediante un medio gubernamental a nivel nacional o internacional, pudiendo llegar a un máximo de categorización y protección como lo es el Patrimonio de la Humanidad de la Unesco. El patrimonio cultural se clasifica y denomina de forma material e inmaterial.

        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--naranja")
          .row(titulo="Patrimonio cultural material:")
            .col-md-10
              p Es todo aquel que se puede ver y puede palpar como por ejemplo edificaciones, pinturas, piezas históricas, documentos, cartas u objetos con gran valor histórico.
          
          div(titulo="Patrimonio cultural inmaterial:")
            p Es todo aquel que brinda o genera una experiencia única pero no siempre se puede ver tocar o desplazar, por ejemplo: carnavales, la música, la danza, las lenguas nativas o el teatro.

    Separador

    .titulo-tercero.my-5
      h3 Técnicas de interpretación del patrimonio

    .row.mt-5.justify-content-center
      .col-10
        .cajon.color-acento-botones.p-4.mb-4
          p Los recursos culturales son la base del patrimonio cultural, es allí donde se reconocen los diferentes bienes que pueden ser valorados y utilizados para la actividad turística, teniendo en cuenta la interpretación que pueda generar el bien cultural. Cuando se habla de interpretar se hace alusión al arte de explicar, definir o caracterizar el patrimonio, para que pueda ser captado o comprendido por un espectador.
          p Para ampliar información sobre esta temática revise el #[strong anexo 5. técnicas de interpretación del patrimonio.]

          .row
            .col-lg-8
              a.anexo(:href="obtenerLink('downloads/Anexo_5.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/curso/temas/tema1/icono-pdf.svg")
                .anexo__texto
                  b Anexo 5.

                  p #[b Técnicas de interpretación del patrimonio.]

    Separador

    .titulo-tercero.my-5
      h3 Características del patrimonio cultural

    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-12
          .bloque-texto-a__texto.p-4
            p Al momento de denominar un bien como patrimonio cultural, es necesario tener en cuenta que no todos los bienes de interés cultural pueden llegar a ser patrimonio cultural, esta denominación siempre es generada por un conjunto de características impuestos por cada país o territorio. En Colombia se entiende por patrimonio cultural de la nación, todos aquellos bienes y manifestaciones que son reconocidas e identificadas por diferentes medios institucionales y gubernamentales que, mediante un proceso documental en donde evidencie los valores y la identidad cultural, pueden llegar a denominarse patrimonio cultural.

    Separador

    .titulo-tercero.my-5
      h3 Historia

    .row 
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema6/g3.png', alt='') 
      .col-lg-7
        p En la actualidad el término patrimonio cultural ha tenido gran aceptación a nivel mundial, ya que la mayoría de personas no conocedoras del término lo relacionan con la identidad e historia de cierto territorio. En los últimos años se puede decir que esta denominación ha evolucionado, debido a que en la antigüedad solo se le daba tal reconocimiento a piezas artísticas de gran valor históricos y económico.
        p A continuación, se detalla el pronunciamiento de la Unesco más ampliamente sobre patrimonio cultural:      

        .bloque-texto-b.color-acento-contenido.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p Según la Unesco en la convención de 1972 indica que #[i “el patrimonio cultural no se limita a monumentos y colecciones de objetos. Comprende también expresiones vivas heredadas de nuestros antepasados, como tradiciones orales, artes del espectáculo, usos sociales, rituales, actos festivos, conocimientos y prácticas relativos a la naturaleza y el universo y saberes y técnicas vinculados a la artesanía tradicional”] (UNESCO,1972).
            i.fas.fa-quote-right

    Separador

    .titulo-tercero.my-5
      h3 Tipos de territorio

    .row.mt-5.justify-content-center
      .col-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
            .row.m-0.align-items-center.justify-content-between
              .col-lg-12
                .bloque-texto-a__texto.p-4
                  p Los tipos de territorio dentro del entorno turístico se desarrollan dependiendo el tipo de turismo que se ejecute en el destino. Cada destino se centra o especializa en una categoría diferenciadora ya sea ambiental o cultural, de estas se desprenden la protección o salvaguarda de la misma categoría, donde se debe de tener en cuenta espacios destinados para el turismo y su relación socioeconómica con la población residente del lugar, esto permite que el destino turístico sea promovido y visitado nacional e internacionalmente. 

                  b Para ampliar información sobre esta temática revise el #[strong anexo 5. Técnicas de interpretación del patrimonio, sección tipos de territorio.]

                  br
                  br
                  .row
                    .col-lg-10
                      a.anexo(:href="obtenerLink('downloads/Anexo_5.pdf')" target="_blank")
                        .anexo__icono
                          img(src="@/assets/curso/temas/tema1/icono-pdf.svg")
                        .anexo__texto
                          b Anexo 5.
                          p #[b Técnicas de interpretación del patrimonio, sección tipos de territorio.]
                
    .row.mt-5.justify-content-center
      .col-10
        .cajon.color-acento-botones.p-4.mb-4
          p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo, para ello diríjase al menú principal en donde encontrará la síntesis, la actividad didáctica, material complementario, entre otros.


</template>

<script>
export default {
  name: 'Tema6',
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
