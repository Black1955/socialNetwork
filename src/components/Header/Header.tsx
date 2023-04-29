import logo from "../../assets/logo.png";
import {useState} from 'react'
import Button from "../../ui/Button/Button";
import InputSearch from "../../ui/InputSearch/InputSearch";
import styles from "./Header.module.scss";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillBell } from "react-icons/ai";
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {MdKeyboardArrowRight} from 'react-icons/md'
import img from '../../assets/person.png'
import Avatar from "../../ui/Avatar/Avatar";
const Header = () => {

  const [show ,setShow]=useState(false);  

  const onChangeShow=()=>{
    setShow(!show)
  }
  const onChangeShowLinks=()=>{
    setShow(!show)
    console.log(show)
  }
 
  return (
  
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} className={styles.logoSvg} alt='logo' width='150px' height='50px' />
        <InputSearch placeholder='Search' value='' />
      </div>
      <div>
        
      </div>
      
      {window.innerWidth>500&&window.innerWidth<720  ?<MdOutlineKeyboardArrowDown onClick={onChangeShow} className={styles.arrow} />:null}
      {window.innerWidth<500?<MdKeyboardArrowRight onClick={onChangeShowLinks} className={styles.arrow} />:null}
      {window.innerWidth>720?<nav className={styles.nav}>
    <div className={styles.links}>
      <FaTelegramPlane className={styles.icon} />
      <AiFillBell className={styles.icon }  />
   
      <div className={styles.avatar}>
         <Avatar  url={img} width={20} height={20}/>
      </div>
       
    </div>
    <Button  text='Create'  variant='Orange' />
  </nav>:null}
      { show ? 
     <nav className={styles.nav}>
    <div className={styles.links}>
      <FaTelegramPlane className={styles.icon} />
      <AiFillBell className={styles.icon }  />
   
      <div className={styles.avatar}>
         <Avatar  url={img} width={20} height={20}/>
      </div>
       
    </div>
    <Button  text='Create'  variant='Orange' />
  </nav>:
      null
    }
    </header>
  );
};

export default Header;
