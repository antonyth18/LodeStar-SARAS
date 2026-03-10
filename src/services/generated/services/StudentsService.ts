/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Student } from '../models/Student';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StudentsService {
  /**
   * Get all students
   * @returns Student List of students
   * @throws ApiError
   */
  public static getStudents(): CancelablePromise<Array<Student>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/students',
    });
  }
}
