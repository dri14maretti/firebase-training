import { Task } from 'src/app/models/task.model';
import { TaskDialogComponent } from './../task-dialog/task-dialog.component';
import { TaskService } from './../task.service';
import { take } from 'rxjs/operators/take';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
	selector: 'app-task-list',
	templateUrl: './task-list.component.html',
	styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
	tasks$: Observable<Task[]>;
	selectedTask: Task;
	loading: boolean = true;

	constructor(private taskService: TaskService, private dialog: MatDialog) {
		this.selectedTask = { title: '' };
		this.tasks$ = this.taskService.tasks.valueChanges();
	}

	ngOnInit(): void {
		this.tasks$ = this.taskService.tasks.valueChanges();
		this.tasks$.pipe(take(1)).subscribe(() => (this.loading = false));
	}

	onPerformTask(task: Task): void {
		task.done = !task.done;
		this.taskService.update(task);
	}

	showDialog(task?: Task): void {
		const config: MatDialogConfig<any> = task ? { data: { task } } : {};
		this.dialog.open(TaskDialogComponent, config);
	}

	onDelete(task: Task): void {
		this.taskService.delete(task);
	}
}
