import { useState } from "react";
export default function Class({course}){
    const [isDeadline, setIsDeadline] = useState(course.deadline);
    function chIsDeadline(){

        fetch(`http://localhost:3002/courses/${course.id}`,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...course,
                deadline: !isDeadline,
            })
        }).then(res=> {
            if(res.ok){
                setIsDeadline(!isDeadline);
            }
        })   
    }
    return(
        <tr className={isDeadline ? "on" : ""}>
        <td><input type="checkbox" checked={isDeadline} onChange={chIsDeadline}/>{course.day}</td>
        <td>{course.title}</td>
         </tr>
    );
}