var slidesRequest = new XMLHttpRequest();
slidesRequest.open("GET", "https://csclub.pythonanywhere.com/static/slides.json", false);
slidesRequest.send();
if (slidesRequest.status == 200){
  slides = JSON.parse(slidesRequest.responseText);
  content = "";
  for (const [key, value of Object.entries(slides)]){
    content += "<div class=\"content\"><h1>" + key + "</h1><a href=\"" + value + "\">Slides</a></div>";
  }
  document.getElementById("slides-section").innerHTML = content;
}
