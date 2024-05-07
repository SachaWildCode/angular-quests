import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './user-profile-interface';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  user: User = {
    isAgeHidden: false,
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: '',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg',
  };

  setAgeHidden(): void {
    this.user.isAgeHidden = !this.user.isAgeHidden;
  }
}
