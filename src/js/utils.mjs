// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParams(param) {
  const queryString = window.location.search
  const URLparams = new URLSearchParams(queryString)
  const product = URLparams.get(param)

  return product
}

export function renderListWithTemplate(templateFn, parentElement, list, position = "afterbegin", clear = false) {
  const htmlList = list.map(templateFn)
  if (clear == true) {
    parentElement.innerHTML = ""
  }
  parentElement.insertAdjacentHTML(position, htmlList.join(""))
}

export function renderWithTemplate(templateFn, parentElement, data, callbackFn, position = "afterbegin", clear = false) {
  
  parentElement.insertAdjacentHTML(position, templateFn)
  if (callbackFn) {
    callbackFn(data)
  }
  if (clear == true) {
    parentElement.innerHTML = ""
  }
}

export async function loadHeaderFooter() {
  const headerTemplate = await loadTemplate("../partials/header.html")
  const footerTemplate = await loadTemplate("../partials/footer.html")

  const headerElement = document.querySelector("#main-header")
  const footerElement = document.querySelector("#main-footer")

  renderWithTemplate(headerTemplate, headerElement)
  renderWithTemplate(footerTemplate, footerElement)
}

export async function loadTemplate(path) {
  const res = await fetch(path);
  const template = await res.text();
  return template;
}

export function alertMessage(message, scroll=true) {
  const alert = document.createElement('div');
  alert.classList.add("alert")

  alert.innerHTML = `<p>${message}</p> <button>X</button>`

  alert.addEventListener("click", (e) => {
    if (e.target.innerText === "X") {
      main.removeChild(alert)
    }
  })
  const main = document.querySelector('main');
  main.prepend(alert);

  if (scroll) {
    window.scrollTo(0,0)
  }
}

export function removeAllAlerts() {
  const main = document.querySelector("main")
  const alerts = document.querySelectorAll(".alert")
  alerts.forEach(alert => {
    main.removeChild(alert)
  })
}

export function formatNumberToUSD(number) { 
  return new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: 'USD', 
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2, }).format(number); }