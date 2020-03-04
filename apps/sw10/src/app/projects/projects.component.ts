import { Component, OnInit } from '@angular/core';
import { Project, ProjectsService } from '@bb/core-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'bb-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;
  project: Project;
  form: FormGroup;

  constructor(
    private projectsService: ProjectsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getProjects();
    this.initForm();
  }

  save(project:Project): void {
    if (project.id) {
      this.update(project);
    } else {
      this.create(project);
    }
  }

  create(project: Project): void {
    this.projectsService.create(project)
      .subscribe(() => {
        this.reset();
        this.getProjects();
      })
  }

  update(project: Project): void {
    this.projectsService.update(project)
      .subscribe(() => {
        this.reset();
        this.getProjects();
      })
  }

  delete(project: Project): void {
    this.projectsService.delete(project)
      .subscribe(() => {
        this.reset();
        this.getProjects();
      })
  }

  reset(): void {
    this.form.reset();
    this.project = {} as Project;
    Object.keys(this.form.controls).forEach((key) => {
      this.form.get(key).setErrors(null);
    })
  }

  select(project: Project): void {
    this.project = project;
    this.form.patchValue(project)
  }

  private getProjects(): void {
    this.projects$ = this.projectsService.all();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      id: [null],
      title: ['', Validators.compose([
        Validators.required
      ])],
      details: ['', Validators.compose([
        Validators.required
      ])],
      importanceLevel: [0]
    })
  }

}
