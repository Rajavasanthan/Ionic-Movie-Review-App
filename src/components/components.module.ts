import { NgModule } from '@angular/core';
import { AddReviewComponent } from './add-review/add-review';
import { MatDialogModule,MatInputModule,MatButtonModule } from '@angular/material';
import { FormsModule } from "@angular/forms";
import {IonicModule} from 'ionic-angular';


@NgModule({
	declarations: [AddReviewComponent,
    ],
	imports: [MatDialogModule,FormsModule,MatInputModule,MatButtonModule,IonicModule],
	exports: [AddReviewComponent
	],
	providers : []
})
export class ComponentsModule {}
