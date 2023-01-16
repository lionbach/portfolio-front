import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { TitleComponent } from './title/title.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { InfoListComponent } from './info-list/info-list.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { InfoListMiniComponent } from './info-list-mini/info-list-mini.component';

@NgModule({
  declarations: [									
    AppComponent,
      BannerComponent,
      TitleComponent,
      AboutMeComponent,
      InfoListComponent,
      SkillsComponent,
      ExperienceComponent,
      InfoListMiniComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
