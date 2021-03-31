import { TaskService } from './components/task.service';
import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { MatListModule } from '@angular/material/list';
import { MatLineModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TaskListComponent } from './components/task-list/task-list.component';

@NgModule({
	declarations: [AppComponent, TaskItemComponent, TaskListComponent],
	imports: [
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		MatListModule,
		BrowserAnimationsModule,
		MatLineModule,
		MatSlideToggleModule,
		MatToolbarModule,
	],
	providers: [TaskService],
	bootstrap: [AppComponent],
})
export class AppModule {}
