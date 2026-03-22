// Problem Description – promiseAny(promises)

// You are required to implement a function named promiseAny that accepts an array of Promises. 
// The function should return a new Promise that resolves immediately when any one of the input promises resolves successfully. 
// If all the promises reject, the returned Promise should reject with an error.
function promiseAny(promises) {

    return new Promise((res,reject) => {
        let pending = promises.length
        let output = new Array(pending)
        if(pending === 0){
            return reject(new Error("Empty iterable"));
        }

        promises.forEach(async (p , i) => {
            try{
                let ans = await p;
                res(ans)
            }catch(e){
                pending -= 1
                output[i] = e
                if(pending === 0){
                     reject(new Error("All promises were rejected"));
                }
            }
        })
    })
}

module.exports = promiseAny;
