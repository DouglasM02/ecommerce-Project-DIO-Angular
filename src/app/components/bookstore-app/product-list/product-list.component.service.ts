import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()

export class BooksService {
  private url = "url";

  httpOptions = {
    Headers: new HttpHeaders({"content-type": "application/json"})
  }

  constructor(private http: HttpClient) {}

  getBook() {
    return this.http.get(this.url)
  }


}
