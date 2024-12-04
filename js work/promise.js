const mypromise=new Promise(
  (resolve , reject)=>{
      let a= 12;
      if(a>10){
          // resolve("data resolveed");
          resolve({name:"rahul", branch:"IT"})
      }
      else{
          reject("Data is rejected");
      }
  }
);
// mypromise.then(msg=>console.log(msg))
// mypromise.then(msg=>console.log(msg.name))
mypromise.then(msg=>console.log(msg.branch))
.catch(error=>console.log(error))
.finally(()=>console.log("finally Executed"));