import "./App.scss";
import { FC, useState } from "react";
import Post from "./components/Post/Post.tsx";


const App: FC = () => {

  const [liked,setLiked]=useState(false)
  const [comented,setComented]=useState(false)
  const handlerLiked=()=>{
    setLiked(!liked)
  }
  const handlerComented=()=>{
    setComented(!comented)
  }

  

  return <div>
    <Post description="Its a good pet for me" id="1"  folowed={false} imgUrl="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg" comented={comented}setComented={handlerComented} setLiked={handlerLiked} liked={liked} likes={123} name="vasya" time="6 days ago"/>
  </div>;
};

export default App;
