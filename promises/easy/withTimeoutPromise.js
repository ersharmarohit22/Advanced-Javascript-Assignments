
// // Problem Description – Promise Timeout (Race Against Time)
// //
// // You are given a promise and a timeout duration in milliseconds.
// // Your task is to implement withTimeout(promise, ms).
// //
// // The returned promise should:
// // 1. Resolve/reject if the original promise settles within ms
// // 2. Reject with "Request Timed Out" if it takes longer than ms

function withTimeoutPromise(promise, ms) {
    return new Promise((resolve,reject) => {
        let timer = setTimeout(() => {
            reject(new Error("Request Timed Out"));
        },ms)

        promise.then((ans) => {
            clearTimeout(timer)
                resolve(ans)
        }).catch((e) => 
            {   
                clearTimeout(timer)
                reject(e)

            })
    })
}

module.exports = withTimeoutPromise;