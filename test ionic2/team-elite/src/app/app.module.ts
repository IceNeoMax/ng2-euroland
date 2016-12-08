import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TournamentPage } from '../pages/tournament/tournament';
import { HomePage } from '../pages/home/home';
import { TeamsPage } from '../pages/teams/teams';
import { TeamDetailPage } from '../pages/team-detail/team-detail';
import { TourDetailPage } from '../pages/tour-detail/tour-detail';
import { NewsPage } from '../pages/news/news';
import { Data } from '../pages/providers/data';
import { Tab2TeamsPage } from '../pages/tab2-teams/tab2-teams';
import { Tab1DesPage } from '../pages/tab1-des/tab1-des';


@NgModule({
  declarations: [
    MyApp,
    TournamentPage,
    HomePage,
    TeamsPage,
    TeamDetailPage,
    TourDetailPage,
    NewsPage,
    Tab1DesPage,
    Tab2TeamsPage
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
    NewsPage,
    Tab1DesPage,
    Tab2TeamsPage
  ],
  providers: [Data,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
