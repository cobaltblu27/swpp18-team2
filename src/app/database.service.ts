import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { tap } from 'rxjs/operators'
import { Observable, of } from 'rxjs'
import { MessageService } from './message.service'

import { Article } from './article'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private articlesUrl = '/api/articles/'

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }

  
  getArticles(): Promise<Article[]>{
    return this.http.get<Article[]>(this.articlesUrl)
    .pipe(tap(_ => this.log('fetched articles')))
    .toPromise()
    .catch(this.handleError('getArticles'))
  }

  getArticle(id: number): Promise<Article>{
    return this.http.get<Article>(`${this.articlesUrl}${id}`)
    .pipe(tap(_ => this.log(`fetched article with id=${id}`)))
    .toPromise()
    .catch(this.handleError<Article>(`getArticle id=${id}`))
  }


  private handleError<T> (operation = 'operation', result?: T){
    return (error: any) : Promise<T> => {
      console.error(error)
      this.log(`${operation} failed: ${error.message}`)
      return Promise.resolve(result as T)
    }
  }

  private log(message: string): void {
    this.messageService.add('DatabaseService: ' + message)
  }
}
