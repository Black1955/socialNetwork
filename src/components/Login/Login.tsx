import styles from './Login.module.scss'
import { FC } from "react";
import {ILogin} from './ILogin'
import logo from '../../assets/logo.png'
import InputPassword from '../../ui/InputPassword/InputPassword';
import Input from '../../ui/Input/Input';
import { Link } from 'react-router-dom';
const Login: FC<ILogin> = ({email,password,setEmail,setPassword}) => {
  return (
  
  <form className={styles.login}>

    <div className={styles.wrapper}>
        <div className={styles.logo}><img src={logo} alt="" /></div>
        <div className={styles.inputEmail}>

        <h3>Email</h3>
        <Input variant="Gray" border="BorderWhite" value={email}  placeholder='Email'/>
        </div>

        <div className={styles.inputPassword}>
        <h3>Password</h3>
        <InputPassword  border='BorderWhite' value={password} placeholder='Password'/>
        </div>

        <span className={styles.minimum}>Minimum 6 characters</span>
        <p className={styles.paragraf}>By clicking Agree & Join, you agree to the Flothy's <span>User Agreement</span> <span>Privacy Policy</span> and <span>Cookie Policy</span> </p>
        <button className={styles.formBtn}>Agree & Join </button>
        <p className={styles.signUp}>Already on Fluffy's? <span>Sing up</span></p>
    </div>

    </form>
  
  );
}

export default Login;