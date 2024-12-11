function countProperties(obj){
    let count=0;
    for (let key in obj){
        count++;
    }
    return count;

}
let user={
    name:"Sonu",
    age:23,
    isAdmin:true
}
console.log(countProperties(user));