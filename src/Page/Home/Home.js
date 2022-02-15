import AddUser from "../../Component/Users/AddUsers";
import UserList from "../../Component/Users/UserList";
import { useState } from "react";
import { addContext } from "../../Component/Context/context";
import { useEffect } from "react";

export default function Home() {
   const [addData, setaddData] = useState([]);
   //creating an arry
   // const userlist=[{name:addData.name,age:addData.age}]
  useEffect(() => {
    const localdata= JSON.parse(localStorage.getItem("material"))
    if(localdata){
       setaddData(localdata)
    }
  }, []); 
useEffect(() => {
  localStorage.setItem("material",JSON.stringify(addData))
}, [addData]);
const getdata=(addingData)=>{
   setaddData([...addData,{...addingData}])
}

    return(
         <>
         {/* <addContext.Provider value={{name:addData.name,age:addData.age,userlist, setaddData}}> */}
         <AddUser add={getdata}/>
         <UserList passingData={addData}/>
         {/* </addContext.Provider> */}
      
        </>
    )
}