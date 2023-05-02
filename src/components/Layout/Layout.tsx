import {Outlet} from 'react-router-dom'
import LinksBar from '../LinksBar/LinksBar';
import Header from '../Header/Header';
const Layout = () => {
  return (<div>
    <LinksBar/>
    <Header/>
    <Outlet/>
  </div>
  );
};

export default Layout;
