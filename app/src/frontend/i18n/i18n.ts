import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { i18nextPlugin } from 'translation-check'



// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Welcome to Colouring London!": "Welcome to Colouring London!",
      "Welcome First Paragraph":"Colouring London is a free knowledge exchange platform designed to provide over fifty types of open data on London buildings, to help make the city more sustainable.",
      "Welcome Second Paragraph":"Colouring London is also the prototype for the Colouring Cities Research programme based at the Alan Turing Institute (the UK's national Institute for data science and artificial intelligence). The programme works with local, regional, national and international partners to develop open platform code also of relevance to other cities.",
      "Welcome Third Paragraph":"New datasets and features are added all the time. Any help you can give, colouring-in our building maps, and enriching and verifying our open datasets is very much appreciated.",
      "welcome_fourth_paragraph": 'All our <1>data</1> and <3>code</3> are free to download, use and share under our open licence terms.',
      "Start Colouring Here!":"Start Colouring Here!"
    }
  },
  es: {
    translation: {
      "Welcome to Colouring London!": "Bienvenido a Colouring Cities!",
      "Welcome First Paragraph":"Colouring Cities es una plataforma gratuita de intercambio de conocimientos diseñada para ofrecer más de cincuenta tipos de datos abiertos sobre los edificios alrededor del mundo, con el fin de contribuir a que las ciudades sean más sostenibles.",
      "Welcome Second Paragraph":"Colouring Cities es también un programa de investigación, con sede en el Instituto Alan Turing (el instituto nacional del Reino Unido para la ciencia de los datos y la inteligencia artificial). El programa trabaja con socios locales, regionales, nacionales e internacionales para desarrollar un código de plataforma abierta que también sea relevante para otras ciudades.",
      "Welcome Third Paragraph":"Continuamente se añaden nuevos conjuntos de datos y características. Cualquier ayuda que pueda prestar, coloreando nuestros mapas de edificios y enriqueciendo y verificando nuestros conjuntos de datos abiertos, será muy apreciada.",
      "welcome_fourth_paragraph": 'Todos nuestros <1>datos</1> y <3>código</3> pueden descargarse, utilizarse y compartirse libremente con arreglo a las condiciones de nuestra licencia abierta.',
      "Start Colouring Here!":"Empieza a colorear tu ciudad!",
      "Age":"Edad",
      "Location":"Localización",
      "Land Use":"Uso",
      "Type":"Tipo",
      "Size":"Tamaño",
      "Construction":"Construcción",
      "Street Context":"Contexto",
      "Team":"Constructor",
      "Planning":"Planificación",
      "Sustainability":"Sustentabilidad",
      "Dynamics":"Mutaciones",
      "Community":"Comunidad",
      "Select a building to view data": "Click en un edificio para ver detalles",
      "Building number": "numero del edificio",
      "93% of properties in UK are dwellings so we have set this as the default colour. Can you help us colour-in all non-residential and mixed use buildings, and verify residential buildings too?": "Se ha establecido el color amarillo como predeterminado. ¿Puede ayudarnos a colorear todos los edificios no residenciales y de uso mixto, y verificar también los edificios residenciales?",
      "Planning Status":"Estado de la planificación",
      "Is a planning application live for this site?":"¿Existe una solicitud de planificación para este lugar?",
      "Is the building proposed for demolition?":"¿se propone la demolición del edificio?",
      "Has this application recently been been approved/refused?": "¿Esta solicitud ha sido aprobada/rechazada recientemente?",
      "Has the work been carried out?":"¿Se han realizado las obras?",
      "For historical planning applications see Planning Portal link": "Para ver el historial de solicitudes de planificación, consulte el enlace del Portal de Planificación",
      "Designation and Protection": "Designación y protección",
      "In a conservation area?": "¿En una zona protegida?",
      "Conservation area name": "Nombre de la zona de conservación",
      "Is it listed on the National Heritage List for England?": "¿Está incluido en la Lista del Patrimonio Nacional de Colombia",
      "NHLE list entry link": "Enlace de entrada a la lista ...",
      "National Heritage List for England list id": "Lista del Patrimonio Nacional de Colombia",
      "Historic area assessment link": "Enlace a la evaluación de la zona histórica",
      "Within a historic area assessment?": "¿Dentro de una evaluación de la zona histórica?",
      "Local list link": "Enlace a la lista local",
      "Is locally listed?":"¿Está en la lista local?",
      "Architectural Priority Area tier":"Nivel del área de prioridad arquitectónica",
      "Architectural Priority Area name": "Nombre del área de prioridad arquitectónica",
      "In an Architectural Priority Area?": "¿En una zona de prioridad arquitectónica?",
      "Greater London Historic Environment Record link":"Enlace al Registro de Bogota",
      "In the Greater London Historic Environment Record?":"¿En el Registro de Bogota?",
      "World heritage list id":"Identificación de la lista del patrimonio mundial",
      "Heritage at risk list id": "Identificación de la lista de patrimonio en riesgo",
      "Listing grade":"Grado de la lista",
      "National Heritage List for England list type":"Lista del Patrimonio Nacional de Colombia",
      "Can you help us capture information on who built the currentbuilding?":'Puedes ayudarnos a recolectar informacion de quien construyo el edificio seleccionado?',                                        
      "Landowner(s) at time of construction":'Propietarios al momento de la construcción',
      "Year built (best estimate)":'Año de la construccion(mejor estimado)',
      "Is there an extension?":'Hay una extension?',
      "What type of developer built the building?":'¿Qué tipo de Desarrollador construyó el edificio?',
      "Who were the developer(s)?":'¿Quienes fueron los Desarrolladores?',
      "Source links for landowner(s)":'Enlace fuente acerca de los propietarios',
      "Source links for developer(s)":'Enlace fuente de los Desarrolladores',
      "Who were the main designer(s)?":'¿Quienes fueron los principales diseñadores?',
      "Source links for designer(s)":'Enlace fuente acerca de los diseñadores',
      "Which best describes the lead designer?":'¿Que describe mejor al diseñador principal?',
      "Did the design team win any awards for this building?":'¿Gano el equipo de diseño algun premio por el edificio?',
      "Source links for designer award(s)":'Enlace fuente de los premios de los diseñadores',
      "Name of builder/ construction team":'Nombre del equipo de construcción',
      "Source builder/ construction team":'Fuentes acerca de la constructora/equipo de construccion',
      "Other significant members of the team":'Otros miembros relevantes del equipo',
      "Source other significant team members":'Fuentes acerca de los otros miembros relevantes del equipo'

    }   
  }
};


if (typeof window !== "undefined") {
  i18n.use(i18nextPlugin)
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "es", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;