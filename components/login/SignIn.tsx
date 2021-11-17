import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { AiOutlineGoogle } from "react-icons/ai";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { typesInitialStateProps } from "../../redux/reducer";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const SignIn: React.FC = () => {
  let history = useHistory();
  const accounts = useSelector((state: typesInitialStateProps) => state.AllAccount);

  const [signInEmail, setSignInEmail] = useState<string>("");
  const [signInPassword, setSignInPassword] = useState<string>("");

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setSignInEmail(email);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setSignInPassword(password);
  };
  const handleSignAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const acc = accounts.find(account => {
      if (account.email === signInEmail && account.password === signInPassword) {
        return true;
      } else return false;
    });
    if (!acc) {
      toast.error("Vui lòng kiểm  tra password và email", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    history.push(`/${acc.id}`);
  };
  return (
    <>
      <section className="section--signIn">
        <h1 className="section--signIn-title">Welcome to CLB SIC</h1>
        <div className="section--signIn-article">
          <h1 className="section--signIn-article__header">Sign in</h1>
          <Button
            variant="outline-primary"
            style={{ color: "#fff", border: " 1px solid grey" }}
            className="section--signIn-article__button"
          >
            <AiOutlineGoogle
              style={{ fontSize: "2.6rem", paddingBottom: "0.6rem", marginRight: "1rem" }}
            />
            Continue with Google
          </Button>
          <br />
          <br />
          <Button
            variant="outline-primary"
            style={{ color: "#fff", border: " 1px solid grey" }}
            className="section--signIn-article__button"
          >
            <TiSocialFacebookCircular
              style={{ fontSize: "2.6rem", paddingBottom: "0.6rem", marginRight: "1rem" }}
            />
            Continue with Facebook
          </Button>
          <br />

          <span style={{ fontSize: "2rem", opacity: "0.9" }}>or</span>
          <form onSubmit={handleSignAccountSubmit}>
            <div className="form__group">
              <input
                type="email"
                value={signInEmail}
                onChange={handleChangeEmail}
                className="form__input"
                placeholder="Email"
                id="email"
                required
              />
              <label htmlFor="email" className="form__label">
                Email
              </label>
            </div>
            <br />

            <div className="form__group">
              <input
                type="password"
                className="form__input"
                value={signInPassword}
                onChange={handleChangePassword}
                placeholder="Password"
                id="name"
                required
              />
              <label htmlFor="name" className="form__label">
                Password
              </label>
            </div>
          </form>
          <div className="form__group">
            <button className="button button--pink" onClick={handleSignAccountSubmit}>
              Sign in
            </button>
          </div>
        </div>
        <div className="section--signIn-footer">
          <span className="section--signIn-footer__text">
            Dont have account?{" "}
            <Link to="/login/createAccount" className="link">
              Create Account
            </Link>
          </span>
          <br />
          <Link to="/login/forgotPassword" className="link">
            Forgot Password
          </Link>
        </div>
      </section>
    </>
  );
};

export default SignIn;
