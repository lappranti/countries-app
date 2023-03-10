import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<any>(true);
  /* private getLocalStoregde(): boolean {
    return JSON.parse(localStorage.getItem('themeCountriesApp') || '').isDark;
    return true;
  }

  private setLocalstoradge(theme: boolean) {
    localStorage.setItem(
      'themeCountriesApp',
      JSON.stringify({ isDark: theme })
    );
  }*/

  getTheme() {
    return this.themeSubject.asObservable();
  }

  changeTheme(theme: boolean) {
    this.themeSubject.next(theme);
  }
}
