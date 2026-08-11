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
async function fun1() {
    const userObj = await getUserDeatailsById(100);
    console.log(userObj);
}
fun1();
