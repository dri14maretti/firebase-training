import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
	selector: 'app-task-dialog',
	templateUrl: './task-dialog.component.html',
	styleUrls: ['./task-dialog.component.scss'],
})
export class TaskDialogComponent implements OnInit {
	task: Task = { title: '' };

	constructor(private taskService: TaskService) {}

	ngOnInit(): void {}

	onSave(): void {
		this.taskService.create(this.task).then(() => console.log('task created'));
	}
}
