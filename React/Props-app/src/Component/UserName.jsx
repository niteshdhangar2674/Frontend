import PropTypes from "prop-types";
function UserName({ name, age }) {
    return <>
        <h1>User Name is {name} </h1>
        <h2>User age is {age}</h2>

    </>
}
UserName.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}
UserName.defaultProps = {
    name: "Sohan",
    age: 30
}
export default UserName;