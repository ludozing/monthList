import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
import Class from "./Class";
export default function Month(){

    const param = useParams();
    const courses = useFetch("http://localhost:3002/courses");
    console.log(param);
   
    const filArray = courses.filter((course)=>
        course.month === param.month
    );
    
    return(
        <div>
            <table>
                <tbody>
                {filArray.map(course => (
                   <Class course={course} key={course.id}/>
                ))}
                </tbody>
            </table>
        </div>
    );
}