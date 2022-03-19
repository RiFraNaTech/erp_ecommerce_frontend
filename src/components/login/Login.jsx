import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { loginUser } from "./helpers/loginUser";

const Login = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    //e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    console.log(token);
    setToken(token);
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        ></i>
                        <span className="h1 fw-bold mb-0">Logo</span>
                      </div>

                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Iniciar Sesión
                      </h5>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          value={username}
                          className="form-control form-control-lg"
                          placeholder="Ingrese el usuario"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        <label className="form-label" for="form2Example17">
                          Username
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          value={password}
                          className="form-control form-control-lg"
                          placeholder="Ingrese la contraseña"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label" for="form2Example27">
                          Contraseña
                        </label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                          onClick={(e) => handleSubmit(e)}
                        >
                          Iniciar Sesión
                        </button>
                      </div>

                      <a className="small text-muted" href="#!">
                        ¿Olvidaste la contraseña?
                      </a>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393F81" }}>
                        ¿No tienes una cuenta?{" "}
                        <a href="#!" style={{ color: "#393F81" }}>
                          Registrate aquí
                        </a>
                      </p>
                      <a
                        href="#!"
                        className="small text-muted"
                        style={{ marginRight: "4px" }}
                      >
                        Términos de uso.
                      </a>
                      <a
                        href="#!"
                        className="small text-muted"
                        style={{ marginLeft: "4px" }}
                      >
                        Políticas de privacidad
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
