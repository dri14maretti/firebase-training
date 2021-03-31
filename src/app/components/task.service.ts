import { Task } from './../models/task.model';
import {
	AngularFirestore,
	AngularFirestoreCollection,
} from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { promise } from 'selenium-webdriver';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class TaskService {
	tasks: AngularFirestoreCollection<Task>;

	constructor(private db: AngularFirestore) {
		this.tasks = this.db.collection<Task>('/tasks');
	}

	create(task: Task): Promise<void> {
		const uid = this.db.createId();
		return this.tasks.doc<Task>(uid).set({
			uid,
			title: task.title,
			done: false,
		});
	}

	update(task: Task): Promise<void> {
		return task.uid
			? this.tasks.doc<Task>(task.uid).update(task)
			: this.tasks.doc<Task>('').update(task); //Check se aquele uid do parametro existe, para que possa ser passado direto pra dentro do firebase
	}

	delete(task: Task): Promise<void> {
		return task.uid
			? this.tasks.doc<Task>(task.uid).delete()
			: this.tasks.doc<Task>('').delete(); //Check se aquele uid do parametro existe, para que possa ser excluído direto de dentro do firebase
	}

	get(uid: string): Observable<Task> {
		return this.tasks.doc<Task>(uid).valueChanges();
	}
}
