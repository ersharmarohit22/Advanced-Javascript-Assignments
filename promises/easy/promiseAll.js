// Problem Description – Custom Implementation of Promise.all

// You are required to implement your own version of Promise.all without using the built-in method. 
// The function should accept an array of values that may include Promises or plain constants. 
// It must resolve with an array of results in the same order once all inputs resolve, or reject immediately if any input rejects.
function promiseAll(promises) {
    return new Promise((resolve,reject) => {
        let pending = promises.length
        let output = new Array(pending)
        if(pending === 0){
            return resolve([])
        }

        promises.forEach(async (p,i) => {
            try{
                let res = await p;
                output[i] = res
                pending -= 1
                if(pending === 0){
                    resolve(output)
                }
            }catch(e){
                reject(e)
            }
        });
    })

}

module.exports = promiseAll;
