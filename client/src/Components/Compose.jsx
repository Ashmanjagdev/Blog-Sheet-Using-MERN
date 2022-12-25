import React,{useState} from 'react';
import {useNavigate} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Compose = () => {

  const navigate = useNavigate();

  const [user,setUser] = useState({
    headings:"",input:""
    });
  
    let name, value;
  
    const handleInputs = (e) => {
    name= e.target.name;
    value = e.target.value;
  
    setUser({...user,[name]:value})
    }
  
    const PostData = async (e) =>{
      e.preventDefault();
  
      const { headings,input } = user;
      const res= await fetch("/compose",{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        headings,input
      })
      });
      const data=await res.json();
      if(data===101){
        setUser({headings:"",input:""});
        navigate("/compose");
      }
  
    }

  return(
    <>
    <Header />
	<Footer />
	<h1 className="task">Compose</h1>
<form method="POST" onSubmit={PostData}>
  <div className="inputss">
    <input name="headings" value={user.headings} onChange={handleInputs} maxLength = "100" className="heading" placeholder="Heading" />
     <textarea className="blog" name="input" value={user.input} onChange={handleInputs} placeholder="Add your blog"></textarea>
      <br />
    <button className="addbutton">Add</button>
  </div>

  </form>
    </>
  )
}

export default Compose;