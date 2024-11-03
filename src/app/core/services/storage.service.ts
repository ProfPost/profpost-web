import { AuthResponse } from '../../shared/models/auth-response.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private authKey = 'profpost_auth';
  constructor() {}

  setAuthData(data: AuthResponse): void {
    localStorage.setItem(this.authKey, JSON.stringify(data));
  }

  getAuthData(): AuthResponse | null {
    const data = localStorage.getItem(this.authKey);
    return data ? (JSON.parse(data) as AuthResponse) : null;
  }

  clearAuthData(): void {
    localStorage.removeItem(this.authKey);
  }
}
