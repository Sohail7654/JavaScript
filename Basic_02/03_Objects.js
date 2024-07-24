//  Singleton

//  Object Literals

// Object.create()


const mySym=Symbol("key1")

const JsUser={
    name:"Sohail",
    " full name":"Sohail Akhter",
    age:25,
    address:"New Delhi",
    email:"support@rank1infotech.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","tuesday"],
   [mySym]:"myKey1"
}

// console.log(JsUser.name);
// console.log(JsUser["email"])
// console.log(JsUser[" full name"])
// console.log(typeof JsUser[mySym]);  

JsUser.email="sohail@rnk1infotech.com"
//Object.freeze(JsUser)   // It will freez the object you can not change any value
JsUser.email="sohail@google.com"
// console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hello World")
}
JsUser.greetingTwo=function(){
    console.log(`Hello Js User, ${this.name}`)
}
JsUser.greeting()
JsUser.greetingTwo()