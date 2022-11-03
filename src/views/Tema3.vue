<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Producto turístico según destino 

    .row 
      .col-lg-5
        .cajon.color-acento-contenido.p-4.mb-4
          p Sabiendo que los productos turísticos son el conjunto de atractivos turísticos, servicios y actividades turísticos, se puede desarrollar un énfasis según el destino en el que se vaya a trabajar, en donde es importante destacar que cada uno de estos ítems conforman un producto de manera tangible e intangible, que se pueden evidenciar según las características del atractivo. 

        p  Cada destino agrupa diferentes elementos y particularidades que llaman la atención del turista a la hora de realizar la visita a un lugar, las particulares de un lugar pueden ser tradiciones culturales, arquitectura histórica, gastronomía, entre otros.
      .col-lg-7
        figure
          img(src='@/assets/curso/temas/tema3/g1.png', alt='')

    br

    b #[i Ejemplos de particularidades turísticas de Colombia]

    .row.mt-5.justify-content-center
      .col-lg-8
        figure
            img(src='@/assets/curso/temas/tema3/g2.png', alt='')

    Separador

    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1  Características

    .row.mt-5.justify-content-center
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.carimg(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/g3.svg')})`}"
          )
          
          .bloque-texto-g__texto2.p-4
            p En el momento en que se habla de las características principales de un producto turístico vale la pena resaltar que están ligadas a la percepción del turista o visitante. Adicionalmente, influye la actividad económica del lugar donde se realiza la visita, depende de los tipos de turismo que se pueden realizar allí, asimismo de las motivaciones que incitan al visitante desplazarse hacia un lugar y los segmentos de mercado que allí se manejan.

    br

    p Según su tangibilidad, las características de un producto turístico son: 

    .row.mt-5.justify-content-center
      .col-lg-8
        figure
            img(src='@/assets/curso/temas/tema3/g4.svg', alt='')

    Separador

    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2  Tipo de productos 

    .row
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema3/paisaje.svg', alt='')
      .col-lg-10
        p Los tipos de productos turísticos se encuentran totalmente ligados a las actividades económicas del destino donde se ubican, los cuales enfatizan sus cualidades principales demostrando su identidad cultural, sus bienes patrimoniales y naturales, simplificándolos en las tipologías de turismo que existen.

        |Teniendo en cuenta las diferentes tipologías de turismo se puede generar productos turísticos, según el destino y la necesidad del visitante. Estos se pueden personalizar dependiendo las actividades y servicios.

    br

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/tar1.svg' alt='')
          .tarjeta.fondo-tarjeta2
            .p-4
              h2.text-center Turismo litoral
              p También llamada turismo de sol y playa, se da en la zona costera con climas cálidos.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/tar2.svg' alt='')
          .tarjeta.fondo-tarjeta2
            .p-4
              h2.text-center Turismo de negocios
              p Se refiere a los viajes con fines corporativos o laborales.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/tar3.svg' alt='')
          .tarjeta.fondo-tarjeta2
            .p-4
              h2.text-center Turismo de naturaleza
              p Se refiere a los viajes con fines de realizar actividades turísticas con contacto directo con la naturaleza.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/tar4.svg' alt='')
          .tarjeta.fondo-tarjeta2
            .p-4
              h2.text-center Turismo de salud
              p Se refiere a los viajes con fines de recibir servicios de salud en regiones diferentes a la que reside.

    Separador

    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3  Componentes 

    .row.mt-5.justify-content-center
      .col-10
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(width="180px" height="180px" src='@/assets/curso/temas/tema3/palmera.svg', alt='') 
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p En el momento en el que se habla de un componente turístico se indica que es un elemento fundamental de la estructura formativa del producto turístico. Estos se encuentran diseñados para satisfacer las necesidades de los visitantes, dependiendo de su disposición.

    p Los componentes que integran un producto turístico precisan del autor que lo genera, algunos de los componentes más utilizados son:

    .row.mt-5.justify-content-center
      .col-lg-6
        LineaTiempoD.color-acento-botones.mb-5
          .row(numero="1" titulo="Destino")
            .col-md-8.mb-4.mb-md-0
              p.text-small Definir el lugar con el que se realizará el producto turístico. 
          
          .row(numero="2" titulo="Recursos")
            .col-md-8.mb-4.mb-md-0
              p.text-small Identificar los recursos culturales y naturales del destino. 

          .row(numero="3" titulo="Accesibilidad")
            .col-md-8.mb-4.mb-md-0
              p.text-small Tener puntos de referencia que faciliten el ingreso al destino y a los recursos.

          .row(numero="4" titulo="Servicios")
            .col-md-8.mb-4.mb-md-0
              p.text-small Identificar los diferentes prestadores relacionados con el sector turístico (alojamiento, alimentación, transporte y guianza).

          .row(numero="5" titulo="Actividades")
            .col-md-8.mb-4.mb-md-0
              p.text-small Definir las dinámicas que se realizarán en el atractivo.

          .row(numero="6" titulo="Atractivo")
            .col-md-8.mb-4.mb-md-0
              p.text-small Definir las dinámicas que se realizarán en los recursos.

          .row(numero="7" titulo="Equipamiento")
            .col-md-8.mb-4.mb-md-0
              p.text-small Verificar las herramientas necesarias para la ejecución de las actividades propuestas. 

          .row(numero="8" titulo="Tarifas")
            .col-md-8.mb-4.mb-md-0
              p.text-small Definir los costos y los presupuestos del producto turístico.

          .row(numero="9" titulo="Mercadeo")
            .col-md-8.mb-4.mb-md-0
              p.text-small Generar material publicitario del producto turístico.
      
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/g5.png', alt='')

    Separador

    #t_3_4.titulo-segundo.color-acento-contenido
      h2 3.4  Productos turísticos según destino (nacional e internacional) 

    .row.mt-5.justify-content-center
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema3/maletacam.svg', alt='')
      .col-lg-8
        p El destino es un componente fundamental de los productos turísticos, en el cual se establecen características diferenciadoras que dependen del lugar donde se ejecute. Estas características dependen de un entorno cultural el cual va ligado a costumbres, tradiciones e identidad, generando puntos de interés a nivel nacional o internacional.

        .cajon.color-acento-contenido.p-4.mb-4
          p Dentro de los productos turísticos por destino se pueden encontrar dos clases de turistas:

    .row.mt-5.justify-content-center
      .col-lg-10
        b Productos turísticos según destino (nacional e internacional)
        
        br
    
    .row.mt-5.justify-content-center
      .col-lg-8
        .tarjeta--container
          .row.justify-content-center.tarjeta1.mb.p-5
            .col-lg-2
              figure              
                img(width="80" height="80" src="@/assets/curso/temas/tema3/edificios.svg", alt="" )
            .col-lg-10
              h4 Turista nacional: 

              p Es aquel que visita lugares de su país de residencia, aunque distintos a su región y que busca productos turísticos internos, beneficiando así la economía y el empleo de su propio país. Por otro lado, se encuentra el visitante que es aquél que permanece en su región pero que visita los atractivos de esta.

          .row.justify-content-center.tarjeta2.mb.p-5
            .col-lg-2
              figure              
                img(width="80" height="80" src="@/assets/curso/temas/tema3/globo.svg", alt="" )
            .col-lg-10
              h4 Turista internacional: 

              p Es aquel que no reside en el país que visita, pero genera un incremento económico en el destino beneficiando la comunidad local durante su estadía, generando la pérdida de economía e identidad cultural en el país de residencia.  

      .col-lg-2
        figure
          img(height="500" src='@/assets/curso/temas/tema3/pj.svg', alt='')
          
</template>

<script>
export default {
  name: 'Tema3',
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
