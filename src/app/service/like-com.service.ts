import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { LikeComm } from '../Interface/LikeComm.interface';
import { BASE_URL } from '../const/url';
@Injectable({
  providedIn: 'root'
})
export class LikeComService {

  constructor(private http: HttpClient) { }

  checkToken(): boolean{
    const token = localStorage.getItem('token');
    if(token){
      console.log("imatoken");
      return true;
    }else{
      console.log("nema tokena");
      return false;
    }
  };

  addLikeComment(likeCount: number, dislike: number, commentText: string, name: string, userId: number): Observable<LikeComm>{
    if (!this.checkToken()) {
      throw new Error("Nemate pristup. Morate se prijaviti da biste lajkovali, dislajkovali i ostavljali komentare.");
    }
    const likeDislikeComment = { likeCount, dislike, commentText, name };
    return this.http.post<LikeComm>(`${BASE_URL}/api/comLike/user/${userId}`, likeDislikeComment);
  }

  getAllCom(): Observable<LikeComm[]>{
    return this.http.get<LikeComm[]>(`${BASE_URL}/api/allComLike`)
  }
}
