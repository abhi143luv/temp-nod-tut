const { readFile, writeFile } = require('fs')

console.log('start');
readFile('./content/firstFile.txt', 'UTF-8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('task-2');
    const first = result
    readFile('./content/secondFile.txt', 'UTF-8', (err, result) => {
        if(err){
            console.log(err)
            return
        }
        console.log(result)
        console.log('task-3');
        const second = result
        writeFile('./content/result-async.txt', `Here This is the result : ${first}, ${second}`, (err, result) => {
            if(err){
                console.log(err)
                return
            }
            // readFile('./content/result-async.txt', 'UTF-8', (err, result) => {
            //     if(err){
            //         console.log(err)
            //         return
            //     }
            //     console.log(result);
            //     console.log('task-4');
            // })
            console.log('task-5')
        })
    })
})
console.log('strting next task');