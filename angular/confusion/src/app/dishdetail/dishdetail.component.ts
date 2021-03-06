import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { visibility, flyInOut, expand } from '../animations/app.animation';

import 'rxjs/add/operator/switchmap';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    visibility(),
    flyInOut(),
    expand()
  ]
})
export class DishdetailComponent implements OnInit {
  dish:Dish;
  dishcopy = null;
  dishIds: number[];
  prev : number;
  next : number;
  commentForm: FormGroup;
  date = new Date();
  time:string = this.date.toISOString();
  errMsg : string;
  visibility = 'shown';

  constructor(private dishservice: DishService, 
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject('BaseURL') private BaseURL) { 
      this.createForm();
  }

  formErrors = {
    'author': '',
    'comment':''
  };

  validationMessages = {
    'author': {
      'required' : 'Name is required',
      'minlength' : 'Name must be at least 2 characters long',
      'maxlength' : 'Name must not exceed 25 characters'
    },
    'comment': {
      'required' : 'Comment is required'
    },
  };

  ngOnInit() {
    this.dishservice.getDishIDs().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params.switchMap((params: Params) => {this.visibility = 'hidden'; 
      return this.dishservice.getDish(+params['id']);})
    .subscribe(dish => {this.dish=dish; this.dishcopy=dish; this.setPrevNext(dish.id); this.visibility ='shown';},
      errMsg => this.errMsg = <any>errMsg);
  }

  setPrevNext(dishId: number){
    let index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1)%this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1)%this.dishIds.length];
  }

  goBack():void {
    this.location.back();
  }

  createForm():void {
    this.commentForm = this.fb.group({
      author : ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      rating : '',
      comment: ['', [ Validators.required ] ],
      date: ''
    });

    this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  onSubmit(){
    console.log(this.commentForm.value);
    this.commentForm.value.date += this.time;
    this.dishcopy.comments.push(this.commentForm.value);
    this.dishcopy.save()
      .subscribe(dish =>{this.dish = dish; console.log(this.dish);});
    this.commentForm.reset({
      author: '',
      rating: '5',
      comment: ''
    });
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) { return; }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

}
