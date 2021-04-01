import { TaskService } from './components/task.service';
import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskDialogComponent } from './components/task-dialog/task-dialog.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatLineModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
	declarations: [
		AppComponent,
		TaskItemComponent,
		TaskListComponent,
		TaskDialogComponent,
	],

	// entryComponents: [TaskDialogComponent],

	imports: [
		BrowserAnimationsModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		MatListModule,
		MatLineModule,
		MatSlideToggleModule,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		MatDialogModule,
		MatInputModule,
		MatFormFieldModule,
		FormsModule,
	],
	providers: [TaskService],
	bootstrap: [AppComponent],
})
export class AppModule {}
