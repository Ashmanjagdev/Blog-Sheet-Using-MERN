import React,{useState,useEffect} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Data from "./Data";

const Home = () => {

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
    <h1 className="task">Home</h1>
 <br />
   {
    userdata?.map((val) => {
      return(
      <Data
      heading={val.heading}   
      key={val.key}
      content={val.content}
      date={val.date}   
       />
      );
    })}
<br />
<br />
<br />
<br />
<br />
<br />
<br />
    <Footer />
    </>
  )
}

export default Home;
