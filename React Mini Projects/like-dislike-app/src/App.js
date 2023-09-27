import React,{useState} from 'react';
import { FaCircleUser,FaRegComment } from "react-icons/fa6";
import { AiOutlineHeart,AiFillHeart } from "react-icons/ai";
import { PiShareFatBold } from "react-icons/pi";

function App() {
  const [like,setLike] = useState(false);
  const [count,setCount] = useState(0);
  const handleLikes = () => {
    if(!like){
      setLike(true);
      setCount(count + 1);
    }
    else{
      setLike(false);
      setCount(count - 1);
    }
  }

  const imgURL = "https://images.unsplash.com/photo-1694930104266-9cc1cd72163a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80";
  return (
      <>
      <div className="main-container">
        <h1 className="text-info">Like Post</h1>
        <h4>Likes Count : {count}</h4>
        <div className="card">
          <div className="card-header" style={{width:'18rem'}}>
                <FaCircleUser/> Username
          </div>
          
              <img src={imgURL} alt="post-img" height={"300px"} width={"100%"} onDoubleClick={handleLikes}></img>
          
          <div className="card-footer">
            {like ? (<AiFillHeart size={30} className="text-danger" onClick={handleLikes} style={{cursor:"pointer"}}/>)
          :  (
            <AiOutlineHeart size={30} onClick={handleLikes} style={{cursor:"pointer"}}/>
          )
          }
            &nbsp;<FaRegComment size={30} className="comment"/> 
            &nbsp;
            <PiShareFatBold size={30} className="share"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
