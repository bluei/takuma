import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-firebase-test',
  templateUrl: './firebase-test.component.html',
  styleUrl: './firebase-test.component.scss'
})
export class FirebaseTestComponent implements OnInit {
  loadedPosts = [];
  private http = inject(HttpClient);

  ngOnInit() {}

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    console.log(postData);

    this.http.post('https://takuma-5260-default-rtdb.firebaseio.com/posts.json', postData)
        .subscribe((responseData: any) => {
          console.log(responseData);
        });
  }

  onFetchPosts() {
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }
}
