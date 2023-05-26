import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PathService {

  private currentPathSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  currentPath: string = '';
  @ViewChild('progressBar') progressBar: ElementRef;


  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentPathSubject.next(event.urlAfterRedirects);
      }
    });
  }

  private updateProgressBarWidth() {
    if (this.progressBar) {
      const progressWidth = this.calculateProgressWidth(); // Ovdje izračunajte željenu širinu napretka
      this.progressBar.nativeElement.style.width = `${progressWidth}%`;
    }
  }

  private calculateProgressWidth(): number {
    // Postavite željenu širinu napretka za svaku rutu
    const progressWidth = 50; // Možete prilagoditi vrijednost prema svojim potrebama
  
    return progressWidth;
  }
  

 
}
