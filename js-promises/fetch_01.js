//fetch is biuldin function -> (need API url)
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    return response.json(); //convert return data to json format
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Something went wrong!");
  });
