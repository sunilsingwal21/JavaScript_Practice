
// Given an array of log objects, find which users had errors.

 const logs = [
  { user: "Alice", action: "login",  status: "success" },
  { user: "Bob",   action: "upload", status: "error"   },
  { user: "Alice", action: "export", status: "error"   },
  { user: "Bob",   action: "login",  status: "success" },
  { user: "Charlie", action: "login", status: "error"  },
  { user: "Alice", action: "login", status: "error"}
];

function getErrorUsers(logs)
{
    const errorUsers = logs.filter(log => log.status === "error").map(log => log.user)
    return [...new Set(errorUsers)]
}
console.log(getErrorUsers(logs))



// Return an object showing each user and how many errors they had.

function userWithErrors(logs)
{
    const userErrorCount = logs.filter(log => log.status === "error").reduce((acc,log)=> {acc[log.user] = (acc[log.user] || 0) + 1
        return acc}, {})
    return userErrorCount
}
console.log(userWithErrors(logs))