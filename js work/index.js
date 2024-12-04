// console.log("Hello Ji!")

// const a = 12;
// if(a>10){
//     let a=20;
//     a=40;
//     console.log(" a inside:" +a);
// }
// console.log("a outside:" +b);

// console.log("hello!");

// function fun(a,b){
// console.log("Hiiiiii!")
//     return a+b;

// }
//  const result = fun(23,12);
//  console.log(result);

const button = document.getElementById("btn");
const output = document.getElementById("output");
console.dir(button);

function selectLanaguage(language) {
  console.log("hi selsect lanagsuge");
  output.innerHTML = "<h2>welcome to home page</h2>";
  let data;
  if (language == "c") {
    function cCompiler() {
      return "C compiler";
    }

    data = cCompiler;
  }
  if (language == "java") {
    function javaCompiler() {
      return "java compiler";
    }
    data = javaCompiler;
  }
  return data;
}
// function selectLanaguage(clbk){

// return "Hi you have selsected: "+clbk();

// }
//console.log(selectLanaguage(cCompiler));

// console.log(selectLanaguage("java"));

button.addEventListener("click", () => {
  const comp = selectLanaguage("java");
  output.innerHTML = `<h2 style="color:cyan">${comp}</h2>`;
  console.log(comp);
});
