try {
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
