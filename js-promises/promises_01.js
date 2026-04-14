// In JS, a Promise is an object representing
// the eventual completion (or failure) of
// an asynchronous operation and its resulting value.

// There are 3 states when a promise runs.
// 1. Pending
// 2. Fulfilled
// 3. Rejected

const myPromise = new Promise((resolve, reject) => {
  const status = true;

  if (status) {
    resolve("OPeration ran sucessfully");
  } else {
    reject("Something went wrong!");
  }
});

myPromise
  .then((data) => {
    console.log(data);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.error(data);
    return data;
  })
  .finally(() => {
    console.log("Process finished");
  });
