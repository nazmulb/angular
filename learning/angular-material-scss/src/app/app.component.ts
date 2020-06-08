import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular Material Scss';
  genderList: string[] = ['Man', 'Woman'];
  form = new FormGroup({
    fname: new FormControl('', Validators.required),
    comment: new FormControl(''),
    gender: new FormControl([], [Validators.required]),
  });

  actionSave() {
    console.log(this.form.controls["fname"].value, this.form.controls["gender"].value)
  }
}
