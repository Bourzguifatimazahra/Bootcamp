const promiseSuccess = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Succès !");
    }, 4000);
  });
  
  promiseSuccess.then(result => console.log(result));
  