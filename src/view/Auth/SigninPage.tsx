import React, { useState, useEffect } from "react";
import "./Styles/styles.css";
import { useDispatch, useSelector } from "react-redux";
import actions from "@modules/auth/authActions";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import yupFormSchemas from "@modules/shared/yup/yupFormSchemas";
import { i18n } from "../../i18n";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFormContext } from "react-hook-form";
import InputFormItem from "@view/shared/form/InputFormItem";
import selectors from "@modules/auth/authSelectors";
import { Link } from "react-router-dom";
import ButtonIcon from "@view/shared/ButtonIcon";

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

  const loading = useSelector(selectors.selectLoading);

  const [initialValues] = useState({
    email: "",
    password: "",
    rememberMe: true,
  });

  useEffect(() => {
    dispatch(actions.doClearErrorMessage());
  }, [dispatch]);

  const form = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    defaultValues: initialValues,
  });

  const externalErrorMessage = useSelector(selectors.selectErrorMessage);

  const onSubmit = ({ email, password, rememberMe }) => {
    dispatch(actions.doSigninWithEmailAndPassword(email, password, rememberMe));
  };

  return (
    <div className="app__singnin">
      <div className="singin__page">
        <div className="singin__header">
          <h1>Sign In</h1>
          <span>Enter your email and password to sign in</span>
        </div>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="singin__form">
              <div className="singin__group">
                <label htmlFor="">E-mail </label>
                <InputFormItem
                  type="text"
                  name="email"
                  placeholder="Enter your Email"
                  className="singin__input"
                  externalErrorMessage={externalErrorMessage}
                />
              </div>

              <div className="singin__group">
                <label htmlFor="">Password</label>
                <InputFormItem
                  type="text"
                  name="password"
                  placeholder="Enter your passowrd"
                  className="singin__input"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="singin__button"
              >
                <ButtonIcon loading={loading} />

                <span>Login</span>
              </button>
              <div className="singin__donthaveaccount">
                <Link to="/auth/signup" className="link-without-underline">
                  <span>
                    Don’t have an account? &nbsp;
                    <label htmlFor="" className="signup__link">
                      Sign up
                    </label>
                  </span>
                </Link>
              </div>
            </div>
          </form>
        </FormProvider>
        <div className="bottom__signin">
          <div style={{ cursor: "pointer" }}>
            {" "}
            <img src="/public/flags/america.png" alt="" />{" "}
          </div>
          <div style={{ cursor: "pointer" }}>
            {" "}
            <img src="/public/flags/china.png" width={24} alt="" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SigninPage;
