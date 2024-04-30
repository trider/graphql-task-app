import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { AppRun } from './schema/schema';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private apollo: Apollo,
  ) { }

  public appRun(api:string, command:string, payload: any): Observable<any> {

    return this.apollo.mutate({
      mutation: AppRun,
      variables: {
        api: api,
        command: command,
        payload: payload
      },

    })
  }
}
