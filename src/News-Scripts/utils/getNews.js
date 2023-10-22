import Parser from 'rss-parser';

export default getNews = (siteUrl) => {
  const parser = new Parser();
  parser.parseURL(siteUrl).then((news) => {
    const arrNews = [];
    news.items.forEach((feed) => {
      arrNews.push(feed['content:encoded']);
    });
  });
  return arrNews;
};
