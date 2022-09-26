import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Injectable } from '@angular/core';
import { Course } from "../model/course";
import { Observable } from "rxjs";
import { CoursesService } from "./courses.service";
import { first } from "rxjs/operators";

@Injectable()
export class CourseResolver implements Resolve<Course> {
    course: Observable<Course>;

    constructor(
        private coursesService: CoursesService,
        private router: Router
    ) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
        return this.coursesService.loadCourseByUrl(route.paramMap.get('courseUrl')).pipe(first());
    }
}