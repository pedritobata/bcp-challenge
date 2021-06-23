import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //console.log(this.route.snapshot.queryParams);
    this.title = this.route.snapshot.queryParams['title'];
  }

}
