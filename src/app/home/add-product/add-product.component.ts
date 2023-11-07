import { Component } from '@angular/core';
import { IVideogame } from '../models/videogame.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  title: string = '';
  titleToUpdate: string = '';
  genre: string = '';
  genreToUpdate: string = '';
  year: number = 0;
  yearToUpdate: number = 0;
  country: string = '';
  countryToUpdate: string = '';
  image: string = '';
  imageToUpdate: string = '';
  createdProduct: IVideogame | undefined;
  productToUpdate: IVideogame | undefined;
  titleToSearch: string = '';


  constructor(private homeService: HomeService) {}

  createProduct(): void {
    let product: IVideogame = {
      _id: undefined,
      title: this.title,
      genre: this.genre,
      year: this.year,
      country: this.country,
      image: this.image,
    };

    this.homeService
      .createProduct(product)
      .subscribe((data) => (this.createdProduct = data));

    this.title = '';
    this.genre = '';
    this.year = 0;
    this.country = '';
    this.image = '';
  }

  loadVideogameByTitle(): void {
    this.homeService.getProductByTitle(this.titleToSearch).subscribe((data) => {
      this.productToUpdate = data;
      this.titleToUpdate = data.title;
      this.genreToUpdate = data.genre;
      this.yearToUpdate = data.year;
      this.countryToUpdate = data.country;
      this.imageToUpdate = data.image;
    });
  }

  updateProduct(): void {
    if (!this.productToUpdate) return;
    this.productToUpdate.title = this.titleToUpdate;
    this.productToUpdate.year = this.yearToUpdate;
    this.productToUpdate.genre = this.genreToUpdate;
    this.productToUpdate.country = this.countryToUpdate;
    this.productToUpdate.image = this.imageToUpdate;

    this.homeService.updateProduct(this.productToUpdate).subscribe((data) => {
      this.productToUpdate = data;
    });
  }
}
