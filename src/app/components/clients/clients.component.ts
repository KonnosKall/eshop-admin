import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IClient } from 'src/app/interfaces/IClient';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
