=

const getAllNews = async () => {
  try {
    const response = await fetch(`${base_url}/news`);
    const data = await response.json();
    displayNews(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

let displayNews = (data) => {
  data.map((item) => {
    var articleContainer = document.getElementById("articleContainer");

    var article = document.createElement("div");
    var article_image = document.createElement("img");
    var title = document.createElement("h4");
    var link = document.createElement("a");

    //setting the title for an article
    title.innerText = item.title;

    //setting the image for an article
    article_image.src = item.avatar;
    article_image.alt = "article image";
    article_image.width = "200";
    article_image.onerror = () => {
      article_image.onerror = null;
      article_image.src = "../assets/images/leo.jpg";
    };

    //setting the link
    link.href = `./pages/content.html?id=${item.id}`;
    link.target = "_blank";
    link.innerText = "Read more";

    //append all article
    article.appendChild(article_image);
    article.appendChild(title);
    article.appendChild(link);

    articleContainer.appendChild(article);
  });
};

window.onload = getAllNews();
