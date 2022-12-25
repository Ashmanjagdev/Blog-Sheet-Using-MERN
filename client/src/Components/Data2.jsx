import React,{useState} from 'react';
import {useNavigate} from "react-router-dom";

const Data2 = (props) => {
	const navigate = useNavigate();

	const [user,setUser] = useState({
	  finish:""
	  });
	
	  let name, value;
	
	  const handleInputs = (e) => {
	  name= e.target.name;
	  value = e.target.value;
	
	  setUser({[name]:value});
	  }
	
	  const PostData = async (e) =>{
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
  <form  method="POST" onSubmit={PostData}>
	    <div className="cross">
			<input  className="inside"  type="submit"  value={ props._id } onClick={handleInputs} / >
		  </div>
  </form>
  <b><p className="time">{ props.date }</p></b>
  </div>
    </>
  )
}
export default Data2;
