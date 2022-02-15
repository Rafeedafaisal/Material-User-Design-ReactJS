import Button from "../UI/Button";
import Card from "../UI/Card";
import Form from 'react-bootstrap/Form';
import classes from "./AddUsers.module.css"
import { useState } from "react";
import { useContext } from "react";
import{addContext} from "../Context/context"
export default function AddUser(props) {
    // const styles={
    //     inputText:{
    //         backgroundColor:"black"
    //     }
    // }
    const [val, setval] = useState({name:"",age:""});

    // const {setaddData} = useContext(addContext);

    const Changefn=(e)=>{
    const {name,value}=e.target;
    setval({...val,[name]:value})
    }
    const Add=(e)=>{
     e.preventDefault()
     props.add(val)
  
     setval({name:"",age:""})

    }
    return(
        <div style={{justifyContent:"center",display:"flex"}}>
            <Card>
            <Form onSubmit={Add}>
        <Form.Group controlId="formName" className={classes.formGroup}>
       
            <Form.Control   type="text" placeholder="Enter name" onChange={Changefn} name="name" value={val.name} className={classes.inputText}/>
            
        </Form.Group>
        <Form.Group controlId="formName" className={classes.formGroup}>
       
            <Form.Control   type="number" max="80" className={classes.inputText} placeholder="Enter age" onChange={Changefn} name="age"  value={val.age} />
            
        </Form.Group>
        <Button type="submit" x>Add</Button>
      </Form>
      
           </Card>
        </div>
    )
}