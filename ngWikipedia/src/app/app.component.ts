import { Component } from "@angular/core";
import { WikipediaService } from "./_services/wikipedia.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  resault: [] = [];
  constructor(private wikipediaService: WikipediaService) {}

  OnGetTerm(value: string) {
    this.wikipediaService.onSearch(value).subscribe((response: any) => {
      this.resault = response.query.search;
      console.log(this.resault);
    });
  }
}
