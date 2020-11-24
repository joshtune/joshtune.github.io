import { Component, OnInit } from '@angular/core';
import {ScullyRoutesService} from "@scullyio/ng-lib";
import {Observable} from "rxjs";

export interface ScullyRoute {
  route: string;
  title?: string;
  slugs?: string[];
  published?: boolean;
  slug?: string;
  sourceFile?: string;
  lang?: string;
  [prop: string]: any;
}

@Component({
  selector: 'bej-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  links$: Observable<ScullyRoute[]> = this.scully.available$;

  constructor(private scully: ScullyRoutesService) {}

  ngOnInit() {
    // debug current pages
    this.links$.subscribe((links) => {
      console.log(links);
    });
  }

}
