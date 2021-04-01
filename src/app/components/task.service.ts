import { Task } from './../models/task.model';
import {
	AngularFirestore,
	AngularFirestoreCollection,
} from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { CollectionReference } from '@firebase/firestore-types';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class TaskService {
	tasks: AngularFirestoreCollection<Task>;

	constructor(private db: AngularFirestore) {
		this.tasks = this.db.collection<Task>(
			'/tasks',
			(ref: CollectionReference) =>
				ref.orderBy('done', 'asc').orderBy('title', 'asc')
		);
	}

	create(task: Task): Promise<void> {
		const uid = this.db.createId();
		return this.tasks.doc<Task>(uid).set({
			uid,
			title: task.title,
			done: false,
			date: task.date,
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

	// get(uid: string): Promise<void> { //Corrigir
	// 	return this.tasks.doc<Task>(uid).valueChanges();
	// }
}
