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

function getRepos(userName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userName == "Nitesh") {
                const repos = ["repo1", "repo2", "repo3"];
                resolve(repos);
            }
            else reject(new Error("Invalid userName"));
        }, 2000);
    })
}
async function fun1() {
    const userObj = await getUserDeatailsById(100);
    const repo = await getRepos(userObj.userName);
    console.log(userObj);
    console.log(repo);
}
fun1();
