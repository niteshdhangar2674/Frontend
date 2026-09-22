import { useState } from "react"

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
    const [error, setError] = useState(null);
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
    return (
        <form>
            {/* full name */}
            <div>
                <label>Full Name</label>
                <input type="text" name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Full name" />
            </div>
            {/* email */}
            <div>
                <label>Enter Email</label>
                <input type="email" name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email" />
            </div>
            {/* phone */}
            <div>
                <label>Phone</label>
                <input type="text" name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="6257457809" />
            </div>
            {/* exp */}
            <div>
                <label>Year of Experience</label>
                <input type="number"
                    value={formData.experience}
                    onChange={handleChange}
                    name="experience" />
            </div>

            {/* current company */}
            <div>
                <label>Current Companay</label>
                <input type="text" name="currentCompany"
                    value={formData.currentCompany}
                    onChange={handleChange}
                />
            </div>

            {/* expected salary */}
            <div>
                <label>Expected Salary</label>
                <input type="number" name="expectedSalary"
                    value={formData.expectedSalary}
                    onChange={handleChange}
                />
            </div>

            {/* skills */}
            <div>
                <label>Skills</label>
                <input type="text" name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="React ,Node.js , SQL...." />
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
            </div>

            {/* coverletter -> textarea */}
            <div>
                <label>Cover Letter</label>
                <textarea name="coverLetter" rows='7'
                    value={formData.coverLetter}
                    onChange={handleChange}
                    placeholder="Tell us why you are a good fit.."></textarea>
            </div>

            {/* resume */}
            <div>
                <label>resume</label>
                <input type="file" accept=".pdf,.doc,.docx"
                    onChange={handleResume}
                />
            </div>

            <div>
                <label>
                    <input type="checkbox" name="terms"
                        value={formData.terms}
                        onChange={handleChange}
                    />
                    agree to the terms
                </label>
            </div>
            <button type="submit">Submit Application</button>
        </form>
    )
}