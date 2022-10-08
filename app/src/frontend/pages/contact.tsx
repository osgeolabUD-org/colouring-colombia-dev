import React from 'react';


const ContactPage = () => (
    <article>
        <section className="main-col">
            <h1 className="h2">
                Contacto
            </h1>
            <p> Colouring Bogotá ha sido diseñado como un modelo sostenible y de bajo coste para el intercambio de conocimientos/plataformas de datos abiertos, capaz de ser reproducido por otras ciudades utilizando el código de nuestra plataforma abierta.</p>

            <p> Está siendo desarrollado por un pequeño y dedicado equipo de la Universidad Distrital Francisco José de Caldas. No podemos responder a consultas individuales, pero agradecemos los comentarios constructivos sobre cómo mejorar el sitio, y sobre otros tipos de datos y nuevas características que le gustaría ver.</p>

            <p> Puedes enviarnos comentarios o hacer preguntas en nuestros hilos de discusión en <a href="https://discuss.colouring.london/">https://discuss.colouring.london/</a>.</p>

            <p> Para ver nuestro sitio técnico y el código de la plataforma, visite Github en: <a href="https://github.com/osgeolabUD-org/colouring-colombia">Colouring Colombia</a>.</p>

            <p>Para consultas de prensa, póngase en contacto con <a href="https://www.turing.ac.uk/contact-us/press-office">The Alan Turing Institute press office</a></p>

            <p>
            Si captura imágenes de los mapas de Colorear Bogotá, por favor acredite a nuestros
            colaboradores (que recogieron los datos) y a Ordnance Survey
            (que proporcionó los mapas base y las geometrías de los edificios) como sigue:
            </p>
            <p>
            <pre><code>
            Colouring London https://colouring.london Los datos de atributos de los edificios son © Colouring London contributors. Los mapas contienen datos de OS © Crown copyright: Capas base de OS Maps y contornos de edificios.
            </code></pre>
            </p>
            <hr />
            <p>
                <img className="d-block mx-auto" src="images/logo-cl.png"></img>
            </p>
        </section>
    </article>
);

export default ContactPage;
