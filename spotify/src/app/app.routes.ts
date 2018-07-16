import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: SearchComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '',
        component: NavBarComponent
    },
    {
        path: 'artist/:id',
        component: ArtistComponent
    },
    {
        path: 'album/:id',
        component: AlbumComponent
    }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);

