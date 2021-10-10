const article = new Readability(
  document.cloneNode(true)
).parse();
alert(JSON.stringify(article));
