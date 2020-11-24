import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  searchResults(title): Observable<any> {
    const endPoint = 'http://www.omdbapi.com/?s=' + title + '&apikey=37ab874c';
    return this.http.get(endPoint).pipe(map(res => {
      return res["Search"];
    }

    ));
  }

  searchById(id): Observable<any> {
    const endPoint = 'http://www.omdbapi.com/?i=' + id + '&apikey=37ab874c';
    return this.http.get(endPoint);
  }
}
