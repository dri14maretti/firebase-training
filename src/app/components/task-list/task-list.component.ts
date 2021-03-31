import { TaskService } from './../task.service';
import { Task } from './../../models/task.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-task-list',
	templateUrl: './task-list.component.html',
	styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
	tasks$: Observable<Task[]>;
	selectedTask: Task;

	constructor(private taskService: TaskService) {
		this.selectedTask = { title: '' };
		this.tasks$ = this.taskService.tasks.valueChanges();
	}

	ngOnInit(): void {
		this.tasks$ = this.taskService.tasks.valueChanges();
	}

	onPerformTask(task: Task): void {
		console.log(task);
	}
}
