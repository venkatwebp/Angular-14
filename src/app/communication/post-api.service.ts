import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {

  constructor(private http: HttpClient) { }

  postUserData(data: any){
    return this.http.post('http://localhost:3000/posts', data)
    .pipe(map((res: any) => {
      return res;
    }))
  }

  getUserData(){
    return this.http.get('http://localhost:3000/posts')
    .pipe(map((res:any)=> {
      return res;
    }))
  }
}
