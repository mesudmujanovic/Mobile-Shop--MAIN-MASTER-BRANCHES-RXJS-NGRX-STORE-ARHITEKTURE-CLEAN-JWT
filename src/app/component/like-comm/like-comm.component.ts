import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
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

  constructor(private likeCommService: LikeComService,
    private sessionStorage: SessionService) {
  }

  like(): void {
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
  }

  dislike(): void {
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
  }

  addComment() {
    if (this.commentText.trim() !== '') {
      this.likeCommService.addLikeComment(this.likeCount, this.dislikeCount, this.commentText).subscribe(
        (response) => {
          this.commentText = '';
          this.comments.push(response);
          this.saveCommentToSession();
        },
        (error) => {
          console.log('Greška pri dodavanju komentara:', error);
        }
      );
    }
  }

  saveCommentToSession() {
    this.sessionStorage.saveCommentToSessionStorage(this.comments);
  }

  ngOnInit() {
    this.loggedIn = this.likeCommService.checkToken();
    const retrievedUserComment = this.sessionStorage.getUserFromSessionStorage();
    this.userComment$ = of(retrievedUserComment ? Array.isArray(retrievedUserComment) ? retrievedUserComment : [retrievedUserComment] : []);
  }
};
