function getUserDeatailsById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id == 100) {
                const user = { userId: id, userName: "Nitesh" }
                resolve(user);
            }
            else reject(new Error("user Detaits could not be fetched.."))
        }, 2000)
    })
}
function getRepoByUserName(userName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userName == "Nitesh") {
                const repo = ["repo1", "repo2", "pero3", "repo4", "....."];
                resolve(repo);
            }
            else reject(new Error("Invalid userName!"));
        }, 2000);
    })
}
getUserDeatailsById(100)
    .then(user => {
        return getRepoByUserName(user.userName);
    })
    .then(repo => console.log(repo))
    .catch(err => console.log(err));
