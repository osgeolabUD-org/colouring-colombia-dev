import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../auth-context';
import ConfirmationModal from '../components/confirmation-modal';
import ErrorBox from '../components/error-box';
import { SpinnerIcon } from '../components/icons';
import { t } from 'i18next';


export const MyAccountPage: React.FC = () => {
    const { isLoading, user, userError, logout, generateApiKey, deleteAccount } = useAuth();

    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [error, setError] = useState(undefined);

    const handleLogout = useCallback((e) => {
        e.preventDefault();
        logout(setError);
    }, [logout]);

    const handleGenerateKey = useCallback(async (e) => {
        e.preventDefault();
        
        setError(undefined);
        generateApiKey(setError);
    }, [generateApiKey]);

    const handleDeleteAccount = useCallback(() => {
        setError(undefined);
        deleteAccount(setError);
    }, [deleteAccount])

    if(!user && isLoading) {
        return (
            <article>
                <section className="main-col">
                    <SpinnerIcon spin={true} /> Cargando información del usuario... 
                </section>
            </article>
        );
    }

    return (
        <article>
            <section className="main-col">
                { !isLoading && <ErrorBox msg={userError} /> }
                {!userError && (<>
                    <h1 className="h1">Bienvenido {user.username}!</h1>
                    <p>
                    Colorear Londres está en desarrollo activo. Por favor{' '}
                        <a href="https://discuss.colouring.london/">debatir sugerencias para mejoras</a> e{' '}
                        <a href="https://github.com/colouring-london/colouring-london/issues"> Informar cuestiones o problemas</a>.
                    </p>
                    <p>
                        Como referencia, aquí está la {' '}
                        <Link to="/privacy-policy.html">politica de privacidad</Link>,{' '}
                        <Link to="/contributor-agreement.html">acuerdo de colaboración</Link> y{' '}
                        <Link to="/data-accuracy.html">acuerdo sobre la exactitud de los datos</Link>.
                    </p>
                    <ErrorBox msg={error} />
                    <form onSubmit={handleLogout}>
                        <div className="buttons-container">
                            <Link to="/edit/age" className="btn btn-warning">Empezar a colorear</Link>
                            <input className="btn btn-secondary" type="submit" value="Log out"/>
                        </div>
                    </form>

                    <hr/>
                    <h2 className="h2">Mis datos</h2>
                    <h3 className="h3">Usuario</h3>
                    <p>{user.username}</p>
                    <h3 className="h3">Correo electronico</h3>
                    <p>{user.email || '-'}</p>
                    <h3 className="h3">Registrado</h3>
                    <p>{user.registered.toString()}</p>

                    <hr/>

                    <h2 className="h2">Detalles técnicos</h2>
                    <p>¿Es usted desarrollador de software? Si es así, puede que te interese esto.</p>
                    <h3 className="h3">API key</h3>
                    <p>{user.api_key || '-'}</p>
                    <form onSubmit={handleGenerateKey} className="form-group mb-3">
                        <input className="btn btn-warning" type="submit" value= "Generar API key"/>
                    </form>

                    <h3 className="h3">Código abierto</h3>
                    El código del sitio de Colouring Bogotá es desarrollado por <a href="https://github.com/osgeolabUD-org/colouring-colombia/">colouring-colombia</a> en Github

                    <hr />

                    <h2 className="h2">Acciones de la cuenta</h2>
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            setShowDeleteConfirm(true);
                        }}
                        className="form-group mb-3"
                    >
                        <input className="btn btn-danger" type="submit" value="Eliminar cuenta" />
                    </form>

                    <ConfirmationModal
                        show={showDeleteConfirm}
                        title= {t("Confirm account deletion")}
                        description= {t("Are you sure you want to delete your account? This cannot be undone.")}
                        confirmButtonText= {t("Delete account")}
                        confirmButtonClass="btn-danger"
                        onConfirm={() => handleDeleteAccount()}
                        onCancel={() => setShowDeleteConfirm(false)}
                    />
                </>)}
            </section>
        </article>
    );
};
