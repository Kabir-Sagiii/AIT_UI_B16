function removePara() {
  const pDomElement = document.getElementById("para");

  pDomElement.remove();

  const h2dom = document.querySelector("h2");
  h2dom.remove();
}
