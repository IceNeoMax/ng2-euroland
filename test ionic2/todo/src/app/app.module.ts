import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EditTodo } from '../pages/edit-todo/edit-todo';
import { Data } from '../providers/data';
import { Storage } from '@ionic/storage';
import { TestPage } from '../pages/test/test';
import { ElasticHeader } from '../components/elastic-header/elastic-header';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EditTodo,
    TestPage,
    ElasticHeader
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EditTodo,
    TestPage
  ],
  providers: [Data, Storage,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
