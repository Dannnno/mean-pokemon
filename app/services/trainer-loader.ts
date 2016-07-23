import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ConnectionStrings } from '../config/connection-strings';
import { Trainer } from '../models/trainer';

@Injectable()
export class TrainerLoader {

  constructor(
    private connectionString: string = ConnectionStrings.localDev,
    private http: Http) { }

  loadByTrainerId(trainerId: number): any {
    return this.http.get(this.getIdRoute(trainerId));
  }

  private getIdRoute(id: number): string {
    return `#/api/trainer/${id}`;
  }
}
