import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { Photos } from "../models";
import { AlbumService } from "../albums.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit{
  gallery: Photos[];
  id: number;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {
    this.gallery = [];
    this.id = 0;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.albumService.getPhoto(id).subscribe((photo) => {
        this.gallery = photo;
      })
    })
  }
}


