import Button from "../../ui/Button/Button";
import { AiFillHome } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { FaTelegramPlane, FaRegCompass } from "react-icons/fa";
import { RiSettings5Fill } from "react-icons/ri";
import styles from "./LinksBar.module.scss";
const LinksBar = () => {
  return (
    <div className={styles.LinksBar}>
      <Button
        onClick={() => console.log("qwe")}
        text='Home'
        variant='Icon'
        icon={<AiFillHome />}
      />
      <Button
        onClick={() => console.log("qwe")}
        text='Profile'
        variant='Icon'
        icon={<BsPersonCircle />}
      />
      <Button
        onClick={() => console.log("qwe")}
        text='Masseges'
        variant='Icon'
        icon={<FaTelegramPlane />}
      />
      <Button
        onClick={() => console.log("qwe")}
        text='Explore'
        variant='Icon'
        icon={<FaRegCompass />}
      />
      <Button
        onClick={() => console.log("qwe")}
        text='Settings'
        variant='Icon'
        icon={<RiSettings5Fill />}
      />
    </div>
  );
};

export default LinksBar;
