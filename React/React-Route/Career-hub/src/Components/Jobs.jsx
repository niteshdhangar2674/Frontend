import { jobs } from "../Data/jobs"
import { Link } from "react-router-dom"
export function Jobs() {
    return <div>
        <h1>Available jobs</h1>
        {jobs.map(job => {
            return (
                <div>
                    <h3>{job.title}</h3>
                    <p>Company: {job.company}</p>
                    <p>Location : {job.location}</p>
                    <p>Salary: {job.salary}</p>
                    <Link to={`/jobs/${job.id}`}>View Details</Link>
                    <hr />
                </div>
            )
        })}
    </div>
}