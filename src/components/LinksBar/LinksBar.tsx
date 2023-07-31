import Button from "../../ui/Button/Button";
import { AiFillHome } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { FaTelegramPlane, FaRegCompass } from "react-icons/fa";
import { RiSettings5Fill } from "react-icons/ri";
import "./LinksBar.scss";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelect/useAppSelector";

const LinksBar = () => {
  const { id } = useAppSelector(state => state.auth.user!);
  return (
    <div className='LinksBar'>
      <NavLink to={"/"} className='link'>
        <Button variant='Icon' icon={<AiFillHome />}>
          {window.innerWidth < 980 ? "" : "Home"}
        </Button>
      </NavLink>
      <NavLink to={`/profile/${id}`} className='link'>
        <Button variant='Icon' icon={<BsPersonCircle />}>
          {window.innerWidth < 980 ? "" : "Profile"}
        </Button>
      </NavLink>
      <NavLink to={"/massages"} className='link'>
        <Button variant='Icon' icon={<FaTelegramPlane />}>
          {window.innerWidth < 980 ? "" : "Masseges"}
        </Button>
      </NavLink>

      <NavLink to={"/explore"} className='link'>
        <Button variant='Icon' icon={<FaRegCompass />}>
          {window.innerWidth < 980 ? "" : "Explore"}
        </Button>
      </NavLink>
      <NavLink to={"/settings"} className='link'>
        <Button variant='Icon' icon={<RiSettings5Fill />}>
          {window.innerWidth < 980 ? "" : "Settings"}
        </Button>
      </NavLink>
    </div>
  );
};

export default LinksBar;
