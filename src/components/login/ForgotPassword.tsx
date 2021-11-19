import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { typesInitialStateProps } from "../../redux/reducer";
import { toast } from "react-toastify";

const ForgotPassword: React.FC = () => {
  let history = useHistory();
  const accounts = useSelector((state: typesInitialStateProps) => state.AllAccount);

  const [forgotPassword, setForgotPassword] = useState<string>("");
  const handleChangeForgotPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const forgotPassword = e.target.value;
    setForgotPassword(forgotPassword);
  };
  const handleForgotPasswordAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (forgotPassword === "") {
      toast.warn("Vui lòng nhập Email", {
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
    const acc = accounts.find(account => {
      if (account.email === forgotPassword) {
        return true;
      } else return false;
    });
    if (!acc) {
      toast.error("Email không chính sác", {
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
    toast.success(`Vui lòng kiểm tra email:${acc.email} `, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {
      history.push("/login");
    }, 1500);
  };
  return (
    <section className="section--forgotPassword">
      <Link to="/login">
        <Button variant="success" style={{ marginTop: "1rem", fontSize: "1.6rem" }}>
          &lArr; BACK
        </Button>
      </Link>
      <h1 className="section--forgotPassword-title">Welcome to CLB SIC</h1>
      <div className="section--signUp-article">
        <h1 className="section--signUp-article__header">Forgot Password</h1>
        <form onSubmit={handleForgotPasswordAccountSubmit}>
          <div className="form__group">
            <input
              type="email"
              className="form__input"
              placeholder="Email Forgot Password"
              value={forgotPassword}
              onChange={handleChangeForgotPassword}
              required
            />
            <br />
          </div>
        </form>
        <label className="check">
          <input type="checkbox" className="check__input" />
          <span className="check__input-text">Yes,I want to receive SIC emails</span>
        </label>
        <div className="form__group">
          <button className="button button--pink" onClick={handleForgotPasswordAccountSubmit}>
            Forgot Password
          </button>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
