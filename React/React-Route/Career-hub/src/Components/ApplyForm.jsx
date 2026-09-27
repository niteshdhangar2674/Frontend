import { useState } from "react"
import { useParams } from "react-router-dom";

export function ApplyForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        experience: "",
        currentCompany: "",
        expectedSalary: "",
        skills: "",
        location: "",
        coverLetter: "",
        terms: false
    })
    const [resume, setResume] = useState(null);
    const [error, setError] = useState({});

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newVal = type == "checkbox" ? checked : value;
        setFormData((currnetFormData) => {
            return {
                ...currnetFormData,
                [name]: newVal
            }
        });
    };

    const handleResume = (event) => {
        const resume = event.target.files[0];
        setResume(resume);
    };

    const validationForm = () => {
        const newErrors = {};
        //name
        if (!formData.name.trim()) {
            newErrors.name = "Full Name required!"
        }
        else if (formData.name.trim().length < 3) {
            newErrors.name = "Name must be at least 3 characters"
        }
        // Email
        if (!formData.email.trim()) {
            newErrors.email = "Email required!"
        }
        else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(formData.email) === false) {
            newErrors.email = "Enter valid Email"
        }

        // phone

        if (!formData.phone.trim()) {
            newErrors.phone = "phone required!"
        }
        else if (/^[6-9]\d{9}$/.test(formData.phone) === false) {
            newErrors.phone = "Phone should valid with 10 digits"
        }


        //exprerience 

        if (formData.experience == "") {
            newErrors.experience = "exprerience required!"
        }
        else if (Number(formData.experience) < 0) {
            newErrors.experience = "exprecience cannot be negative"
        }

        //skills 

        if (!formData.skills.trim()) {
            newErrors.skills = "skills required!"
        }


        //location 

        if (!formData.location.trim()) {
            newErrors.location = "Select a work preference";
        }

        // converletter

        if (!formData.coverLetter.trim()) {
            newErrors.coverLetter = "coverletter required!"
        }
        else if (formData.coverLetter.length < 50) {
            newErrors.coverLetter = "Cover letter must be at least 50 characters";
        }

        // resume 

        if (!resume) {
            newErrors.resume = "Please upload your resume";
        }

        // terms 

        if (!formData.terms) {
            newErrors.terms = "You must accpet the terms"
        }


        return newErrors;


    }
    const { id } = useParams();
    const submitForm = async (event) => {
        event.preventDefault();

        const validationError = validationForm();


        setError(validationError);

        if (Object.keys(validationError).length > 0) return;

        // make an api call to my backend to submit this application.


        try {

            const data = new FormData();
            data.append("jobId", id)
            // for (let key in formData) {
            //     data.append(key, formData[key]);
            // }
            data.append("name", formData.name);
            data.append("email", formData.email);
            data.append("phone", formData.phone);
            data.append("experience", formData.experience);
            data.append("currentCompany", formData.currentCompany);
            data.append("expectedSalary", formData.expectedSalary);
            data.append("skills", formData.skills);
            data.append("location", formData.location);
            data.append("coverLetter", formData.coverLetter);
            data.append("terms", String(formData.terms));
            data.append("resume", resume);

            const response = await fetch("http://localhost:5001/api/applications", {
                method: "POST",
                body: data,
            })
            const result = await response.json();
            console.log(result);
        }
        catch (error) {
            console.log("Api error");
            console.log(error);
        }
    }
    return (
        <form onSubmit={submitForm}>
            {/* full name */}
            <div>
                <label>Full Name</label>
                <input type="text" name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Full name" />
                {error.name && <p style={{ color: "red" }}>{error.name}</p>}
            </div>
            {/* email */}
            <div>
                <label>Enter Email</label>
                <input type="email" name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email" />
                {error.email && <p style={{ color: "red" }}>{error.email}</p>}
            </div>
            {/* phone */}
            <div>
                <label>Phone</label>
                <input type="text" name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="6257457809" />
                {error.phone && <p style={{ color: "red" }}>{error.phone}</p>}
            </div>
            {/* exp */}
            <div>
                <label>Year of Experience</label>
                <input type="number"
                    value={formData.experience}
                    onChange={handleChange}
                    name="experience" />
                {error.experience && <p style={{ color: "red" }}>{error.experience}</p>}
            </div>

            {/* current company */}
            <div>
                <label>Current Companay</label>
                <input type="text" name="currentCompany"
                    value={formData.currentCompany}
                    onChange={handleChange}
                />
                {error.currentCompany && <p style={{ color: "red" }}>{error.currentCompany}</p>}
            </div>

            {/* expected salary */}
            <div>
                <label>Expected Salary</label>
                <input type="number" name="expectedSalary"
                    value={formData.expectedSalary}
                    onChange={handleChange}
                />
                {error.expectedSalary && <p style={{ color: "red" }}>{error.expectedSalary}</p>}
            </div>

            {/* skills */}
            <div>
                <label>Skills</label>
                <input type="text" name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="React ,Node.js , SQL...." />
                {error.skills && <p style={{ color: "red" }}>{error.skills}</p>}
            </div>

            {/* location preference -> (Remote, Hybrid, On-site) */}
            <div>
                <label>Work Location Preference</label>
                <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                >
                    <option value="">Select Prefenece</option>
                    <option value="remote">Remote</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="nosite">On-site</option>
                </select>
                {error.location && <p style={{ color: "red" }}>{error.location}</p>}
            </div>

            {/* coverletter -> textarea */}
            <div>
                <label>Cover Letter</label>
                <textarea name="coverLetter" rows='7'
                    value={formData.coverLetter}
                    onChange={handleChange}
                    placeholder="Tell us why you are a good fit.."></textarea>
                {error.coverLetter && <p style={{ color: "red" }}>{error.coverLetter}</p>}
            </div>

            {/* resume */}
            <div>
                <label>resume</label>
                <input type="file" accept=".pdf,.doc,.docx"
                    onChange={handleResume}
                />
                {error.result && <p style={{ color: "red" }}>{error.resume}</p>}
            </div>

            <div>
                <label>
                    <input type="checkbox" name="terms"
                        value={formData.terms}
                        onChange={handleChange}
                    />
                    agree to the terms
                </label>
                {error.terms && <p style={{ color: "red" }}>{error.terms}</p>}
            </div>
            <button type="submit">Submit Application</button>
        </form>
    )
}