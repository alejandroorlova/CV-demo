import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'cv';
  jobs: any[] = [];
  projects: any[] = [];

  constructor() {

  }

  ngOnInit(): void {
    this.jobs = [
      {
        'year': '2022',
        'company': 'NAAT – Ciudad de México',
        'position': 'Líder de proyecto',
        'activities': 'Realizar propuestas de solución a necesidades de los clientes, colaboración en sesiones de análisis para la definición y diseño de soluciones para los clientes. Gestionar y coordinar a todos los involucrados en los diferentes proyectos.'
      },
      {
        'year': '2019',
        'company': 'NAAT – Ciudad de México',
        'position': 'Desarrollador Angular / IONIC',
        'activities': 'Desarrollo de aplicaciones web e hibridas de acuerdo con las especificaciones del proyecto, realizando proyectos para empresas del sector financiero.'
      },
      {
        'year': '2019',
        'company': 'MAYECAWA - Morelos',
        'position': 'Desarrollador',
        'activities': 'Trabajo independiente donde se desarrollaron dos aplicaciones móviles (Android, IOS)'
      },
      {
        'year': '2018',
        'company': 'VIFINSA - Mérida',
        'position': 'Desarrollador',
        'activities': 'Trabajo independiente donde se desarrolló aplicativo de escritorio para la impresión automática de láminas, aplicación móvil (Android) de trazabilidad de las láminas impresas y diseño de código QR de doble capa, así como el aplicativo de reconocimiento del mismo.'
      },
      {
        'year': '2017',
        'company': 'Sindicato Nacional de Trabajadores de la Educación (SNTE) - CDMX',
        'position': 'Desarrollador – Área de nómina',
        'activities': 'Analizar los procesos administrativos y desarrollar sistemas con la finalidad de automatizarlos.'
      },
      {
        'year': '2019',
        'company': 'Instituto de la Educación Básica del Estado de Morelos (IEBEM) - Morelos',
        'position': 'Jefe de Departamento – Área de Sistemas',
        'activities': 'Automatizar el proceso de cálculo de la nómina y coordinar a desarrolladores para la entrega de nuevos sistemas administrativos. '
      }
    ];

    this.projects = [
      {
        'company': '(NAAT - Líder proyecto)',
        'description': 'Gestionar todo lo necesario para llevar un proyecto desde cero hasta llevarlo a producción, coordinar al equipo de desarrollo, así como coordinar con las distintas áreas de la empresa en caso de haber dependencia con el proyecto, llevando proyectos con clientes del sector financiero como lo son (Santander, Covalto, Crédito Fácil, GFI Apoyo, por mencionar algunos)'
      },
      {
        'company': '(NAAT - Desarrollador – American Express)',
        'description': 'Desarrollo de distintos sistemas web que permiten la contratación en línea de servicios financieros y tener un seguimiento de cada una de las solicitudes ingresadas al sistema.'
      },
      {
        'company': '(NAAT - Desarrollador – Prudential',
        'description': 'Desarrollo de PWA para el levantamiento de información para la contratación de seguros con funcionalidad online y offline.'
      },
      {
        'company': '(NAAT - Desarrollador – FINAMEX)',
        'description': 'Desarrollo de aplicación hibrida para la contratación de servicios financieros mediante app y la compra de distintos servicios financieros.'
      },
      {
        'company': '(MAYEKAWA)',
        'description': 'Desarrollo de aplicación hibrida para llevar un control sobre los servicios a realizar en equipos de refrigeración de sus diferentes clientes con la finalidad de tener un control completo de cuando toca realizar el servicio correspondiente y recabar la evidencia necesaria para realizar los reportes necesarios. La aplicación podía trabajar en mono online u offline a fin de garantizar la disponibilidad de la información sin depender de una conexión a internet.'
      },
      {
        'company': '(VIFINSA) ',
        'description': 'Diseño de código QR de doble capa “Código QR alterado con la finalidad de que al leerlo con un lector común y corriente da cierta información, pero al leerlo con una aplicación especifica regresa otro tipo de información” y de igual manera el desarrollo de la aplicación que da lectura a dicho código QR.'
      },
      {
        'company': '(VIFINSA) ',
        'description': 'Desarrollo de aplicación hibrida para darle seguimientos a los productos impresos y conocer el estatus de cada uno de ellos.'
      },
      {
        'company': '(VIFINSA) ',
        'description': 'Desarrollo de aplicación de escritorio para la impresión en una impresora especializada, en donde se realizó investigación para entender el protocolo de comunicación con la impresora y de esta manera poder enviar a imprimir de manera dinámica mediante el sistema.'
      },
      {
        'company': '(SNTE)',
        'description': 'Sistema para la gestión de actividades de personal sindicalizado a nivel nacional.'
      },
      {
        'company': '(IEBEM) ',
        'description': 'Automatización de cálculo de nómina para los profesores del estado de Morelos, evitando reclamos por errores de cálculos en prestaciones de los mismos. '
      },
      {
        'company': '(SNTE)',
        'description': 'Desarrollo de sistema de nómina para pago de prestaciones “Conceptos adicionales al salario ordinario”, para profesores a nivel nacional. '
      },
      {
        'company': '(IEBEM) ',
        'description': 'Organización de equipos de desarrollo con la finalidad de automatizar los procesos de las diferentes áreas del instituto mediante Sistemas Informáticos.'
      }
    ];
  }

}
