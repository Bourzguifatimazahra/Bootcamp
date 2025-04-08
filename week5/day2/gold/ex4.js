const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/WRONG-url" //Erreur volontaire ici
  ];
  
  const getData = async function() {
    try {
      const responses = await Promise.all(urls.map(async url => {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Erreur HTTP : ${res.status}`);
        return res.json();
      }));
  
      const [users, posts, albums] = responses;
      console.log('users', users);
      console.log('posts', posts);
      console.log('albums', albums);
    } catch (err) {
      console.log("ooooooops");
      console.error(err);
    }
  }
  
  getData();
  