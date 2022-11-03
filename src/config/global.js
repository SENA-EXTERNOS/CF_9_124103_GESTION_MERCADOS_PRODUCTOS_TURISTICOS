export default {
  global: {
    componenteFormativo: 'Tipos de productos turísticos',
    descripcionCurso:
      'Muestra tipos de producto turísticos mediante recolección de información de interés, teniendo en cuenta los servicios turísticos prestados, para la perfilación del viajero considerando protocolos de servicio y técnicas de clasificación y comunicación para la gestión turística.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal1.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal1.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/avion.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Servicios de viaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Características',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Modalidades de viaje',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Diseño de portafolio',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Condiciones y políticas de reserva',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tecnologías de la información y la comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Motores de búsqueda',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Plataformas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Sistemas globales de reserva',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Desarrollo de manuales de operación',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Técnicas de consulta',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Producto turístico según destino',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Características',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Tipo de productos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Componentes',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo:
              'Productos turísticos según destino (nacional e internacional)',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Servicios turísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Caracterización de servicios turísticos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Calidad del servicio',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Geografía turística',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Ubicación de destinos turísticos',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Componentes de destino turísticos',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Atractivos turísticos',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Perfil del viajero',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Patrimonio cultural',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Técnicas de interpretación del patrimonio',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Características',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Historia',
            hash: 't_6_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.4',
            titulo: 'Tipos de territorio',
            hash: 't_6_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Servicios de viaje ',
      referencia:
        'Paniza Fullana, Antonia(2017) Viajes combinados y servicios de viaje vinculados: replanteamiento de conceptos y sus consecuencias sobre la responsabilidad.torrossa https://www.torrossa.com/it/resources/an/4291823',
      tipo: 'Libro digital',
      link: 'https://www.torrossa.com/it/resources/an/4291823',
    },
    {
      tema: '2.4 Desarrollo de manuales de operación',
      referencia:
        'Fundación para la Conservación y el Desarrollo Sostenible (2021) Manual de operación turística para el avistamiento de aves      https://fcds.org.co/wp-content/uploads/2021/02/manual-operacion-turismo.pdf',
      tipo: 'Manual',
      link:
        'https://fcds.org.co/wp-content/uploads/2021/02/manual-operacion-turismo.pdf',
    },
    {
      tema: '3. Producto turístico según destino',
      referencia:
        'Humberto Rivas, Académico de la Universidad San Sebastián (diciembre 2016) Elementos para la gestión de Destinos Turísticos https://www.sernatur.cl/wp-content/uploads/2018/11/Manual-de-Destinos-Elementos-para-la-gestio%CC%81n-de-destinos-turisticos-1.pdf',
      tipo: 'Manual',
      link:
        'https://www.sernatur.cl/wp-content/uploads/2018/11/Manual-de-Destinos-Elementos-para-la-gestio%CC%81n-de-destinos-turisticos-1.pdf',
    },
    {
      tema: '5.Geografía turística',
      referencia:
        'Olariaga, O. D., & Carvajal, A. F. (2016). Efectos de la liberalización en la geografía del transporte aéreo en Colombia. Cuadernos geográficos de la Universidad de Granada https://dialnet.unirioja.es/servlet/articulo?codigo=5767230',
      tipo: 'Artículo',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=5767230',
    },
  ],
  glosario: [
    {
      termino: 'Accesibilidad',
      significado:
        'Posibilidad que tiene una persona de ingresar a un lugar o de adquirir ciertas cosas.',
    },
    {
      termino: 'Atractivo ',
      significado:
        'Conjunto de elementos que tiene o incorpora un lugar o cosa para llamar la atención de un visitante.',
    },
    {
      termino: 'Destino',
      significado:
        'Lugar en específico con características diferenciadoras con relación a otros lugares.',
    },
    {
      termino: 'Geografía',
      significado:
        'Conjunto de atributos que puede llegar a tener cosa o un recurso.',
    },
    {
      termino: 'Mercadeo',
      significado:
        'Es el conjunto de acción y operaciones que se tienen en cuenta para la venta de un producto o servicio.',
    },
    {
      termino: 'Modalidad',
      significado:
        'Características o forma diferenciadora de realizar una acción o cosa.',
    },
    {
      termino: 'Producto',
      significado:
        'Conjunto de atributos que puede llegar a tener cosa o un recurso.',
    },
    {
      termino: 'Tarifas',
      significado:
        'Son los valores y precios fijados de un producto o servicio.',
    },
    {
      termino: 'Tecnología',
      significado:
        'Conjunto de herramientas innovadoras desarrolladas con el fin de suplir una necesidad.',
    },
    {
      termino: 'Turismo',
      significado:
        'Actividad relacionada con viajar y conocer lugares nuevos dependiendo la necesidad. ',
    },
  ],
  referencias: [
    {
      referencia: 'UNESCO. Patrimonio cultural.',
      link: 'https://es.unesco.org/fieldoffice/santiago/cultura/patrimonio',
    },
    {
      referencia:
        'Fundación para la Conservación y el Desarrollo Sostenible (2021) Manual de operación turística para el avistamiento de aves',
      link:
        'https://fcds.org.co/wp-content/uploads/2021/02/manual-operacion-turismo.pdf',
    },
    {
      referencia:
        'Meza, E. C. J. (2016). Un enfoque a la importancia del turismo. Turismo y patrimonio, (10), 133-136',
      link:
        'http://ojs.revistaturismoypatrimonio.com/index.php/typ/article/view/17/10',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
