import { useEffect, useState } from "react";
function FormCompletionPrencentage() {
    const [completion, setCompletion] = useState(0);
    const [profile, setProfile] = useState({
        name: "",
        email: "",
        contactNo: "",
        skills: ""
    })

    useEffect(() => {
        let arr = [];
        for (let key in profile) {
            arr.push(profile[key]);
        }
        let count = arr.filter(ele => ele !== "").length;
        let percent = (count / arr.length) * 100;
        setCompletion(percent);
    })

    return (
        <>
            <input type="text" placeholder="Enter your Name" value={profile.name} onChange={(e) => (
                setProfile(currProfile => {
                    return {
                        ...currProfile,
                        name: e.target.value
                    }
                })
            )} />
            <input type="text" placeholder="Enter your email" value={profile.email} onChange={(e) => (
                setProfile((currProfile) => {
                    return {
                        ...currProfile,
                        email: e.target.value
                    }
                })
            )} />
            <input type="text" placeholder="Enter mobile number " value={profile.contactNo} onChange={(e) => (
                setProfile((currProfile) => {
                    return {
                        ...currProfile,
                        contactNo: e.target.value
                    }
                })
            )} />
            <input type="text" placeholder="Enter your Skills" value={profile.skills} onChange={(e) => (
                setProfile((currProfile) => {
                    return {
                        ...currProfile,
                        skills: e.target.value
                    }
                })
            )} />
            <h1>profile completion : {completion}%</h1>
        </>
    )
}

export default FormCompletionPrencentage;