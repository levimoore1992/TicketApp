import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostListingService} from './post-listing.service';

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

  constructor(private fb: FormBuilder, private postService: PostListingService) {
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

    const thisEvent = this.postForm.get('event').value;
    for (const event of this.allData) {
      if (event.name === thisEvent) {
        this.eventId = event.id;
        break;
      }
    }
    const payload = {
    event: this.eventId,
    price: this.postForm.get('price').value
    };
    this.postService.createPost(payload).subscribe(res => {
      console.log(res);
      }
    );
  }

}
