import {Component, OnInit} from '@angular/core';
import {Album} from "../models";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {AlbumService} from "../albums.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  posts: Album[];
  newAlbum: Album;
  loaded: boolean;

  constructor(private albumService: AlbumService) {
    this.posts = [];
    this.newAlbum = {} as Album;
    this.loaded = true;
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.loaded = false;
    this.albumService.getAlbums().subscribe((posts) =>{
      this.posts = posts;
      this.loaded = true;
    })
  }

  addAlbum(){
    this.loaded = false;
    this.albumService.addAlbum(this.newAlbum).subscribe((post) => {
      this.posts.push(post);
      this.updateAlbumIds();
      this.loaded = true;
      this.newAlbum = {} as Album;
    });
  }

  updateAlbumIds() {
    for(let i = 0; i < this.posts.length; i++) {
      this.posts[i].id = i + 1;
    }
  }

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe((response : Album) => {
      this.posts = this.posts.filter(a => a.id != id);
    })
  }
}
