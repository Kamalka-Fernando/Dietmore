import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUpService } from 'src/app/services/sign-up.service';
import { FormBuilder, NgForm} from '@angular/forms';
import { registerDetails } from 'src/app/services/sign-up.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {


  constructor( private http: HttpClient, private fb: FormBuilder, public service:  SignUpService ) { }

  submitRegisterDetails(form:NgForm){
    this.service.postRegisterData()
    .subscribe(
      res =>{
        this.service.refreshList()
        this.resetForm(form);
      },
      err =>{
        console.log('error!!! ');
      }
    )
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.registerData = new registerDetails();
  }
  signupbtn(){
    Swal.fire({
      icon: 'success',
      title: 'Your Registration is Successfully Completed!',
      showConfirmButton: false,
      timer: 1500
    })

  }

}
