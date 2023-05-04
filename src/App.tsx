import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { FC, lazy } from "react";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import Explore from "./pages/Exploer/Explore";
const Home = lazy(() => import("./pages/Home/Home"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const SignIn = lazy(() => import("./pages/Login/Login"));
const SignUp = lazy(() => import("./pages/SignUp/SignUpForm"));

const App: FC = () => {
  return (

    <div>   

    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='profile' element={<Profile />} />
          <Route path='massages' />
          <Route path='explore' element={<Explore/>} />
          <Route path='settings' />
        </Route>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
    </div>
  )
};

export default App;
