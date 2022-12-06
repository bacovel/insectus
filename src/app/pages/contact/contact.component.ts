import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  ngOnInit() {
    document.body.classList.add('bg-img');
}
ngOnDestroy(){
  document.body.classList.remove('bg-img');
}
}
