import {useState, useEffect } from "react";
import axios from "axios";




function App() {
  const[catFact,setcatFact]=useState("")
  const fetchData=async()=>{
const {data}=await axios.get("https://catfact.ninja/fact")
setcatFact(data.fact);
  }
  useEffect(()=>{
fetchData()
  },[])
  return (
    <div className="">
     <div className="bg-black h-screen flex justify-center items-center flex-col px-10">
     <button  onClick={fetchData} className="bg-pink-600 px-4 py-2 rounded-2xl font-semibold text-xl border border-white">Generate Cat Fact</button>
     
     <h1 className="text-lg mt-10 text-white ">{catFact}</h1>
     
     </div>
    </div>
  );
}

export default App;
