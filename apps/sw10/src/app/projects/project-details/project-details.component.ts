import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '@bb/core-data';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'bb-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  selectedProject: Project

  @Input() set project(value: Project) {
    this.selectedProject = Object.assign({}, value)
  }
  @Input() formGroup: FormGroup;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
