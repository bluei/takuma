import { Component } from '@angular/core';
import { Instructor } from '../_models/instructor';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrl: './instructors.component.scss'
})
export class InstructorsComponent {

  instructors: Instructor[] = [
    {
      name: 'Allen Mayne',
      dan: '9',
      dateStarted: new Date('1978-01-01'),
      imageURL: 'https://res.cloudinary.com/blue-i/image/upload/q_auto:good/v1670180168/ook/people/Allen_aspect_240_320.jpg',
      bio: 'He is a real nice guy. lskdfj l;skdjf al;sdkfj a;lsdk fjasa sd fasdjkf eruthewruig sdrfkjgs hdkljfa hsdkljfa hsdlk'
    },
    {
      name: 'Michael Dantuma',
      dan: '8',
      dateStarted: new Date('1982-01-01'),
      imageURL: 'https://res.cloudinary.com/blue-i/image/upload/e_blue:15,q_auto:best/v1715605134/ook/people/Mike_aspect_240_320.jpg',
      bio: 'Known as Squatch but also a real nice guy'
    },
    {
      name: 'Scott Morey',
      dan: '7',
      dateStarted: new Date('1988-04-01'),
      imageURL: 'https://res.cloudinary.com/blue-i/image/upload/q_auto:good/v1670180171/ook/people/Scott_aspect_240_320.jpg',
      bio: 'Known as Scott but also a real nice guy'
    },
    {
      name: 'Mark Talbot',
      dan: '7',
      dateStarted: new Date('1989-01-01'),
      imageURL: 'https://res.cloudinary.com/blue-i/image/upload/q_auto:good/v1716205040/ook/people/Mark_aspect_240_320_enhanced.jpg',
      bio: 'Known as Mark but also a real nice guy'
    }
  ];

  calculateYears(stDate: Date): number {
    const today = new Date();
    const startDate = new Date(stDate);

    // Calculate the difference between today and the birthdate
    let age = today.getFullYear() - startDate.getFullYear();

    // Adjust the age if the birthdate hasn't occurred yet this year
    if (today < new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate())) {
      age--;
    }

    return age;
  }

}
