import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { createAccount } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { typesInitialStateProps } from "../../redux/reducer";

const SignUp: React.FC = () => {
  const accounts = useSelector((state: typesInitialStateProps) => state.AllAccount);
  const dispatch = useDispatch();
  let history = useHistory();
  const [signUpName, setSignUpName] = useState<string>("");
  const [signUpEmail, setSignUpEmail] = useState<string>("");
  const [signUpPhone, setSignUpPhone] = useState<string>("");
  const [signUpPassword, setSignUpPassword] = useState<string>("");
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState<string>("");
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setSignUpName(name);
  };
  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phone = e.target.value;
    if (!Number(phone) && phone !== "" && phone !== "0") return;
    if (phone.length <= 11) setSignUpPhone(phone);
  };
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setSignUpEmail(email);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setSignUpPassword(password);
  };
  const handleChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const confirmPassword = e.target.value;
    setSignUpConfirmPassword(confirmPassword);
  };
  const handleSignUpAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (signUpName === "") {
      toast.warn("Vui lòng nhập Name", {
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
    if (signUpPhone === "") {
      toast.warn("Vui lòng nhập Phone Number", {
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
    if (signUpEmail === "") {
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
    if (signUpPassword === "") {
      toast.warn("Vui lòng nhập Password", {
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
    if (signUpConfirmPassword === "") {
      toast.warn("Vui lòng Confirm Password", {
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
    if (signUpConfirmPassword !== signUpPassword) {
      toast.error("Password Không Khớp", {
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
      if (account.email === signUpEmail) {
        return true;
      } else return false;
    });
    if (acc) {
      toast.warn("Email đã được sử  dụng", {
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

    if (
      signUpName !== "" &&
      signUpConfirmPassword !== "" &&
      signUpEmail !== "" &&
      signUpPassword !== "" &&
      signUpPhone !== ""
    ) {
      const randomId = Math.random().toString(36).slice(1);
      const new_account = {
        id: randomId,
        name: signUpName,
        phone: signUpPhone,
        email: signUpEmail,
        password: signUpPassword,
      };
      dispatch(createAccount(new_account));
      toast.success("Tạo Account Thành Công", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        setSignUpName("");
        setSignUpEmail("");
        setSignUpPhone("");
        setSignUpPassword("");
        setSignUpConfirmPassword("");
        history.push("/login");
      }, 1500);
    }
  };

  return (
    <section className="section--signUp">
      <Link to="/login">
        <Button variant="success" style={{ marginTop: "1rem", fontSize: "1.6rem" }}>
          &lArr; BACK
        </Button>
      </Link>

      <h1 className="section--signUp-title">Welcome to CLB SIC</h1>
      <div className="section--signUp-article">
        <h1 className="section--signUp-article__header">Sign up</h1>
        <form onSubmit={handleSignUpAccountSubmit}>
          <div className="form__group">
            <input
              type="text"
              className="form__input"
              value={signUpName}
              onChange={handleChangeName}
              placeholder="Name"
              required
            />
            <br />
          </div>
          <div className="form__group">
            <input
              type="text"
              className="form__input"
              value={signUpPhone}
              onChange={handleChangePhone}
              placeholder="Phone Number"
              required
            />
            <br />
          </div>

          <div className="form__group">
            <input
              type="email"
              className="form__input"
              value={signUpEmail}
              onChange={handleChangeEmail}
              placeholder="Email"
              required
            />
            <br />
          </div>
          <div className="form__group">
            <input
              type="password"
              className="form__input"
              value={signUpPassword}
              onChange={handleChangePassword}
              placeholder="Password"
              required
            />
          </div>
          <br />

          <br />
          <div className="form__group">
            <input
              type="password"
              className="form__input"
              value={signUpConfirmPassword}
              onChange={handleChangeConfirmPassword}
              placeholder="Confirm Password"
              required
            />
          </div>
        </form>
        <label className="check">
          <input type="checkbox" className="check__input" />
          <span className="check__input-text">Yes,I want to receive SIC emails</span>
        </label>

        <div className="form__group">
          <button className="button button--pink" onClick={handleSignUpAccountSubmit}>
            Create Account
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
