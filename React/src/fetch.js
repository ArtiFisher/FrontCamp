module.exports = function(url, callback){
  fetch(url)
  .then(response => response.json())
  .then(callback)
  .catch((err) => {
    console.log(err);
  });
}
