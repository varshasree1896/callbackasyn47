const fun1 = () => {
    console.log("function1")

}
const fun2 = () => {
    console.log("function2")
    
}
const fun3 = () => {
    console.log("function3")
    
}

async function demoAsynAwait() {
    await fun1()
    await fun2()
    await fun1()

}
demoAsynAwait()