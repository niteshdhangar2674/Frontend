let teams = [
    {
        leaderName: "pradik",
        teamMember: [
            {
                memberName: "altaf"
            },
            {
                memberName: "rahul"
            }
        ]
    },
    {
        leaderName: "Nitesh",
        teamMember: [
            { memberName: "mohan" },
            { memberName: "sohan" }
        ]
    }
]


let mems = teams.reduce((members, teams) => {
    members.push(teams.leaderName);
    teams.teamMember?.map(emem => {
        members.push(emem.memberName);
    })
    return members;
}, [])

console.log(mems);

