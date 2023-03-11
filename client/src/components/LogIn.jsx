import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function LogIn() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    f_name: "",
    l_name: "",
    email: "",
    pass: "",
    c_pass: "",
  });
  const onClickHandler = (e) => {
    e.preventDefault();
    navigate("/Form");
  };
  return (
    <section className="text-center text-lg-start">
      <style>
        {`
        .cascading-right {
          margin-right: -50px;
        }
  
        @media (max-width: 991.98px) {
          .cascading-right {
            margin-right: 0;
          }
        }
      `}
      </style>

      {/* Jumbotron */}
      <div className="container py-4">
        <div className="row g-0 align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div
              className="card cascading-right"
              style={{
                background: "hsla(0, 0%, 100%, 0.55)",
                backdropFilter: "blur(30px)",
              }}
            >
              <div className="card-body p-5 shadow-5 text-center">
                <h2 className="fw-bold mb-5">Log In</h2>
                <form onSubmit={onClickHandler}>
                  {/* 2 column grid layout with text inputs for the first and last names */}

                  {/* Email input */}
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control"
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        });
                      }}
                      required
                    />
                    <label className="form-label" htmlFor="form3Example3">
                      Email address
                    </label>
                  </div>

                  {/* Password input */}
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control"
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          pass: e.target.value,
                        });
                      }}
                      // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])"
                      required
                    />
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                  </div>

                  {/* Checkbox */}

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                    // onClick={onClickHandler}
                  >
                    Log In
                  </button>
                  <div className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account? &nbsp;
                    <Link to="/" className="text-decoration-none">
                      SignUp
                    </Link>
                  </div>

                  {/* Register buttons */}
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-5 mb-lg-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-100 rounded-4 shadow-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default LogIn;
