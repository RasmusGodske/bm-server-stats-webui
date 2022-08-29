import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Breadcrump {
  name: string;
  path: string;
}

@Component({
  selector: 'app-page-server-playtime-root',
  templateUrl: './page-server-playtime-root.component.html',
  styleUrls: ['./page-server-playtime-root.component.scss']
})
export class PageServerPlaytimeRootComponent implements OnInit {

  breadcrumps: Breadcrump[] = [];

  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      console.log("path changed", val);
      this.breadcrumps = this.getBreadCrumps();
    });
  }

  getBreadCrumps(): Breadcrump[] {
    const pathParts = this.router.url.split('/');

    // Remove first part
    pathParts.shift();

    for (const pathPart of pathParts) {
      console.log(pathPart);
    }

    const breadcrumps = pathParts.map((str, index) => {
      return {
        name: str,
        path: '/' + pathParts.slice(0, index + 1).join('/'),
      }
    });

    return breadcrumps
  }


  ngOnInit(): void {
  }

}
