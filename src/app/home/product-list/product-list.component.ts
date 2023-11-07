import { Component, OnInit } from '@angular/core';
import { IVideogame } from '../models/videogame.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  videogames: IVideogame[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.homeService
      .getProducts()
      .subscribe((videogames) => (this.videogames = videogames));
  }
}
