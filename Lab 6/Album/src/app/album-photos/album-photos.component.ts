import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photos } from "../models";
import { AlbumService } from "../albums.service";

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit{
  album: Photos;
  loaded: boolean;
  gallery: Photos[];

  constructor(private route: ActivatedRoute, private postService: AlbumService) {
    this.album = {} as Photos;
    this.loaded = true;
    this.gallery = [];
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if (_id) {
        let id = +_id;
        this.getPhoto(id);
      }
    });
  }


  getPhoto(id: number): void {
    this.loaded = false;
    this.postService.getPhoto(id).subscribe((album) =>{
      this.gallery = album as Photos[];
      this.loaded = true;
    })
  }
}

