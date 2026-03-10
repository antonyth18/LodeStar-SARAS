/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Roadmap } from '../models/Roadmap';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RoadmapService {
  /**
   * Get learning roadmap
   * @returns Roadmap Learning roadmap data
   * @throws ApiError
   */
  public static getRoadmap(): CancelablePromise<Roadmap> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/roadmap',
    });
  }
}
