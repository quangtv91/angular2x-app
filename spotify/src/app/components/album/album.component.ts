import { Component, OnInit } from '@angular/core';
import { Album } from '../models/Album';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id: string;
  public album: Album[];

  constructor(
    private _spotifyservice: SpotifyService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params
    .map(params => params['id'])
    .subscribe((id) => {
        this._spotifyservice.getToken()
        .subscribe(data => {
            this._spotifyservice.getAlbum(id, data.access_token)
            .subscribe(album => {
                this.album = album;
            });
        });
    });
  }

}
