import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../auth-context';
import ErrorBox from '../components/error-box';
import { SpinnerIcon } from '../components/icons';
import InfoBox from '../components/info-box';
import SupporterLogos from '../components/supporter-logos';
import { t } from 'i18next';


export const Login: React.FC = () => {
    const {isLoading, login } = useAuth();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [error, setError] = useState(undefined);

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        setError(undefined);

        login({ username, password }, setError);
    }, [username, password]);

    return (
        <article>
            <section className="main-col">
                <h1 className="h2">Iniciar sesion</h1>
                <InfoBox msg= {t("Welcome to Colouring London. You're one of the first people to use the site!  ")}>
                    <br/>Por favor <a href="https://discuss.colouring.london/">debatir sugerencias para mejora</a> e <a
                        href="https://github.com/colouring-london/colouring-london/issues">
                    Informar cuestiones o problemas</a>.
                </InfoBox>
                <ErrorBox msg={error} />
                <form onSubmit={onSubmit}>
                    <label htmlFor="username">Usuario</label>
                    <input name="username" id="username"
                        className="form-control" type="text"
                        value={username} onChange={e => setUsername(e.target.value)}
                        placeholder="no-su-nombre-real" required
                    />

                    <label htmlFor="password">Contraseña</label>
                    <input name="password" id="password"
                        className="form-control"
                        type={showPassword ? 'text' : 'password'}
                        value={password} onChange={e => setPassword(e.target.value)}
                        required
                    />

                    <div className="form-check">
                        <input id="show_password" name="show_password"
                            className="form-check-input" type="checkbox"
                            checked={showPassword}
                            onChange={e => setShowPassword(e.target.checked)}
                        />
                        <label htmlFor="show_password" className="form-check-label">Ver contraseña</label>
                    </div>

                    <Link to="/forgotten-password.html">¿Ha olvidado su contraseña?</Link>

                    <div className="buttons-container with-space">
                        <input type="submit" disabled={isLoading} value="Log In" className="btn btn-primary" />
                        {isLoading && <span><SpinnerIcon />Logging in...</span>}
                    </div>

                    ¿Desea crear una cuenta en su lugar?

                    <div className="buttons-container with-space">
                        <Link to="sign-up.html" className="btn btn-outline-dark">Registrarse</Link>
                    </div>
                </form>
            </section>
            <hr />
            <section className="main-col">
                <SupporterLogos />
            </section>
        </article>
    )

};
