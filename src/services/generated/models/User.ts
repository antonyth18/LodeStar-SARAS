/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type User = {
  id?: string;
  name?: string;
  email?: string;
  role?: User.role;
};
export namespace User {
  export enum role {
    ADMIN = 'admin',
    SUPER_ADMIN = 'super-admin',
    STUDENT = 'student',
    PARENT = 'parent',
    COUNSELOR = 'counselor',
  }
}
