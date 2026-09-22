import { jobs } from "../Data/jobs"
import { useParams, useNavigate } from "react-router-dom"
export function JobDetails() {
    const { id } = useParams();
    const job = jobs.find(job => job.id === Number(id));
    if (!job) {
        return <h1>job Not found</h1>
    }
    const navigate = useNavigate();
    const handleApply = () => {
        navigate(`/jobs/${job.id}/applyform`);
    }
    return (
        <div>
            <h2>Title - {job.title}</h2>
            <p>Company - {job.company}</p>
            <p>Locatio - {job.location}</p>
            <p>Salary - {job.salary}</p>
            <p>Experience - {job.experience}</p>

            <button onClick={handleApply}>Apply Now</button>
        </div>
    )
}
