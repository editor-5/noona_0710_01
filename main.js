//const API_key = `97a48ff14e5f4a689f2b38b933426b5b`
const API_key = `http://times-node-env.eba-appvq3ef.ap-northeast-2.elasticbeanstalk.com/top-headlines`;
const pageSize = 10;
let page = 2;
let category = "";
let keyword = "";
let newsList = [];
//const getLatestNews = async () =>{
    //const url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_key}`);
    const url = new URL(`https://topnews-api.app/top-headlines?country=us&pageSize=${pageSize}&page=${page}&category=${category}
        &keyword=${keyword}&apiKey=${API_key}`);
    const response = await fetch(url);
    const data = await response.json();
    newsList = data.articles;
    render()
    console.log("dddddd", newsList);
};

const render=()=>{
    const newsHTML = newsList.map(news=>`<div class="row news">
        <div class="col-lg-4">
            <img class="news-img-size" src=${news.urlToImage}>
        </div>
        <div class="col-lg-8">
            <h2>${news.title}</h2>
            <p>
                ${news.description}
            </p>
            <div>
                ${news.source.name} *${news.publishedAt}  
            </div>
        </div>
    </div>`).join('');
            
    document.getElementById("news-board").innerHTML=newsHTML
}
getLatestNews();