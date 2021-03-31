import { Task } from './../../models/task.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-task-item',
	templateUrl: './task-item.component.html',
	styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
	@Input() task: Task;

	@Output() selectTask = new EventEmitter<Task>();

	@Output() performTask = new EventEmitter<Task>();

	constructor() {
		this.task = { title: '' };
	}

	ngOnInit(): void {}

	executeAction1(): void {
		this.selectTask.emit(this.task);
	}
	executeAction2(): void {
		this.performTask.emit(this.task);
	}
}
