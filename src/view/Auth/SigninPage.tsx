import React, { useState, useEffect } from "react";
import "./Styles/styles.css";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../modules/auth/authActions";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import yupFormSchemas from "../../modules/shared/yup/yupFormSchemas";
import { i18n } from "../../i18n";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFormContext } from 'react-hook-form';

const schema = yup.object().shape({
  email: yupFormSchemas.string(i18n("user.fields.email"), {
    required: true,
  }),
  password: yupFormSchemas.string(i18n("user.fields.password"), {
    required: true,
  }),
  rememberMe: yupFormSchemas.boolean(i18n("user.fields.rememberMe")),
});
function SigninPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [initialValues] = useState({
    email: "mootassame@gmail.com",
    password: "123456789",
    rememberMe: true,
  });

  useEffect(() => {
    dispatch(actions.doClearErrorMessage());
  }, [dispatch]);


  const form = useForm({
   
    mode: "onSubmit",
    defaultValues: initialValues,
  });



  const onSubmit = ({ email, password, rememberMe }) => {
    dispatch(actions.doSigninWithEmailAndPassword(email, password, rememberMe));
  };

  return (
    <div className="app__singnin">
      <div className="singin__page">
        <div className="singin__header">
          <h1>Sign In</h1>
          <span>Let’s build something greate</span>
        </div>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="singin__form">
              <div className="singin__group">
                <label htmlFor="">E-mail or phone number</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your Email"
                  className="singin__input"
           
                />
              </div>

              <div className="singin__group">
                <label htmlFor="">Password</label>
                <input
                  type="text"
                  name="password"
                  placeholder="Enter your passowrd"
                  className="singin__input"
                />
              </div>

              <button type="submit" className="singin__button">
                <span>Login</span>
              </button>
              <div className="singin__donthaveaccount">
                <span>
                  Don’t have an account?
                  <label htmlFor="" className="signup__link">
                    Sign up
                  </label>
                </span>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default SigninPage;
