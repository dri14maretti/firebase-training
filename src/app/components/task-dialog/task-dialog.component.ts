import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskService } from './../task.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
	selector: 'app-task-dialog',
	templateUrl: './task-dialog.component.html',
	styleUrls: ['./task-dialog.component.scss'],
})
export class TaskDialogComponent implements OnInit {
	dialogTitle: string = 'New Task';
	task: Task = { title: '', date: '' };

	constructor(
		@Inject(MAT_DIALOG_DATA) private data: any,
		private dialogRef: MatDialogRef<TaskDialogComponent>,
		private taskService: TaskService
	) {}

	ngOnInit(): void {
		if (this.data) {
			this.dialogTitle = 'Update Task';
			this.task = this.data.task;
		}
	}

	onSave(): void {
		const operation: Promise<void> = !this.data
			? this.taskService.create(this.task)
			: this.taskService.update(this.task);

		operation.then(() => this.dialogRef.close());
	}
}
