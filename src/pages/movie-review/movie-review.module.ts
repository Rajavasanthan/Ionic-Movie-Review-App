import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieReviewPage } from './movie-review';

import { DirectivesModule } from "../../directives/directives.module";
import { ComponentsModule } from "../../components/components.module";
import { MatDialogModule } from '@angular/material';
import { AddReviewComponent } from "../../components/add-review/add-review";

@NgModule({
  declarations: [
    MovieReviewPage
  ],
  imports: [
    IonicPageModule.forChild(MovieReviewPage),
    DirectivesModule,
    ComponentsModule,
    MatDialogModule
  ],
  entryComponents: [
   AddReviewComponent
  ],
})
export class MovieReviewPageModule {}
