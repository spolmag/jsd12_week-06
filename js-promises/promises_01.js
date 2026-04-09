// In JS, a Promise is an object representing
// the eventual completion (or failure) of an
// asynchronous operation and its resulting value.
// There are 3 stages when a promise runs.
// 1. Pending
// 2. Fufilled -> Complete, Successful
// 3. Rejected -> Fail

//Make new promise class, ()=>{} is ananymouse arrow function -> keep it in available
const myPromise = new Promise((resolve, reject) => {
  const status = true;
  if (status) {
    resolve("Operation ran successfully!");
  } else {
    reject("Something went wrong!");
  }
});
// output an object
// console.log(myPromise);

myPromise //If then = sucessful, catch will not run
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Process finished");
  }); //finally always run
