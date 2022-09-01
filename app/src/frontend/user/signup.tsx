import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../auth-context';
import ErrorBox from '../components/error-box';
import { SpinnerIcon } from '../components/icons';
import InfoBox from '../components/info-box';
import SupporterLogos from '../components/supporter-logos';
import { t } from 'i18next';

export const SignUp: React.FC = () => {
    const { isLoading, signup } = useAuth();
    const [error, setError] = useState(undefined);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('')
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [confirmConditions, setConfirmConditions] = useState(false);

    const onSubmit = useCallback(
        e => {
            e.preventDefault();
            signup({ username, email, confirmEmail, password }, setError);
        },
        [username, email, confirmEmail, password, confirmConditions, signup]
    );

    return (
        <article>
            <section className="main-col">
                <h1 className="h2">Registrarse</h1>
                <InfoBox msg={t("Welcome to Colouring London. You're one of the first people to sign up!  ")}>
                    <br/>Por favor <a href="https://discuss.colouring.london/">debatir sugerencias para mejoras</a> e <a
                        href="https://github.com/colouring-london/colouring-london/issues">
                    Informar cuestiones o problemas</a>.
                </InfoBox>
                <p>
                    Crea una cuenta para empezar a colorear.
                </p>
                <ErrorBox msg={error} />
                <form onSubmit={onSubmit}>
                    <label htmlFor="username">Usuario</label>
                    <input name="username" id="username"
                        className="form-control" type="text"
                        value={username} onChange={e => setUsername(e.target.value)}
                        placeholder="no-su-nombre-real" required
                        minLength={4}
                        maxLength={30}
                        pattern="\w+"
                        title= {t("Usernames can contain only letters, numbers and the underscore")}
                    />

                    <label htmlFor="email">Correo (opcional)</label>
                    <input name="email" id="email"
                        className="form-control" type="email"
                        value={email} onChange={e => setEmail(e.target.value)}
                        placeholder= {t("someone@example.com")}
                    />
                    <InfoBox msg= {t("Please note that if you forget your password, you will only be able to recover your account if you provide an email address.")} />
                    
                    <label htmlFor="confirm_email">Corfirmar correo (opcional)</label>
                    <input name="confirm_email" id="confirm_email"
                        className="form-control" type="email"
                        value={confirmEmail} onChange={e => setConfirmEmail(e.target.value)}
                    />

                    <label htmlFor="password">Contraseña (al menos 8 caracteres)</label>
                    <input name="password" id="password"
                        className="form-control"
                        type={(showPassword)? 'text': 'password'}
                        value={password} onChange={e => setPassword(e.target.value)}
                        required
                        minLength={8}
                        maxLength={128}
                    />

                    <div className="form-check">
                        <input id="show_password" name="show_password"
                            className="form-check-input" type="checkbox"
                            checked={showPassword}
                            onChange={e => setShowPassword(e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="show_password">
                            Ver contraseña
                        </label>
                    </div>

                    <div className="form-check">
                        <input id="confirm_conditions" name="confirm_conditions"
                            className="form-check-input" type="checkbox"
                            checked={confirmConditions}
                            onChange={e => setConfirmConditions(e.target.checked)}
                            required />
                        <label className="form-check-label" htmlFor="confirm_conditions">
                            Confirmo que he leído y acepto la <Link
                                to="/privacy-policy.html">política de privacidad</Link>, <Link
                                to="/contributor-agreement.html">acuerdo de colaboración</Link> y <Link
                                to="/data-accuracy.html">acuerdo sobre la exactitud de los datos</Link>.
                        </label>
                    </div>

                    <div className="buttons-container with-space">
                        <input type="submit" disabled={isLoading} value="Registrarse" className="btn btn-primary" />
                        {isLoading && <span><SpinnerIcon/>Enviando datos de registro...</span>}
                    </div>
                    <InfoBox msg="">
                    Lea también nuestro <a href="https://www.pages.colouring.london/data-ethics">política de ética de datos</a> antes de utilizar o compartir nuestros datos
                    </InfoBox>

                    ¿Ya tiene una cuenta?

                    <div className="buttons-container with-space">
                        <Link to="login.html" className="btn btn-outline-dark">Iniciar sesión</Link>
                    </div>

                </form>
            </section>
            <hr />
            <section className="main-col">
                <SupporterLogos />
            </section>
        </article>
    );
};
