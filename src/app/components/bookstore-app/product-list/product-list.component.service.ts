import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Book } from "./model/Book";

@Injectable()

export class BooksService {

    private  apiUrl = "http://localhost:3000/books";

    httpOptions = {
       Headers: new HttpHeaders({'content-type': 'aplication/json'}) 
    }

    constructor(private http:HttpClient){}

    getBook() {
        return this.http.get(this.apiUrl)
    }

}

