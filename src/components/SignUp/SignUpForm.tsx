import styles from './SignUpForm.module.scss'
import { FC,useState } from "react";
import {ISignUpForm} from './ISignUpForm'
import logo from '../../assets/logo.png'
import InputPassword from '../../ui/InputPassword/InputPassword';
import Input from '../../ui/Input/Input';


const SignUpForm: FC<ISignUpForm> = () => {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [name,setName]=useState('')


  const onChangeInput=(e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const onChangePassword=(e:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const onChangeName=(e:React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }



  return (
  <div className={styles.signUpForm}>
  <form className={styles.login}>

    <div className={styles.wrapper}>
        <div className={styles.logo}><img src={logo} alt="" /></div>
        <div className={styles.inputEmail}>
        <h3>Name</h3>
        <Input variant="Gray" border="BorderWhite" value={name} onChangeInput={(e:React.ChangeEvent<HTMLInputElement>)=>onChangeName(e)} placeholder='Name'/>
        </div>
        <div className={styles.inputEmail}>
        <h3>Email</h3>
        <Input variant="Gray" border="BorderWhite" value={email} onChangeInput={(e:React.ChangeEvent<HTMLInputElement>)=>onChangeInput(e)} placeholder='Email'/>
        </div>

        <div className={styles.inputPassword}>
        <h3>Password</h3>
        <InputPassword  border='BorderWhite' onChangeInput={(e:React.ChangeEvent<HTMLInputElement>)=>onChangePassword(e)} value={password} placeholder='Password'/>
        </div>

        <span className={styles.minimum}>Minimum 6 characters</span>
        <p className={styles.paragraf}>By clicking Agree & Join, you agree to the Flothy's <span>User Agreement</span> <span>Privacy Policy</span> and <span>Cookie Policy</span> </p>
        <button className={styles.formBtn}>Agree & Join </button>
        <p className={styles.signUp}>Already on Fluffy's? <span>Login</span></p>
    </div>

    </form>
    </div>
  );
}
export default SignUpForm;