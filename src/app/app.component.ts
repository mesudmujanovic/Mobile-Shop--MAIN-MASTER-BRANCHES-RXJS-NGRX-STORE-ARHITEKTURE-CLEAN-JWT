import { Component, ElementRef, ViewChild } from '@angular/core';
import { PathService } from './service/path.service';
import { BehaviorSubject } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gngn';

  private currentPathSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  currentPath: string = '';
  @ViewChild('progressBar') progressBar: ElementRef;


  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateProgressBarWidth(event.urlAfterRedirects);
      }
    });

  // Dodajte ovaj poziv metode
  this.updateProgressBarWidth(this.router.url);
}

private updateProgressBarWidth(currentPath: string) {
  if (this.progressBar) {
    const progressWidth = this.calculateProgressWidth(currentPath);
    this.progressBar.nativeElement.style.width = `${progressWidth}%`;
  }
}

private calculateProgressWidth(currentPath: string): number {
  const progressWidths = {
    '/': 50,
    '/login': 35,
    '/tariff': 65,
    '/main': 80,
    '/like': 20
  };

  const defaultProgressWidth = 50;
  const progressWidth = progressWidths[currentPath] || defaultProgressWidth;

  return progressWidth;
}
  

}
