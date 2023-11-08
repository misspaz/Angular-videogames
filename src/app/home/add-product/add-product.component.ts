import { Component } from '@angular/core';
import { IVideogame } from '../models/videogame.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from './../home.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  videogameForm = new FormGroup({
    _id: new FormControl<number>(0),
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    genre: new FormControl<string>(''),
    year: new FormControl<number>(0),
    country: new FormControl<string>('', [Validators.required]),
    image: new FormControl<string>('', [Validators.required]),
  });

  constructor(private homeService: HomeService) {}

  save(): void {
    if (this.videogameForm.valid) {
      let title = this.videogameForm.get('title')?.value ?? '';
      let genre = this.videogameForm.get('genre')?.value ?? '';
      let year = this.videogameForm.get('year')?.value ?? 0;
      let country = this.videogameForm.get('country')?.value ?? '';
      let image = this.videogameForm.get('image')?.value ?? '';

      let videogame: IVideogame = {
        title: title,
        genre: genre,
        year: year,
        country: country,
        image: image,
      };

      this.homeService.createProduct(videogame).subscribe((data) => {
        console.log('Videojuego añadido', data);
        this.resetForm();
      });
    } else {
      console.log('Formulario no válido');
    }
  }

  resetForm(): void {
    this.videogameForm.reset();
  }

  update(): void {
    if (this.videogameForm.valid) {
      let title = this.videogameForm.get('title')?.value ?? '';
      let genre = this.videogameForm.get('genre')?.value ?? '';
      let year = this.videogameForm.get('year')?.value ?? 0;
      let country = this.videogameForm.get('country')?.value ?? '';
      let image = this.videogameForm.get('image')?.value ?? '';

      let videogame: IVideogame = {
       
        title: title,
        genre: genre,
        year: year,
        country: country,
        image: image,
      };

      this.homeService.searchVideoGameByTitle(title).subscribe((id) => {
        if (id) {
          this.homeService.updateProduct(videogame).subscribe((data) => {
            console.log('Videojuego actualizado', data);
          });
        }
      });
    }
  }
}

// PRIMERA VERSIÓN SIN REACTIVE FORM

// constructor(private homeService: HomeService){}

// title: string = '';
// titleToUpdate: string = '';
// genre: string = '';
// genreToUpdate: string = '';
// year: number = 0;
// yearToUpdate: number = 0;
// country: string = '';
// countryToUpdate: string = '';
// image: string = '';
// imageToUpdate: string = '';
// createdProduct: IVideogame | undefined;
// productToUpdate: IVideogame | undefined;
// titleToSearch: string = '';

//   createProduct(): void {
//     let product: IVideogame = {
//       _id: undefined,
//       title: this.title,
//       genre: this.genre,
//       year: this.year,
//       country: this.country,
//       image: this.image,
//     };

//     this.homeService
//       .createProduct(product)
//       .subscribe((data) => (this.createdProduct = data));

//     this.title = '';
//     this.genre = '';
//     this.year = 0;
//     this.country = '';
//     this.image = '';
//   }

//   loadVideogameByTitle(): void {
//     this.homeService.getProductByTitle(this.titleToSearch).subscribe((data) => {
//       this.productToUpdate = data;
//       this.titleToUpdate = data.title;
//       this.genreToUpdate = data.genre;
//       this.yearToUpdate = data.year;
//       this.countryToUpdate = data.country;
//       this.imageToUpdate = data.image;
//     });
//   }

//   updateProduct(): void {
//     if (!this.productToUpdate) return;
//     this.productToUpdate.title = this.titleToUpdate;
//     this.productToUpdate.year = this.yearToUpdate;
//     this.productToUpdate.genre = this.genreToUpdate;
//     this.productToUpdate.country = this.countryToUpdate;
//     this.productToUpdate.image = this.imageToUpdate;

//     this.homeService.updateProduct(this.productToUpdate).subscribe((data) => {
//       this.productToUpdate = data;
//     });
//   }
// }
