//const tinderUser= new Object()  //Singleton Object

const tinderUser={}
tinderUser.name="abcd"
tinderUser.email="abc@gmail.com"
tinderUser.isLoggedin=false
// console.log(tinderUser);
const regularUser = {
    email:"support@google.com",
    fullName:{
        userfullName:{
            firstName:"Sohail",
            Last:"Akhter"
        }
    }
}
console.log(regularUser.fullName.userfullName.firstName);