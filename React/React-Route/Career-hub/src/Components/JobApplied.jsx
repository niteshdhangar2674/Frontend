import { useParams, Link } from "react-router-dom"
export function JobApplied() {
    const { id } = useParams();
    return (

        <div>
            <h1>Application submitted </h1>
            <p>your application for JobId: {id} has been sumbmitted</p>

            <Link to={'/jobs'}>Back to jobs</Link>
        </div>
    )
}