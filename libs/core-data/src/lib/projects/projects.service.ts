import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project.model';

const BASE_URL = 'https://bb-base-server.herokuapp.com';
const MODEL = 'projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  all(): Observable<Project[]> {
    return this.http.get<Project[]>(this.getUrl());
  }

  findOne(id: string): Observable<Project> {
    return this.http.get<Project>(this.getUrlWithId(id));
  }

  create(project: Project): Observable<Project> {
    return this.http.post<Project>(this.getUrl(), project);
  }

  update(project: Project): Observable<Project> {
    return this.http.patch<Project>(this.getUrlWithId(project.id), project);
  }

  delete(project: Project): Observable<Project> {
    return this.http.delete<Project>(this.getUrlWithId(project.id));
  }

  private getUrl(): string {
    return `${BASE_URL}/${MODEL}`;
  }

  private getUrlWithId(id: string): string {
    return `${this.getUrl()}/${id}`;
  }
}
