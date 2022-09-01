import React from 'react';
import { Link } from 'react-router-dom';

const ContributorAgreementPage : React.SFC<any> = () => (
    <article>
        <section className='main-col'>
            <h1>Acuerdo de Colaboración</h1>

            <h2 className='h2'>Responsabilidades de los colaboradores</h2>
            
            <p>
            Pedimos a todos nuestros colaboradores que:
            </p>
            <ul>
                <li>
                Cumplir con nuestro Código de Conducta                </li>
                <li>
                No añadir nunca, a sabiendas, datos que procedan de una fuente restringida, protegida por derechos de autor, maliciosa o ilegal                </li>
                <li>
                Ayúdanos a crear una plataforma de datos abiertos que apoye el desarrollo de ciudades sostenibles, resilientes, inclusivas, equitativas y que fomente el uso de los datos para el bien público                </li>
                <li>
                Añadir fuentes siempre que sea posible, para beneficiar a otros                </li>
                <li>
                Añadir fuentes siempre que sea posible, para beneficiar a otros                </li>
                <li>
                Garantizar el pleno cumplimiento de las condiciones de las licencias abiertas en lo que respecta a nuestros datos abiertos y a nuestro código abierto
                </li>
                <li>
                Groporcionarnos la menor cantidad de datos personales posible                </li>
                <li>
                Asumir la plena responsabilidad de evaluar la fiabilidad de los datos de Colouring London y su idoneidad para cualquier uso previsto (véase también nuestro "Acuerdo de exactitud de los datos")                </li>
                <li>
                Proporcionar información sobre problemas reales o potenciales de privacidad y seguridad                </li>
            </ul>

            <h2 className='h2'>Notas adicionales para los contribuyentes</h2>

            <h3 className='h3'>Datos abiertos</h3>
            <p>
            Colouring London es un proyecto de datos abiertos. Los datos abiertos están licenciados bajo la licencia Open Data Commons Open Database License (<a href="https://opendatacommons.org/licenses/odbl/">https://opendatacommons.org/licenses/odbl/</a>) por los colaboradores de Colouring London. En virtud de esta licencia, usted es libre de copiar, distribuir, transmitir y adaptar nuestros datos, siempre que dé crédito a Colouring London y a nuestros colaboradores. Si modifica nuestros datos o los amplía, sólo podrá distribuir el resultado bajo la misma licencia. El código de nuestra plataforma abierta está disponible bajo la licencia pública general GNU (<a href="https://www.gnu.org/licenses/gpl-3.0.en.html">https://www.gnu.org/licenses/gpl-3.0.en.html</a>).
            </p>

            <h3 className='h3'>A qué contribuye usted</h3>
            
            <p>
            Colouring London es una plataforma gratuita de intercambio de conocimientos y una base de datos abierta diseñada para uso público. Se ha creado para apoyar un enfoque de toda la sociedad para mejorar la sostenibilidad, la resiliencia y la inclusión de las ciudades. Colouring London es también la plataforma prototipo del programa internacional Colouring Cities Research Programme (CCRP) que se lleva a cabo en el instituto Alan Turing . Su diseño se rige por los principios establecidos en la Nueva Agenda Urbana de las Naciones Unidas, la Carta de Datos Abiertos, el Reglamento General de Protección de Datos (RGPD), los Principios Gemini, las recomendaciones del Instituto de Datos Abiertos sobre datos personales e infraestructura de datos, y artículos específicos de la Declaración de los Derechos Humanos. Estos temas se tratan en nuestra <a href="https://github.com/colouring-london/colouring-london/issues/687">'Etica de datos'</a> donde también utilizamos el lienzo de ética de datos del Instituto de Datos Abiertos para responder a preguntas sobre cómo utilizamos y gestionamos nuestros datos. Capturamos estadísticas espaciales y no recogemos texto ni imágenes, aunque es posible que las imágenes se integren en el futuro. El tipo de datos espaciales que recopilamos puede verse haciendo clic en cada categoría de datos, en los botones de "Información" y en la página "Categorías de datos de construcción". También estamos planeando una "sección de escaparate" para que los usuarios de la plataforma puedan compartir y ver cómo se utilizan los datos de Colouring Bogotá.
            </p>

            <h3 className='h3'>Diversidad e inclusión</h3>

            <p>
            Estamos muy agradecidos por todas las aportaciones constructivas de nuestros colaboradores. Nuestra plataforma está pensada para todos, y trabajamos para que sea lo más inclusiva, acogedora y accesible posible. Respetamos y buscamos activamente la diversidad de colaboradores y audiencias, y celebramos la diversidad de conocimientos. Utilizamos el color, el colaboración inclusiva y el lenguaje no técnico para reducir las barreras a la contribución de información estadística y para que el proceso sea gratificante e interesante. La diversidad de edad, género, habilidades y capacidades, y antecedentes culturales es también esencial para permitirnos, como comunidades, hacer de nuestras ciudades y pueblos lugares más inclusivos, equitativos, sostenibles y resilientes. Nuestros conocimientos colectivos sobre la composición, el comportamiento dinámico y el rendimiento energético de nuestros edificios, así como sobre el funcionamiento de los mismos, son fundamentales para fundamentar las políticas sobre los edificios que debemos reutilizar, demoler y construir de nuevo, para acelerar la readaptación y para comprender mejor los edificios como sistemas dinámicos, de modo que puedan mejorarse.            </p>

            <h3 className='h3'>Derechos de autor, exactitud y calidad de los datos</h3>
            
            <p>
            No podemos aceptar datos procedentes de fuentes protegidas por derechos de autor o restringidas, salvo las cubiertas por el uso justo, ni de fuentes ilegales, y pedimos a los colaboradores que comprueben cuidadosamente las fuentes antes de cargarlas. Tampoco podemos responsabilizarnos de la calidad de los conjuntos de datos, ya que no es posible comprobar cada entrada de datos, y porque los distintos usuarios necesitarán diferentes grados de exactitud y precisión, dependiendo del uso que hagan de los datos (por ejemplo, un proyecto escolar o un artículo científico). No obstante, nuestro objetivo es que los datos sean lo más fiables y útiles posible. Por ello, pedimos a los colaboradores que incluyan las fuentes y verifiquen las entradas de otros datos siempre que sea posible.            </p>

            <p>
            Para obtener información sobre la privacidad y la seguridad de los datos, consulte nuestra página de privacidad y seguridad.            </p>


            <div className="buttons-container">
                <Link to="sign-up.html" className="btn btn-outline-dark">Volver al registro</Link>
            </div>
        </section>
    </article>
);

export default ContributorAgreementPage;
