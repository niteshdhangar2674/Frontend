import { useContext } from "react";
import { NameContext } from "../../App";
import { ageContext } from "./CompA";

const CompD = () => {
    let name = useContext(NameContext);
    let age = useContext(ageContext);
    return (
        <>
            <h1>Component D</h1>
            <h1>{name}</h1>
            <h1>{age}</h1>
        </>
    )
}
export default CompD;
