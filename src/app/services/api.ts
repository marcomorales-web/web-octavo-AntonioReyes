import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Api {

  private url = "https://mcp.zylalabs.com/mcp?apikey=TU_API_KEY";

  constructor(private http: HttpClient) {}

  buscarApi(query:string){

    const body = {
      jsonrpc: "2.0",
      method: "search_catalog",
      params: {
        query: query
      },
      id: 1
    };

    return this.http.post(this.url, body);
  }

}