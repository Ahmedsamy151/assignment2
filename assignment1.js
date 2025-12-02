//A. Part 1: Coding Questions (7.5 Grade):
//-1
let x ="123";
console.log(Number(x)+7);
//-2
let y = 0;
y||console.log("Invalid");
//-3 we haven't take it yet

//-4
let arr=[1,2,3,4,5];
let fn = function evenNumber(arr)
{
    return arr%2==0
};
console.log(arr.filter(fn));
//-5
let arr1 =[1,2,3];
let arr2 =[4,5,6];
let arr3 =[...arr1,...arr2];
console.log(arr3);
//-6 we haven't take it yet

//-7
let arr4=["a", "ab", "abc"]
console.log();
let result = arr4.map(word => word.length);
console.log(result);
//-8
let num =15
function divisible()
{
if(num/5||num/3)
    {
        console.log("Divisible by both");
        
    }
}
divisible()
//-9
let num1=25
let fn2 = ()=>
{
return Math.sqrt(num1)
}
console.log(fn2());
//10
let ob ={name:"John",age:25}
function dus()
{
console.log(ob.name+" is "+ ob.age+" years old" );
}
dus()
//-11
function sum(...par)
{
return  par.reduce((total, n) => total + n , 0);
}
console.log(sum(1,2,3,4,5));
//-12
function waitForSuccess() {
  return new Promise(function suc(resolve)  {
    setTimeout(function() {
      console.log("success");
    }, 3000);
  });
}
waitForSuccess()
//-13
let arr5= [1, 3, 7, 2, 4]
let mxnum =Math.max(...arr5)
console.log(mxnum);
//-14
let ob1 ={name:"ahmed",age:22} 
function find()
{
    return Object.keys(ob1)
}
console.log(find());
//-15
function splitIntoWords(str) {
  return str.split(" ");
}
console.log(splitIntoWords("The quick brown fox"));

