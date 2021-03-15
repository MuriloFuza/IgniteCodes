import { Request, Response } from "express";
import CreateCourseService from './CreateCourseService'

export function createCourse(request: Request, response: Response) {

  CreateCourseService.execute({
    educator: 'Murilo',
    duration: 10,
    name: 'NodeJS',
  });

  CreateCourseService.execute({
    educator: 'Diego',
    duration: 10,
    name: 'ReactJS',
  });

  return response.send();
}
