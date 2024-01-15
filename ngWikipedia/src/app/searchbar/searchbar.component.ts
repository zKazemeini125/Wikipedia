import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-searchbar",
  templateUrl: "./searchbar.component.html",
  styleUrl: "./searchbar.component.css",
})
export class SearchbarComponent {
  term: string = "";
  @Output() onSearch = new EventEmitter<string>();
  OnChangeInput(value: string) {
    this.term = value;
  }

  OnSubmit(event: any) {
    event.preventDefault();
    this.onSearch.emit(this.term);
  }
}
