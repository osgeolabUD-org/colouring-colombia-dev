import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { dateReviver } from '../../helpers';
import { apiGet } from '../apiHelpers';


interface ExtractViewModel {
    extract_id: number;
    extracted_on: Date;
    download_path: string;
}

interface DataExtractsState {
    extracts: ExtractViewModel[];
    latestExtract: ExtractViewModel;
    previousExtracts: ExtractViewModel[];
}

export default class DataExtracts extends React.Component<{}, DataExtractsState> {
    constructor(props) {
        super(props);

        this.state = {
            extracts: undefined,
            latestExtract: undefined,
            previousExtracts: undefined
        };
    }

    async componentDidMount() {
        let data = await apiGet('/api/extracts', { jsonReviver: dateReviver});
        const extracts = (data.extracts as ExtractViewModel[]);

        this.setState({ extracts: extracts, latestExtract: extracts[0], previousExtracts: extracts.slice(1) });
    }

    render() {

        return (
            <article>
                <section className="main-col">
                    <h1 className="h2">Extractos de datos abiertos</h1>
                    <p>
                    Elija uno de los siguientes enlaces para descargar un archivo con los datos abiertos recolectados en la plataforma  de Colouring London                    </p>
                    <p>
                    Las contribuciones de Colouring Bogotá son datos abiertos, bajo la licencia de <a href="http://opendatacommons.org/licenses/odbl/">Licencia de base de datos abierta de Open Data Commons</a> (ODbL) por los colaboradores de Colouring Bogotá.
                    </p>
                    <p>
                    Usted es libre de copiar, distribuir, transmitir y adaptar nuestros datos, siempre que dé crédito a Colouring London y a nuestros colaboradores. Si modifica nuestros datos o se basa en ellos, sólo podrá distribuir el resultado bajo la misma licencia.                    </p>
                    <p>
                    Elija uno de los siguientes enlaces para descargar un archivo con los datos abiertos recogidos en la plataforma Colouring London.                    </p>
                    <p>
                    Al descargar extractos de datos de este sitio, usted acepta el <Link to="/data-accuracy.html">acuerdo sobre la exactitud de los datos</Link> y los <Link to="/ordnance-survey-uprn.html">términos de uso de la UPRN de Estudio de Ordenación</Link>.
                    </p>

                    {
                        this.state.extracts == undefined ?
                            <p>Cargando extractos...</p> :
                            (
                                this.state.extracts.length === 0 ?
                                    <p>No hay extractos disponibles</p> :
                                    null
                            )
                    }
                    {
                        this.state.latestExtract != undefined ?
                            <div>
                                <h1 className="h3">Ultimo Extracto</h1>
                                <ExtractDownloadLink {...this.state.latestExtract} />
                            </div> :
                            null
                    }
                    {
                        this.state.previousExtracts && this.state.previousExtracts.length > 0 ?
                            (<div>
                                <h1 className="h3">Extractos antiguos</h1>
                                <ul>
                                {
                                    this.state.previousExtracts.map(e =>
                                        <li>
                                            <ExtractDownloadLink {...e} />
                                        </li>
                                    )
                                }
                                </ul>
                            </div>) :
                            null
                    }

                </section>
            </article>
        );
    }
}


const ExtractDownloadLink: FunctionComponent<ExtractViewModel> = (props) => (
    <p><a href={props.download_path}>Extracted on {props.extracted_on.toDateString()}</a></p>
);
