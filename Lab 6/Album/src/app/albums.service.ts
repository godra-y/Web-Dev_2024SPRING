import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Album} from "./models";
import {Photos} from "./models";

@Injectable({
  providedIn: 'root'
})

export class AlbumService {
  BASE_URL: string = 'https://jsonplaceholder.typicode.com'

  constructor(private client: HttpClient) {
  }

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`)
  }

  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`)
  }

  addAlbum(post: Album): Observable<Album> {
    return this.client.post<Album>(`${this.BASE_URL}/albums`, post);
  }

  getPhoto(id: number): Observable<Photos []> {
    return this.client.get<Photos[]>(`${this.BASE_URL}/albums/${id}/photos`)
  }

  deleteAlbum(id: number): Observable<Album> {
    return this.client.delete<Album>(`${this.BASE_URL}/albums/${id}`);
  }

  updateAlbum(id: number, newTitle: string): Observable<Album> {
    return this.client.put<Album>(`${this.BASE_URL}/albums/${id}`, {title: newTitle});
  }


}
