const getUsers = () => {
  axios
    .get("https://reqres.in/api/users")
    .then((response) => {
      const users = response.data.data;
      console.log(`GET users`, users);
    })
    .catch((error) => console.error(error));
};

try {
  console.log(typeof axios);
  getUsers();
  // Yes, we can output the document.cloneNode into a page's console
  // But alert(document.console(true)) cannot.
  console.log(document.cloneNode(true).constructor);
  console.log(document.cloneNode(true));

  let article = new Readability(document.cloneNode(true)).parse();

  console.log(article.textContent);
  console.log(article);
} catch (e) {
  console.log(e);
}
