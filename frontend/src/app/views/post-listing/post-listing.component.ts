import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostListingService} from './post-listing.service';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-listing',
  templateUrl: './post-listing.component.html',
  styleUrls: ['./post-listing.component.css']
})
export class PostListingComponent implements OnInit {
  postForm: FormGroup;
  public source;
  data: any;
  allData;
  private eventId: any;
  formError: string;

  constructor(private fb: FormBuilder, private postService: PostListingService, private authService: AuthService, private router: Router) {
          this.postService.getEvents().subscribe(res => {
      // @ts-ignore
        this.source = res.map(item => item.name);
        this.data = this.source.slice();
        this.allData = res;
    });
  }

  ngOnInit(): void {

    this.postForm = this.fb.group({
      event: ['', Validators.required],
      price: ['', Validators.required]
    });
  }
    handleFilter(value: string) {
      this.data = this.source.filter((s) => s.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }

  submitForm() {

    this.authService.getUser().subscribe(res => {
          const payload = {
            event: this.postForm.get('event').value,
            price: this.postForm.get('price').value,
                          // @ts-ignore
            seller: res.username
          };
          this.postService.createPost(payload).subscribe(_ => {
          console.log('post created');
          this.router.navigate(['/']);

        },
    error => {
          this.formError = error.message;
        });
    });

  }

}
