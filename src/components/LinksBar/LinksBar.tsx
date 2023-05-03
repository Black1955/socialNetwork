import Button from "../../ui/Button/Button";
import { AiFillHome } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { FaTelegramPlane, FaRegCompass } from "react-icons/fa";
import { RiSettings5Fill } from "react-icons/ri";
import styles from "./LinksBar.module.scss";
import Home from "../../pages/Home/Home";
import { Link } from "react-router-dom";

const LinksBar = () => {
  return (
    <div className={styles.LinksBar}>
      <Link to={'/'}>
      <Button
        onClick={() => console.log("qwed")}
        text='Home'
        variant='Icon'
        icon={<AiFillHome />}
      />
      </Link>
      <Link to={'/profile'}>
      <Button
        onClick={() => console.log("qwe")}
        text='Profile'
        variant='Icon'
        icon={<BsPersonCircle />}
      />
      </Link>
      <Link to={'/massages'}>
      <Button
        onClick={() => console.log("qwe")}
        text='Masseges'
        variant='Icon'
        icon={<FaTelegramPlane />}
      />
      </Link>
   
      <Link to={'/explore'}>
      <Button
        onClick={() => console.log("qwe")}
        text='Explore'
        variant='Icon'
        icon={<FaRegCompass />}
      />
      </Link>
      <Link to={'/settings'}>
      <Button
        onClick={() => console.log("qwe")}
        text='Settings'
        variant='Icon'
        icon={<RiSettings5Fill />}
      />
      </Link>
      
    </div>
  );
};

export default LinksBar;
