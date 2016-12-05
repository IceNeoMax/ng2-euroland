import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TournamentPage } from '../pages/tournament/tournament';
import { HomePage } from '../pages/home/home';
import { TeamsPage } from '../pages/teams/teams';
import { TeamDetailPage } from '../pages/team-detail/team-detail';
import { TourDetailPage } from '../pages/tour-detail/tour-detail';
import { NewsPage } from '../pages/news/news';


@NgModule({
  declarations: [
    MyApp,
    TournamentPage,
    HomePage,
    TeamsPage,
    TeamDetailPage,
    TourDetailPage,
    NewsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
   TournamentPage,
   HomePage,
   TeamsPage,
   TeamDetailPage,
    TourDetailPage,
    NewsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
