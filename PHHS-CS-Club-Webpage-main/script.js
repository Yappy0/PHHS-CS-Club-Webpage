var slidesRequest = new XMLHttpRequest();
slidesRequest.open("GET", "https://csclub.pythonanywhere.com/static/slides.json", false);
slidesRequest.send();
if (slidesRequest.status == 200){
  slides = JSON.parse(slidesRequest.responseText);
  content = "";
  entries = Object.entries(slides);
  entries.reverse();
  for (const [key, value] of entries){
    content += "<div class=\"content\"><h1>" + key + "</h1><p><a href=\"" + value + "\">Slides</a></p></div>";
  }
  document.getElementById("slides-section").innerHTML = content;
}
