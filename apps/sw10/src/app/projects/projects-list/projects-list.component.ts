import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '@bb/core-data';

@Component({
  selector: 'bb-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  @Input() projects: Project[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
