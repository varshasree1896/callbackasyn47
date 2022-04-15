//pending - intial creation
//resolved -completed sucessfully
//rejected-failed

const promise1 = new Promise(( reslove, reject) => {

let condition = true

 if(condition) {
     reslove("data fecthed succesfully" )
 } else {
     reject("oops something went wrong")
 }
})


//to access promise need to use .then() for reslove case 
//error then we need use.catch() for reject

promise1
.then( response => {
    console.log(response)
})
.catch(err => console.log(err))


