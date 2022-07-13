 fetch("https://reqres.in/api/users")
  .then((res) => {
    return res.json();
    // console.log(data)
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    
  });
