import { Component } from '@angular/core';
import { Observable, catchError, of, switchMap, tap } from 'rxjs';
import { LikeComm } from 'src/app/Interface/LikeComm.interface';
import { LikeComService } from 'src/app/service/like-com.service';
import { User } from 'src/app/Interface/User.interface';
import { SessionService } from '../../service/session.service';

@Component({
  selector: 'app-like-comm',
  templateUrl: './like-comm.component.html',
  styleUrls: ['./like-comm.component.css']
})
export class LikeCommComponent {

  loggedIn: boolean = false;
  isLiked: boolean = false;
  isDisliked: boolean = false;
  likeCount: number = 132;
  dislikeCount: number = 11;
  commentText: string = '';
  comments: LikeComm[] = [];
  userComment$: Observable<User[]>;
  allComm$: Observable<LikeComm[]>

  constructor(private likeCommService: LikeComService,
    private sessionStorage: SessionService) {
  }

  like(): void {
    if (this.loggedIn) {
      if (!this.isLiked) {
        if (this.isDisliked) {
          this.dislikeCount--;
          this.isDisliked = false;
        }
        this.likeCount++;
        this.isLiked = true;
      } else {
        this.likeCount--;
        this.isLiked = false;
      }
    } else {
      alert("Samo logovani korisnici mogu lajkovati")
    }
  }

  dislike(): void {
    if (this.loggedIn) {
      if (!this.isDisliked) {
        if (this.isLiked) {
          this.likeCount--;
          this.isLiked = false;
        }
        this.dislikeCount++;
        this.isDisliked = true;
      } else {
        this.dislikeCount--;
        this.isDisliked = false;
      }
    } else {
      alert("Samo logovani korisnici mogu dislajkovati")
    }
  }

  addComment() {
    if (this.loggedIn) {
      if (this.commentText.trim() !== '') {
        const userId =+ localStorage.getItem('user');
        const name = localStorage.getItem('name');
        this.likeCommService.addLikeComment(this.likeCount, this.dislikeCount, this.commentText, name, userId).pipe(
          tap(response => {
            this.commentText = '';
            this.saveCommentToSession();
          }),
          switchMap( () => this.getAllCo())
        ).subscribe(() => {
          console.log("error subs");
        })
      }
    } else {
      alert("samo logovani korisnici mogu komentarisati i lajkovati")
    }
  }

  saveCommentToSession() {
    this.sessionStorage.saveCommentToSessionStorage(this.comments);
  }

  getAllCo(): Observable<LikeComm[]> {
    return this.allComm$ = this.likeCommService.getAllCom().pipe(
      catchError(error => {
        console.log("error");
        return of([])
      })
    )
  }

  ngOnInit() {
    this.loggedIn = this.likeCommService.checkToken();
    this.getAllCo().subscribe(user => {
      console.log(user);
    })
    const retrievedUserComment = this.sessionStorage.getUserFromSessionStorage();
    this.userComment$ = of(retrievedUserComment ? Array.isArray(retrievedUserComment) ? retrievedUserComment : [retrievedUserComment] : []);
  }
};
