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
      "Start Colouring Here!":"¡Empieza a colorear tu ciudad!",
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


      
      "Floor area": "Superficie del suelo",
      "Storeys": "Pisos",
      "Height": "Altura",
      "Total opening area": "Area total de bienvenida",
      "Core storeys":"Plantas Principales",
      "How many storeys between the pavement and start of roof?":"¿Cuántos pisos hay entre el suelo y el inicio del techo?",
      "Attic storeys":"Áticos",
      "How many storeys above start of roof?":"¿Cuántos pisos de áticos hay sobre el inicio del techo?",
      "Basement storeys":"Sotanos",
      "How many storeys below pavement level?":"¿Cuántos pisos de sotano hay por debajo del nivel del pavimento?",
      "Height to apex (m)":"Altura al techo (m)",
      "Height to eaves (m)":"Altura al alero (m)",
      "Ground floor area (m²)":"Superficie de la planta baja (m²)",
      "Total floor area (m²)":"Superficie total del suelo (m²)",
      "Frontage Width (m)":"Ancho de fachada(m)",
      "View Maps": "Ver mapas",

      "Edit Maps":"Editar mapas",
      "Download data":"Descargar datos",
      "View Data Showcase":"Ver escaparate de datos",
      "Coming soon":"Proximamente",
      "About":"Sobre",
      "Data Categories":"Categorías de datos",
      "Who's Involved?":"¿Quiénes participan?",
      "Data Ethics":"Ética de los datos",
      "Colouring Cities Research Programme":"Programa de investigación Colouring Cities",
      "Top Contributors":"Principales contribuyentes",
      "Discussion Forum":"Foro de discusión",
      "Blog":"Blog",
      "Privacy Policy":"Política de privacidad",
      "Contributor Agreement":"Acuerdo de colaboración",
      "Code of Conduct":"Código de conducta",
      "Data Accuracy Agreement":"Acuerdo sobre la exactitud de los datos",
      "Ordnance Survey terms of UPRN usage":"Términos de uso de la UPRN de Estudio de Ordenación",
      "Contact":"Contacto",
      "Log in":"Iniciar sesión",
      "Sign up":"Registrarse",
      "Access open code":"Acceso al código abierto",

      "Select a building to view data":"Seleccione un edificio para ver los datos",
      "Confirm that the current value is correct":"Confirmar que el valor actual es correcto",
      "Edit data":"Editar datos",
      "Welcome to Colouring London. You're one of the first people to use the site!  ": "Bienvenido a Colouring London. ¡Eres una de las primeras personas en utilizar el sitio! ",
      "Usernames can contain only letters, numbers and the underscore":"Los nombres de usuario sólo pueden contener letras, números y guión bajo",
      "someone@example.com":"alguien@ejemplo.com",
      "Please note that if you forget your password, you will only be able to recover your account if you provide an email address.":"Tenga en cuenta que si olvida su contraseña, sólo podrá recuperar su cuenta si proporciona una dirección de correo electrónico.",
      "Confirm account deletion":"Confirmar la eliminación de la cuenta",
      "Are you sure you want to delete your account? This cannot be undone.":"¿Estás seguro de que quieres eliminar tu cuenta? Esto no se puede deshacer",
      "Delete account":"Eliminar cuenta",
      "Welcome to Colouring London. You're one of the first people to sign up!  ": "Bienvenido a Colouring London. ¡Eres una de las primeras personas en registrarse!  "

      




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