import { Component, OnInit } from '@angular/core';
import { LocalStoreService } from '../services/local-store.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  userData: any;

  constructor(
    private storageService: LocalStoreService,
  ) { }

  ngOnInit() {
    this.userData = this.storageService.getUserData();
  }

}
