class ArticleApi {
  public articles: number[] = Array.from(Array(45).keys());
  public pageSize = 10;
  public page = 1;

  public getArticles(): number[] {
    const end = this.page * this.pageSize;
    const start = end - this.pageSize;
    console.log('start', start);
    console.log('end', end);
    const result =  this.articles.slice(start, end);
    this.page += 1;
    return result;
  }
}

const myApi = new ArticleApi();
console.log('===> get 1', myApi.getArticles());
console.log('===> get 2', myApi.getArticles());
console.log('===> get 3', myApi.getArticles());
console.log('===> get 4', myApi.getArticles());
console.log('===> get 5', myApi.getArticles());
