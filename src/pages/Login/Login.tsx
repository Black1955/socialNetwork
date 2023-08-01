import styles from "./Login.module.scss";
import { FC, useEffect } from "react";
import { ILogin, YourFormElement } from "./ILogin";
import logo from "../../assets/logo.png";
import InputPassword from "../../ui/InputPassword/InputPassword";
import Input from "../../ui/Input/Input";
import { useNavigate } from "react-router-dom";
import { useSigninMutation } from "../../services/user";
const Login: FC<ILogin> = () => {
  const navigation = useNavigate();
  const [signin, { data, isLoading }] = useSigninMutation();

  const handleSubmit = async (e: React.FormEvent<YourFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;
    await signin({ email, password }).unwrap();
  };

  useEffect(() => {
    if (data?.access) {
      navigation("/");
    }
  }, [data]);

  return (
    <div className={styles.content}>
      {isLoading ? (
        <h1>oleg</h1>
      ) : (
        <form
          className={styles.login}
          onSubmit={handleSubmit}
          name='login'
          id='login'
        >
          <div className={styles.wrapper}>
            <div className={styles.logo}>
              <img src={logo} alt='' />
            </div>
            <div className={styles.inputEmail}>
              <h3>Email</h3>
              <Input
                type='email'
                required
                id='email'
                variant='Gray'
                border='BorderWhite'
                placeholder='Email'
              />
            </div>

            <div className={styles.inputPassword}>
              <h3>Password</h3>
              <InputPassword
                minLength={6}
                min={6}
                required
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
            <button className={styles.formBtn} type='submit'>
              Agree & Join{" "}
            </button>
            <p className={styles.signUp}>
              Already on Fluffy's? <span>Sing up</span>
            </p>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
