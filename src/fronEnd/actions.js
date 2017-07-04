const getApiData = () => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      console.log(xhttp.responseText);
    }
  };
  xhttp.open("GET", " http://thegamesdb.net/api/GetArt.php?id=2", true);
  xhttp.send();
}
export {
  getApiData
}
