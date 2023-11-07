import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IVideogame } from './models/videogame.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  url: string = 'http://localhost:5000/videogames';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<IVideogame[]> {
    return this.httpClient.get<IVideogame[]>(`${this.url}/getallvideogames`);
  }

  getProductById(id: number): Observable<IVideogame> {
    return this.httpClient.get<IVideogame>(`${this.url}/${id}`);
  }

  getProductByTitle(title: string): Observable<IVideogame> {
    return this.httpClient.get<IVideogame>(`${this.url}/${title}`);
  }

  createProduct(product: IVideogame): Observable<IVideogame> {
    return this.httpClient.post<IVideogame>(
      `${this.url}/uploadvideogames`,
      product
    );
  }

  updateProduct(product: IVideogame): Observable<IVideogame> {
    return this.httpClient.put<IVideogame>(
      `${this.url}/${product._id}`,
      product
    );
  }

  deleteProduct(id: number): Observable<IVideogame> {
    return this.httpClient.delete<IVideogame>(`${this.url}/${id}`);
  }
}
