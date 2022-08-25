import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { i18nextPlugin } from 'translation-check'
import { t } from 'i18next';



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
      "Street Context":"Paisaje Urbano",
      "Team":"Constructor",
      "Planning":"Planificación",
      "Sustainability":"Sustentabilidad",
      "Dynamics":"Mutaciones",
      "Community":"Comunidad",
      "Select a building to view data":"Seleccione un edificio para ver los datos",
      "Click a building to edit" : "Haga clic en un edificio para editar",
      "Can you share your opinion on how well the building works?":"¿Puede compartir su opinión sobre el funcionamiento del edificio?",
      "Do you like this building and think it contributes to the city?": "¿Le gusta este edificio y cree que contribuye a la ciudad?",
      "Can you help add information on community use of buildings?": "¿Puede ayudar a añadir información sobre el uso comunitario de los edificios?",
      "This is what we're planning to collect on the building's context": "Esto es lo que pensamos recoger sobre el contexto del edificio",
      'Gardens': "Jardines",
      'Trees':'Arboles',
      'Green walls':'Muros verdes',
      'Green roof':'Techo verde',
      'Proximity to parks and open greenspace':'Proximidad a parques y espacios verdes abiertos',
      'Building shading':'Sombra del edificio',
      'We are testing a new feature in this section! Switch between different colour maps by using the dropdown in the legend pane.': '¡Estamos probando una nueva función en esta sección! Cambia entre diferentes mapas de colores utilizando el desplegable del panel de la leyenda.',
      'Do you think this type of building is generally worth keeping?':'¿Cree que en general merece la pena mantener este tipo de edificios?',
      'Why is this type of building worth keeping?':'¿Por qué merece la pena conservar este tipo de edificios?',
      'Do you think this building should be recorded as a local heritage asset?': '¿Cree usted que este edificio debería ser registrado como un bien del patrimonio local?',
      'Do you expect this site to be affected by a planning application in the near future?':'¿Espera que este lugar se vea afectado por una solicitud de planificación en un futuro próximo?',
      'Are activities open to the community currently taking place in the building?':'¿Se realizan actualmente actividades abiertas a la comunidad en el edificio?',
      'Has this ever been used for community activities in the past?':'¿Se ha utilizado alguna vez para actividades comunitarias en el pasado?',
      'Has the building always been used for community activities?':'¿Se ha utilizado siempre el edificio para actividades comunitarias?'

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