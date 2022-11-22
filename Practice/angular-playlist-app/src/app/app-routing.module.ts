import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {YoutubePlaylistComponent} from "./youtube-playlist/youtube-playlist.component";

const routes: Routes = [
  {
    path: 'youtube',
    component: YoutubePlaylistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
