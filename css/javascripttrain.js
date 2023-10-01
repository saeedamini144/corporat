// var course = {
//     title : "javascript" ,
//     teacher : "hashemi",
//     level : 1 ,
//     isActive : true,
//     views : 0,
//     updateViews : function (){
//         return ++course.views;
//     }

// }
// ----------------this-----------------
// function Course(title,teacher,level,isActive,views,updateViews){
//     this.title=title,
//     this.updateViews=function(){
//         return ++Course.views;
//     }
// }
// var course1 = new Course("javascript","","","",0);
// console.log(course1.title);

const car = ["Benz","BMW","peykan","pride"];
//  console.log("The car brand is : " + car[0]);
// for(let i=0 ; i<car.length ; i++){
// console.log("The car brand name is : " + car[i]);
// }
// for (value of car) {
//     console.log(value);    
// }
// for(key in car){
//     console.log(car[key]);
// }
// var i = 0;
// while (i<=4){
//     console.log(car.length);
//     i++;
// }
// var week = ["shanbe","yekshanbe","doshanbe","seshanbe","chaharshanbe","panjshanbe","jome"]
// var i = 0;
// while(week[i]){
//     console.log(week[i]);
//     i++;
// }
const nameArray = ["karim","rahim","taqi","fati","maryam","khar","gav"];
function createListName(){
    for(const item of nameArray){
        const node = document.createElement("li");
        const textNode = document.createTextNode(item);
        node.appendChild(textNode);
        document.getElementById("myList").appendChild(node);
    }
}
createListName();