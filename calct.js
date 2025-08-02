const expression = prompt("Masukkan ekspresi matematika:");
const result = sendHttpRequest(
  "https://api.mathjs.org/v4/?expr=" + encodeURIComponent(expression),
  {
    method: "GET",
  }
);

if (result.status == "success") {
  alert("Hasil: " + result.response.body);
} else if (result.status == "httpError") {
  alert("HTTP error " + result.response.statusCode);
} else {
  alert("Network error: " + result.networkError);
}
