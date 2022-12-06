const base_url = "https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1";
var url_string = window.location.href;
var url = new URL(url_string);

const get_Id = () => {
  return url.searchParams.get("id");
};

const getSingleNews = async (id) => {
  try {
    const response = await fetch(`${base_url}/news/${id}`);
    const newsData = await response.json();
    displayNewsDetails(newsData);
    console.log(newsData);
  } catch (error) {
    console.log(error);
  }
};

const displayNewsDetails = (data) => {
  var title = document.getElementById("title");
  var url = document.getElementById("url");
  var author = document.getElementById("author");
  var image = document.getElementById("img");

  image.src = data.avatar;
  image.alt = "profile picture";

  title.innerText = data.title;
  author.innerText = `Published by ${data.author}`;
  url.innerText = data.url;
};

window.onload = getSingleNews(get_Id());
