<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tecnologías de la información y la comunicación

    .row
      .col-lg-8
        p La tecnología que se emplea para la información y la comunicación o TIC, como generalmente se le llama, muestra cada vez más avances y adecuaciones e n los diferentes campos para el desarrollo del turismo. Con el pasar del tiempo, el turismo se ha vuelto una fuente principal de empleo para la economía del país, región o lugar donde se encuentre; a medida que el turismo empieza a crecer, se generan necesidades correspondiendo a la demanda turística y se presenta la oportunidad de fabricar tecnología e infraestructura que suplan tales necesidades.
        
        .cajon.color-acento-contenido.p-4.mb-4
          p En la actualidad todas las empresas relacionadas con el turismo desarrollan como mínimo un #[i software] de reservas o de información turística, también son empleadas para diseñar o manejar publicidad comercial para beneficio propio, incrementando las ventas gracias a la promoción masiva que se da con estas herramientas informáticas.
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/g1.png', alt='') 

    Separador

    .titulo-tercero
      h3 Motores de búsqueda

    .row.mt-5.justify-content-center
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.carimg(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/im1.svg')})`}"
          )
          
          .bloque-texto-g__texto2.p-4
            p Los sistemas de información han evolucionado a grandes niveles, entre estos, el uso de los motores de búsqueda se ha convertido en una fuente tan compleja que estos demuestran gran practicidad al momento de utilizarlos, esto se debe al avance en el desarrollo digital que se ha venido incrementando en los últimos años. La mayoría de plataformas crean un algoritmo de búsqueda el cual tiene la capacidad de encontrar, con mayor precisión, lo que se está buscando, esto brinda una gran exactitud en el momento que se investiga un destino.

    .row.my-5
      p Para ampliar información se invita a revisar el documento #[strong Anexo 2. Tecnologías de la información y la comunicación], en este documento se presentan las ventajas del uso de las TIC en el turismo, los buscadores y meta buscadores más comunes, destacando sus ventajas y desventajas. 

    .row.justify-content-center
      .col-lg-6
        a.anexo(:href="obtenerLink('downloads/Anexo_2.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/temas/tema1/icono-pdf.svg")
          .anexo__texto
            b Anexo 2.
            p #[b Tecnologías de la información y la comunicación]

    Separador

    .titulo-tercero
      h3 Plataformas

    .row.mt-5.justify-content-center
      .col-10  
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(width="180px" height="180px" src='@/assets/curso/temas/tema2/g2.svg', alt='') 
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Las plataformas en el sector del turismo, como en cualquier otro sector, son herramientas digitales creadas para mostrar portafolios de servicios o bases de datos, donde las personas pueden buscar y encontrar lo que necesitan en un solo lugar. Estas deben tener una oferta publicitaria para producir confianza al cliente, por lo general, se encuentran en páginas web y se deben incluir en aplicativos móviles como una manera estratégica, generando así más facilidad y preferencia en el momento de realizar una visita a la plataforma.

    Separador

    .titulo-tercero
      h3 Sistemas globales de reserva 

    .row.mt-5.justify-content-center
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.carimg(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/im2.svg')})`}"
          )          
          .bloque-texto-g__texto2.p-4
            p En la actualidad se manejan sistemas globales de reservas mediante #[i software] que utilizan por lo general las grandes empresas, estas cuentan con patentes o franquicias que cumplen con ciertos estándares de calidad a nivel global.

      br
    .row.mt-5.justify-content-center
      .col-10       
        p Los sistemas globales de reserva toman como base las plataformas digitales como herramienta a la hora de estandarizar productos o servicios, se puede decir que globalizan todos los sistemas de información turística y los imparten desde un sistema de distribución global, este puede generar una reserva desde cualquier parte del mundo desde un mismo aplicativo. Algunos de los sistemas globales de reserva más utilizados son:

    TabsC.color-acento-contenido
      .py-3.py-md-4(titulo="Amadeus")
        .row          
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/pes1.svg', alt='')
          .col-md-6.mb-4.mb-md-0
            h4 Amadeus

            ul.lista-ul
              li 
                i.fas.fa-check
                | Sistema global de reserva Amadeus

      .py-3.py-md-4(titulo="Sabre Holdings")
        .row          
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/pes2.svg', alt='')
          .col-md-6.mb-4.mb-md-0
            h4 Sabre Holdings

            ul.lista-ul
              li 
                i.fas.fa-check
                | Sistema global de reserva Sabre Holdings

      .py-3.py-md-4(titulo="Abacus")
        .row          
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/pes3.svg', alt='')
          .col-md-6.mb-4.mb-md-0
            h4 Abacus

            ul.lista-ul
              li 
                i.fas.fa-check
                | Sistema global de reserva Abacus

      .py-3.py-md-4(titulo="Travelsky")
        .row          
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/pes4.svg', alt='')
          .col-md-6.mb-4.mb-md-0
            h4 Travelsky

            ul.lista-ul
              li 
                i.fas.fa-check
                | Sistema global de reserva Travelsky

      .py-3.py-md-4(titulo="Travelsky")
        .row          
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/pes5.svg', alt='')
          .col-md-6.mb-4.mb-md-0
            h4 Travel Port

            ul.lista-ul
              li 
                i.fas.fa-check
                | Sistema global de reserva Travel Port

      .py-3.py-md-4(titulo="KIU Systems")
        .row          
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/pes6.svg', alt='')
          .col-md-6.mb-4.mb-md-0
            h4 KIU Systems

            ul.lista-ul
              li 
                i.fas.fa-check
                | Sistema global de reserva KIU Systems

      .py-3.py-md-4(titulo="TCA Inssist")
        .row          
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/pes7.svg', alt='')
          .col-md-6.mb-4.mb-md-0
            h4 TCA Inssist

            ul.lista-ul
              li 
                i.fas.fa-check
                | Sistema global de reserva TCA Inssist

      .py-3.py-md-4(titulo="SiteMinder")
        .row          
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/pes8.svg', alt='')
          .col-md-6.mb-4.mb-md-0
            h4 SiteMinder

            ul.lista-ul
              li 
                i.fas.fa-check
                | Sistema global de reserva SiteMinder

    Separador

    .titulo-tercero
      h3 Desarrollo de manuales de operación

    .row.mt-5.justify-content-center
      .col-10
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(width="180px" height="180px" src='@/assets/curso/temas/tema2/g3.svg', alt='') 
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Para realizar un manual de operaciones es necesario tener en cuenta que este es una herramienta reflejada en un documento físico o digital, el cual tiene un fin específico: dar a conocer el desarrollo de una empresa o de un proyecto, en él se agrupa información importante, se introduce de manera adecuada y ordenada, de modo que cualquier persona tenga la posibilidad de acceder a la información y el funcionamiento sobre la empresa o proyecto.

    .row 
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/g4.png', alt='') 
      .col-lg-8
        p Los puntos que se deben de tener en cuenta en el momento de elaborar un manual de operación son:

        h4 Manual de operaciones

        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--naranja")
          .row(titulo="Público objetivo")
            .col-md-6.mb-4.mb-md-0
              p Determinar el público objetivo al que será dirigido el manual de operaciones.
          
          div(titulo="Objetivos del manual")
            p Plantear los objetivos para los que se crea el manual, estos pueden ser objetivos generales y específicos si el diseñador lo desea.

          div(titulo="Glosario")
            p Definir un glosario donde se indique los conceptos con los que se trabajara en el manual, conceptos turísticos claves para la captación del tema.

          div(titulo="Contenido del manual")
            p Generar el contenido que se realizará en la actividad turística. Este contenido deberá incluir el paso a paso a seguir de lo que se desarrollará durante la actividad, es decir, qué pasará antes de la actividad y la preparación de la misma, qué debe pasar durante el desarrollo de la actividad y cómo culminará la actividad turística.
            | Es válido diseñar una tabla dinámica donde se caracterice los procesos y los procedimientos en un orden cronológico así.

            .row.mb-5
              .col-lg-4.mb-5
                .tabla-c.color-secundario.mb-5 
                  table
                    tr
                      th Actividades turísticas
                    tr
                      th Avistamiento de aves
                    tr
                      th Actividad número 2
              .col-lg-8.mb-5
                .tabla-c.color-secundario.mb-5 
                    table
                        tr
                          th Desarrollo de la actividad
                        tr
                          th 
                            ul.lista-ul
                              li 
                                i.fas.fa-check 
                                | Preparación de instrumentos de avistamiento (binoculares, cámara, ropa adecuada, repelente, etc.).
                            ul.lista-ul
                              li 
                                i.fas.fa-check
                                | Reconocer las aves de la región.
                            ul.lista-ul
                              li 
                                i.fas.fa-check
                                | Desplazamiento a zona boscosa.
                            ul.lista-ul
                              li 
                                i.fas.fa-check
                                | Identificar el sonido de las aves.
                            ul.lista-ul
                              li 
                                i.fas.fa-check
                                | Localizar aves para la toma de fotografías o interpretación ambiental.
                        tr
                          th Acciones y planteamientos seguir en la actividad 2

          div(titulo="Parámetros legales")
            p Generar parámetros legales, políticas o reglas que se deban cumplir tanto en la empresa como en las actividades turísticas.

          div(titulo="Conclusiones")
            p Concluir y reflexionar sobre la importancia de las actividades desarrolladas en el manual de operación.

    Separador

    .titulo-segundo.color-acento-contenido
      h3 Técnicas de consulta 

    p Las técnicas de consulta empleadas por las personas en la actualidad se derivan de búsquedas digitales y electrónicas mediante páginas web o las plataformas digitales anteriormente mencionadas, teniendo en cuenta lo que se desee buscar; generalmente hay diversas páginas de internet donde se pueden encontrar datos y referencias turísticas a nivel mundial. Para lo relacionado al turismo, se usan algunas técnicas de consulta que facilitan la búsqueda como, por ejemplo, la técnica IATA, que se muestra a continuación:

    .tarjeta.bgr-slider.fondo-tarjeta.p-4.mt-5
      SlyderA(tipo="b")
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Código IATA.

            p En el turismo existen técnicas y herramientas de comunicación que permiten desarrollar actividades de manera más simplificada y estandarizada de manera global como lo es el código IATA.
       
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/tar1.png', alt='')

        .row
          .col-md-7.mb-4.mb-md-0
            h4 Concepto Código IATA.

            p Los códigos IATA son palabras clave que traducen por lo general destinos específicos de viaje, en su mayoría de veces es una abreviatura de los nombres de las ciudades o países en los que se emplee, estos códigos son muy utilizados por aeropuertos, agencias de viajes y plataformas digitales que manejan reservas de viaje o transporte. 
       
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/tar2.png', alt='')

        .row
          .col-md-7.mb-4.mb-md-0
            h4 Características

            p Por lo regular los códigos se encuentran conformados por tres letras y en mayúscula que representa el nombre completo de una ciudad o país, adicional a esto la forma de leerlo va acompañada nombres característicos en cada letra deletreada, este código se elabora con el fin abreviar nombres y comunicarse de una manera más técnica a la hora de viajar entre prestadores de servicio. 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/tar3.png', alt='')

        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0
            h4 Ejemplos de Código IATA.
            
            .tarjeta.color-blanco.p-4
              .row.justify-content-center
                .col-md-10.mb-4.mb-md-0
                  .row
                    .col-md-6.p-2
                      figure
                        img(weight="200" height="200" src='@/assets/curso/temas/tema2/tar4-1.png', alt='')
                    .col-md-6.p-2
                      figure
                        img(weight="200" height="200" src='@/assets/curso/temas/tema2/tar4-2.png', alt='')


                  p #[i Ejemplo de códigos IATA]

</template>

<script>
export default {
  name: 'Tema2',
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
