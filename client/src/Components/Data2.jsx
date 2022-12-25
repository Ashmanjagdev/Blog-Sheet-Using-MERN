import React,{useState} from 'react';
import {useNavigate} from "react-router-dom";

const Data2 = (props) => {
	const navigate = useNavigate();

	const [user,setUser] = useState({
	  finish:""
	  });
	
	  let name, value;
	
	  
	  const PostData = async (e) =>{
		  name= e.target.name;
	          value = e.target.value;
	
	          setUser({[name]:value});
		e.preventDefault();
		const finish = user.finish;
		
		const res= await fetch("/delete",{
		method: "POST",
		headers: {
		  "Content-Type" : "application/json"
		},
		body:JSON.stringify({
		  finish
		})
		});
		const data=res.json();
		navigate(0);
		
	
	  }
  return(
    <>
    <div className="items"  >
     <h2>{ props.heading }</h2>
  <p>{ props.content }</p>
  <form  method="POST" >
		  <button name="finish" value={ props._id } onClick={PostData} className="cross"><span className="inside">Delete</span></button>
  </form>
  <b><p className="time">{ props.date }</p></b>
  </div>
    </>
  )
}
export default Data2;
