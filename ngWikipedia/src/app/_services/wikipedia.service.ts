import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  onSearch(value: string) {
    return this.http.get("https://en.wikipedia.org/w/api.php", {
      params: {
        action: "query",
        format: "json",
        list: "search",
        UTF8: true,
        srsearch: value,
        origin: "*",
      },
    });
  }
}
