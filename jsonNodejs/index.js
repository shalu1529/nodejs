const fs = require('fs');
const bioData = {
    name:"shalu",
    age:22,
    channel:"shalus",
};
//console.log(bioData.age);


const jsonData = JSON.stringify(bioData);
//const objData = JSON.parse(jsonData);
//fs.writeFile("json1.json",jsonData, (err) =>{
//console.log("done");
//});

fs.readFile("json1.json", "utf-8", (err,data) =>{
   // console.log(data);
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
});