import { Component, OnInit } from '@angular/core'
import { DatabaseService } from '../database.service'
import { Article } from '../article'

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.css']
})
export class MainFeedComponent implements OnInit {

  articles: Article[]

  constructor(
    private dbService: DatabaseService
    ) { }

  ngOnInit() {
    this.getArticle()
  }

  getArticle(): void {
    this.dbService.getArticles()
    .then(articles => this.articles = articles)
  }

  breifContent(str: string) : string {
    return (str.length > 50) ? str.substr(0,50) : str
  }

}
