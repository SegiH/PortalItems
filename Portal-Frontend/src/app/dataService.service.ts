import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable()
export class DataService {
     authParam: string = null;
     items: [];

     constructor(private http: HttpClient,  private storage: Storage) {
         this.getAuthParam();
      }

     async getAuthParam() {
          if (this.authParam == null) {
               await this.storage.create();

               this.authParam = await this.storage.get('AuthParam');
          }

          return this.authParam;
     }

     getItems() {
          return this.http.get<any>(`https://portalitems.hovav.org/?authParam=${this.authParam}`)
               .pipe(
                    catchError(this.handleError)
               );
     }

     handleError(error: Response | any) {
          if (error.error instanceof Error) {
               const errMessage = error.error.message;

               return throwError(errMessage);
               // Use the following instead if using lite-server
               // return Observable.throw(err.text() || 'backend server error');
          }

          return throwError(error || 'Node.js server error');
     }

     async setAuthParam(authParam) {
          this.authParam=authParam;

          await this.storage.set('AuthParam', this.authParam);
     }
}