import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../models/Artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchStr: string;
  public searchRes: Artist[];

  constructor(
    private _spotifyService: SpotifyService
  ) { }

  ngOnInit() {
  }

  searchMusic() {
    this._spotifyService.getToken()
      .subscribe(res => {
        this._spotifyService.searchMusic(this.searchStr, 'artist', res.access_token).subscribe(res => {
          console.log(res);
          this.searchRes = res.artists.items;
        });
      });
  }

}
