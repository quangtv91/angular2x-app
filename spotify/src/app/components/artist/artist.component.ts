import { Component, OnInit } from '@angular/core';
import { Artist } from '../models/Artist';
import { Album } from '../models/Album';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id: string;
  public artist: Artist[];
  public albums: Album[];

  constructor(
    private _spotifyService: SpotifyService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        console.log("ID", id);
        this._spotifyService.getToken()
          .subscribe(data => {
            this._spotifyService.getArtist(id, data.access_token)
              .subscribe(artist => {
                this.artist = artist;
                console.log(this.artist);
              });
            this._spotifyService.getAlbums(id, data.access_token)
              .subscribe(albums => {
                this.albums = albums.items;
              });
          });
      });
  }
}

