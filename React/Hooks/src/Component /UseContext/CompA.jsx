import { createContext, useState } from "react";
import CompB from "./CompB";


export const ageContext = createContext();
const CompA = () => {
    const [age, setAge] = useState(22);
    return (

        <ageContext.Provider value={age}>
            <CompB></CompB>
        </ageContext.Provider>



    )
}
export default CompA