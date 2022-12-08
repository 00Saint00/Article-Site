const base_url = "https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1";

const createForm = document.getElementById("createForm");
const author = document.getElementById("author");
const title = document.getElementById("title");
const newsUrl = document.getElementById("newsUrl");
const avatarUrl = document.getElementById("avatarUrl");

const submitNews = async () => {
  let body = {
    author: author.value.trim(),
    title: title.value.trim(),
    url: newsUrl.value.trim(),
    avatar: avatarUrl.value.trim(),
  };
  try {
    const response = await fetch(`${base_url}/news`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let jsonRes = await response.json();
    console.log(jsonRes);
    alert("News created successfully");
    window.location.replace("/");
  } catch (error) {
    alert(error);
  }
};

createForm.addEventListener("submit", function (e) {
  e.preventDefault();
  submitNews();
});
