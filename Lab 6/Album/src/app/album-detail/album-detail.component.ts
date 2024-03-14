import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {Album} from "../models";
import {AlbumService} from "../albums.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  post: Album;
  loaded: boolean;
  newTitle: string;

  constructor(private route: ActivatedRoute,
              private albumService: AlbumService) {
    this.post = {} as Album;
    this.loaded = true;
    this.newTitle = "";
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.get('id')) {
        const postId = Number(params.get('id'));
        this.loaded = false;
        this.albumService.getAlbum(postId).subscribe((post) => {
          this.post = post;
          this.loaded = true;
        });
      }
    });
  }

  updateTitle() {
    this.albumService.updateAlbum(this.post.id, this.newTitle).subscribe((response) => {
      this.post.title = response.title;
      this.newTitle = "";
    })
  }
}
