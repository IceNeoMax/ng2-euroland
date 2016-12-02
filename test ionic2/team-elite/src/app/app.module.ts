import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TournamentPage } from '../pages/tournament/tournament';
import { HomePage } from '../pages/home/home';
import { TeamsPage } from '../pages/teams/teams';


@NgModule({
  declarations: [
    MyApp,
    TournamentPage,
    HomePage,
    TeamsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
   TournamentPage,
   HomePage,
   TeamsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
