import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { DescriptionComponent } from './components/description/description.component';
import { WorkComponent } from './components/work/work.component';
import { TimelineComponent } from './components/timeline/timeline.component'
import { FooterComponent } from './components/footer/footer.component';
import { RoomComponent } from './components/room/room.component';
import { SkillsComponent } from './components/skills/skills.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HeroComponent,
    DescriptionComponent,
    SkillsComponent,
    WorkComponent,
    TimelineComponent,
    RoomComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    NavbarComponent,
    HeroComponent,
    DescriptionComponent,
    SkillsComponent,
    WorkComponent,
    TimelineComponent,
    RoomComponent,
    FooterComponent
  ]
})
export class SharedModule { }
