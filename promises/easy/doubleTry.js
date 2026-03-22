
// // Problem Description – Double Try (Basic Retry)
// //
// // You are given an async function fn that may fail.
// // Your task is to implement doubleTry(fn).
// //
// // Call fn once. If it succeeds, return the result.
// // If it fails, call fn one more time immediately.
// // If the second attempt fails, reject with the error.

async function doubleTry(fn,check = 0) {
    try{
        let ans = await fn()
        return ans
    }catch(e){
        if(check === 0){
            return await doubleTry(fn,check + 1)
        }else{
            throw e
        }
    }
}

module.exports = doubleTry;