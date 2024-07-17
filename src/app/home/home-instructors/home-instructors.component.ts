import { Component } from '@angular/core';
import { Instructor } from '../../_models/instructor';

@Component({
  selector: 'app-home-instructors',
  templateUrl: './home-instructors.component.html',
  styleUrl: './home-instructors.component.scss'
})
export class HomeInstructorsComponent {

  instructors: Instructor[] = [
    {
      name: 'Allen Mayne',
      dan: '9',
      dateStarted: new Date('1978-08-02'),
      thumbURL: 'https://res.cloudinary.com/blue-i/image/upload/c_crop,e_sharpen:100,g_face:center,h_880,w_800/c_fill,h_240,w_200/v1670180168/ook/people/Allen_aspect_240_320.jpg',
      imageURL: 'https://res.cloudinary.com/blue-i/image/upload/q_auto:good/v1670180168/ook/people/Allen_aspect_240_320.jpg',
      bio: 'He is a real nice guy. More info to fill in here. Studied under Griffin, Iha, Miyahira, Nakasone'
    },
    {
      name: 'Michael Dantuma',
      dan: '8',
      dateStarted: new Date('1982-02-05'),
      thumbURL: 'https://res.cloudinary.com/blue-i/image/upload/e_hue:4/e_blue:15/e_saturation:-23/c_crop,g_face:auto,h_240,w_200/v1715605134/ook/people/Mike_aspect_240_320.jpg',
      imageURL: 'https://res.cloudinary.com/blue-i/image/upload/e_blue:15,q_auto:best/v1715605134/ook/people/Mike_aspect_240_320.jpg',
      bio: 'Known as Squatch but also a real nice guy'
    },
    {
      name: 'Scott Morey',
      dan: '7',
      dateStarted: new Date('1988-04-01'),
      thumbURL: 'https://res.cloudinary.com/blue-i/image/upload/c_crop,e_sharpen:100,g_face:center,h_880,w_800/c_fill,h_240,w_200/v1670180171/ook/people/Scott_aspect_240_320.jpg',
      imageURL: 'https://res.cloudinary.com/blue-i/image/upload/q_auto:good/v1670180171/ook/people/Scott_aspect_240_320.jpg',
      bio: 'Known as Scott but also a real nice guy'
    },
    {
      name: 'Mark Talbot',
      dan: '7',
      dateStarted: new Date('1988-09-04'),
      thumbURL: 'https://res.cloudinary.com/blue-i/image/upload/c_crop,e_sharpen:100,g_face:center,h_880,w_800/c_fill,h_240,w_200/v1670180172/ook/people/Mark_aspect_240_320.jpg',
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

  collectiveYears(): number {
    var total = 0;

    this.instructors.forEach((instructor) => {
      total += this.calculateYears(instructor.dateStarted)
    })
    return total;
  }

}
