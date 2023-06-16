import React, { useState, useEffect } from "react";
import './Styles/styles.css'
import { Link } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import yupFormSchemas from "@modules/shared/yup/yupFormSchemas";
import { i18n } from "../../i18n";
import { useDispatch, useSelector } from "react-redux";
import actions from "@modules/auth/authActions";
import selectors from '@modules/auth/authSelectors';
import InputFormItem from "@view/shared/form/InputFormItem";
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
function SignupPage() {

  const dispatch = useDispatch();


  const [initialValues] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    dispatch(actions.doClearErrorMessage());
  }, [dispatch]);


  const form = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    defaultValues: initialValues,
  });

  const externalErrorMessage = useSelector(
    selectors.selectErrorMessage,
  );

  const onSubmit = ({ email, password }) => {
    dispatch(actions.doRegisterEmailAndPassword(email, password));
  };

  const loading = useSelector(selectors.selectLoading);

  return (
    <div className="app__singnin">
      <div className="singin__page">
        <div className="singin__header">
          <h1>SignUp</h1>
          <span>Enter your email and password to signup</span>
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

      
              <button type="submit" disabled={loading} className="singin__button">


              <ButtonIcon loading={loading}  />

                <span>Signup</span>
              </button>
              <div className="singin__donthaveaccount">
              <Link
                to="/auth/signin"
                className="link-without-underline"
              >
                <span>
                  Don’t have an account? &nbsp;
                  <label htmlFor="" className="signup__link">
                    Signin
                  </label>
                </span>
                </Link>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default SignupPage


