import styles from "./SignUpForm.module.scss";
import { FC, useEffect } from "react";
import logo from "../../assets/logo.png";
import InputPassword from "../../ui/InputPassword/InputPassword";
import Input from "../../ui/Input/Input";
import { useSignupMutation } from "../../services/user";
import { useNavigate } from "react-router-dom";
import { YourFormElement } from "./signup";
const SignUpForm: FC = () => {
  const [signup, { isLoading, data }] = useSignupMutation();
  const navigate = useNavigate();

  const submitForm = async (e: React.FormEvent<YourFormElement>) => {
    const name = e.currentTarget.elements.name.value;
    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;
    e.preventDefault();
    await signup({ nickname: name, email, password });
  };

  useEffect(() => {
    if (data?.access) {
      navigate("/");
    }
  }, [data]);

  if (isLoading) {
    return <h1>oleg</h1>;
  }
  return (
    <div className={styles.signUpForm}>
      <form className={styles.login} onSubmit={submitForm}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <img src={logo} alt='' />
          </div>
          <div className={styles.inputEmail}>
            <h3>Name</h3>
            <Input
              id='name'
              variant='Gray'
              border='BorderWhite'
              placeholder='Name'
            />
          </div>
          <div className={styles.inputEmail}>
            <h3>Email</h3>
            <Input
              variant='Gray'
              id='email'
              border='BorderWhite'
              placeholder='Email'
            />
          </div>

          <div className={styles.inputPassword}>
            <h3>Password</h3>
            <InputPassword
              id='password'
              border='BorderWhite'
              placeholder='Password'
            />
          </div>

          <span className={styles.minimum}>Minimum 6 characters</span>
          <p className={styles.paragraf}>
            By clicking Agree & Join, you agree to the Flothy's{" "}
            <span>User Agreement</span> <span>Privacy Policy</span> and{" "}
            <span>Cookie Policy</span>{" "}
          </p>
          <button className={styles.formBtn}>Agree & Join </button>
          <p className={styles.signUp}>
            Already on Fluffy's? <span>Login</span>
          </p>
        </div>
      </form>
    </div>
  );
};
export default SignUpForm;
