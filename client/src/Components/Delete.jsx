import React,{useState,useEffect} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Data2 from "./Data2";

const Delete = () => {

  var [userdata,setuserdata] = useState();

  const Info = async () => {
    try{
      const res = await fetch('/clear', {
        method: "GET",
        headers: {
          Accept:"application/json",
          "Content-Type": "application/json"
        },
        credentials:"include"
      });
      const data= await res.json();
      setuserdata(data);
    }
    catch(err){
       console.log(err);
    }
  }

  useEffect(() => {
    Info();
  },[]);

  return(
    <>
    <Header />
    <h1 className="task">Delete</h1>
 <br />
   {
    userdata?.map((val) => {
      return(
      <Data2
      heading={val.heading}   
      key={val.key}
      content={val.content}
      date={val.date}   
	    _id={val._id}
       />
      );
    })}
<br />
<br />
<br />
<br />
    <Footer />
    </>
  )
}

export default Delete;
