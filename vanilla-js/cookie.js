function set_cookie(name, value) {
  const domain = document.domain.split('.').reverse().slice(0, 2).reverse();
  document.cookie = `${name}=${value}; Path=/; Domain=.${domain}`; // domain=.main.site
}

function delete_cookie(name) {
  const domain = document.domain.split('.').reverse().slice(0, 2).reverse();
  document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; Domain=.${domain}`;

}

// HttpOnly (from server) cookies cannot be deleted with JavaScript on the client side.
