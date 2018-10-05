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
  SHOW_CONTENT_LENGTH : number = 200

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

  briefContent(str: string) : string {
    return (str.length >= this.SHOW_CONTENT_LENGTH) ? 
    str.substr(0,this.SHOW_CONTENT_LENGTH-4)+'...' : str
  }

}
