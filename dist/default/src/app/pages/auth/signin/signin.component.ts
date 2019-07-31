import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SigninComponent implements OnInit {

  submited: boolean = false;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  showLoading() {
    alert('send login');
  }
  openModal() {
    console.log('active');
    this.submited = true;
    //this.modalService.open(content,{centered:true,size:'sm',windowClass:'authModalSpinner', backdrop: 'static'});
  }
}
