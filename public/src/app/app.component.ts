import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Team Manager';
  constructor(private _httpService: HttpService, 
    private _router: Router){}

  ngOnInit(){
    this._router.navigate(['players'])
  }
}
