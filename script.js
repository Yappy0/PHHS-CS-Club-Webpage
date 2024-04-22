var slidesRequest = new XMLHttpRequest();
slidesRequest.open("GET", "https://csclub.pythonanywhere.com/static/slides.json", false);
slidesRequest.send();
if (slidesRequest.status == 200){
  document.getElementById("").innerHTML = slidesRequest.responseText;
}
