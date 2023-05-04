import Button from "../../ui/Button/Button";
import { AiFillHome } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { FaTelegramPlane, FaRegCompass } from "react-icons/fa";
import { RiSettings5Fill } from "react-icons/ri";
import './LinksBar.scss'
import Home from "../../pages/Home/Home";
import { NavLink } from "react-router-dom";

const LinksBar = () => {
  return (
    <div className='LinksBar'>
      <NavLink to={'/'} className='link'>
      <Button
        onClick={() => console.log("qwed")}
        text='Home'
        variant='Icon'
        icon={<AiFillHome />}
      />
      </NavLink>
      <NavLink to={'/profile'} className='link'>
      <Button
        onClick={() => console.log("qwe")}
        text='Profile'
        variant='Icon'
        icon={<BsPersonCircle />}
      />
      </NavLink>
      <NavLink to={'/massages'} className='link'>
      <Button
        onClick={() => console.log("qwe")}
        text='Masseges'
        variant='Icon'
        icon={<FaTelegramPlane />}
      />
      </NavLink>
   
      <NavLink to={'/explore'} className='link'>
      <Button
        onClick={() => console.log("qwe")}
        text='Explore'
        variant='Icon'
        icon={<FaRegCompass />}
      />
      </NavLink>
      <NavLink to={'/settings'} className='link'>
      <Button
        onClick={() => console.log("qwe")}
        text='Settings'
        variant='Icon'
        icon={<RiSettings5Fill />}
      />
      </NavLink>
      
    </div>
  );
};

export default LinksBar;
