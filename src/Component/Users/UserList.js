import Table from "../UI/Table";
import classes from "./UserList.module.css"
import { useContext } from "react";
import { addContext } from "../Context/context";
export default function UserList(props) {
    // const {userlist}=useContext(addContext)
    // console.log(userlist);
    return(
<div style={{justifyContent:"center",display:"flex"}}>
    <table id={classes.table} className="table table-bordered">
        <thead>
            <tr>
                <th>User</th>
               
            </tr>
        </thead>
        <tbody>{props.passingData.map((details,i)=>(
            <tr>
            <td>{details.name}({details.age} years old)</td>
            
        </tr>
        ))
            }
        </tbody>
    </table>
</div>
    )
}