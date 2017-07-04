const getApiData = () => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      console.log(xhttp.responseText);
      }
  };
  xhttp.open("GET", ' http://thegamesdb.net/api/GetArt.php?id=2', true);
  xhttp.setRequestHeader("Access-Control-Allow-Origin","http://thegamesdb.net/");
  xhttp.send();
}
export {
  getApiData
}
