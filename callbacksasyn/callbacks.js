
 const  function1  = (person) =>  {
    setTimeout(function() {
        console.log("run this after sometime")
    }, 2000)

    console.log("person object value" , person)
}

const function2 = () => {
    console.log("in function2")
}

const demo = (function1, function2)  => {
    const person = {
        name : "ABC",
        age : 20
    }

    if(person != null || person != undefined ){
        function1(person)
    } else {
        function2()
    }
    console.log("inside demo")
    
}

demo(function1,function2)