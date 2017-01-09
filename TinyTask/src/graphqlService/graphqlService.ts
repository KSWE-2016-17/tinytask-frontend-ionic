import {AuthHttp} from "angular2-jwt";

import {AuthService} from "../services/auth/auth.service";

export class GraphQLService {
  private url: string = "https://tinytaskgraphql.herokuapp.com";

  auth: AuthService;

  constructor(private authHttp: AuthHttp) {
  }

  getTask(task_id: any): Promise<any> {
    return this.sendPostRequest({
      query: `{ task(_id: "${task_id}") { _id name description category createdBy { _id email displayName } assignedTo { _id email displayName } position { longitude latitude } starts payment } }`
    }).then((data) => {
      return data.json().data.task;
    });
  }

  getAllTasks(): Promise<any> {
    return this.sendPostRequest({
      query: `{ tasks { _id name description category createdBy { _id email displayName } assignedTo { _id email displayName } position { longitude latitude } starts payment } }`
    }).then((data) => {
      return data.json().data.tasks;
    });
  }

  getTaskPosition(task_id: any): Promise<any> {
    return this.sendPostRequest({
      query: `{ task(_id: "${task_id}") { position { longitude latitude } } }`
    }).then((data) => {
      return data.json().data.task.position;
    });
  }

  getTaskBewerber(task_id: any): Promise<any> {
    return this.sendPostRequest({
      query: `{ applications { _id task { _id name } user { _id email displayName } } }`
    }).then((data) => {
      let result = [];

      data.json().data.applications.forEach((it) => {
        if (it.task._id === task_id) {
          result.push(it);
        }
      });

      return result;
    });
  }

  getUser(user_id: any): Promise<any> {
    return this.sendPostRequest({
      query: `{ user(_id: "${user_id}") { _id email displayName picture address } }`
    }).then((data) => {
      return data.json().data.user;
    });
  }

  getAllUsers(): Promise<any> {
    return this.sendPostRequest({
      query: `{ users { _id email displayName picture address } }`
    }).then((data) => {
      return data.json().data.users;
    });
  }

  getUserRating(user_id: any): Promise<any> {
    return this.sendPostRequest({
      query: `{ ratings { _id assignedTo { _id displayName } task { _id name } isExecutor value comment } }`
    }).then((data) => {
      let result = [];

      data.json().data.ratings.forEach((it) => {
        if (it.assignedTo._id === user_id) {
          result.push(it);
        }
      });

      return result;
    });
  }

  newTask(newTask: any): Promise<any> {
    return this.sendPostRequest({
      query: `mutation { createTask(record: { name: "${newTask.name}", description: "${newTask.description}", category: "${newTask.category}", createdBy { _id: "${newTask.createdBy._id}" } assignedTo { _id: "${newTask.assignedTo._id}" } position { longitude: ${newTask.position.longitude}, latitude: ${newTask.position.latitude} } starts: "${newTask.starts}", payment: ${newTask.payment} }) { record { _id name description category createdBy { _id email displayName } assignedTo { _id email displayName } position { longitude latitude } starts payment } } }`
    }).then((data) => {
      return data.json().data.record;
    });
  }

  deleteTask(task_id: any): Promise<any> {
    return this.sendPostRequest({
      query: `mutation { removeTask(_id: "${task_id}") { record { _id } } }`
    }).then((data) => {
      return data.json().data.record;
    });
  }

  newUser(newUser: any): Promise<any> {
    return this.sendPostRequest({
      query: `mutation { createUser(record: { email: "${newUser.email}", displayName: "${newUser.displayName}", picture: "${newUser.picture}", address: "${newUser.address}" }) { record { _id email displayName picture address } } }`
    }).then((data) => {
      return data.json().data.record;
    });
  }

  newUserRating(newUserRating: any): Promise<any> {
    return this.sendPostRequest({
      query: `mutation { createRating(record: { assignedTo: { _id: "${newUserRating.assignedTo._id}" }, task: { _id: "${newUserRating.task._id}" }, isExecutor: ${newUserRating.isExecutor}, value: ${newUserRating.value}, comment: "${newUserRating.comment}" }) { record { _id assignedTo { _id displayName } task { _id name } isExecutor value comment } } }`
    }).then((data) => {
      return data.json().data.record;
    });
  }

  deleteUser(user_id: any): Promise<any> {
    return this.sendPostRequest({
      query: `mutation { removeUser(_id: "${user_id}") { record { _id } } }`
    }).then((data) => {
      return data.json().data.record;
    });
  }

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error);

    return Promise.reject(error.message || error);
  }

  private sendPostRequest(data: any): Promise<any> {
    return this.authHttp
      .post(this.url, data)
      .toPromise()
      .catch(GraphQLService.handleError);
  }
}
