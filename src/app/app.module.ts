import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { PreviewpanelComponent } from './components/previewpanel/previewpanel.component';

import { DoorInsertsService } from './services/door-inserts.service';
import { DoorSystemsService } from './services/door-systems.service';
import { DoorDesignsService } from './services/door-designs.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    PreviewpanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DoorInsertsService,
    DoorSystemsService,
    DoorDesignsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
