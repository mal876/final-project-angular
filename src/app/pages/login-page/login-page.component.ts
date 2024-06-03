import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    
  }

  hasError?: boolean;
  errorMsg?: string;

  login2(authForm: NgForm){
    const log = this.authService.loginAuth(authForm.value).subscribe({
      next: (loginRes)=>{
        if(loginRes['status'] == 'success'){
          this.hasError = false

          this.authService.authToken = loginRes['data']!['token'];
          this.authService.saveAuthToken();
          this.authService.getCurrentUser(()=>{
            this.authService.loginState = true;
          })
          this.router.navigateByUrl('/all-students')
        }
      },
      error: (error) =>{
        console.log(error.error.error);
    
        this.hasError = true;
        this.errorMsg = error.error['message'];
        this.authService.loginState = false
      },
      complete: ()=>{
    
      }
    })
  };

  login(authForm: NgForm){
    console.log(`Before call to service`);

    try {
      const log = this.authService.loginAuth(authForm.value).subscribe(

        (loginRes)=>{
          if(loginRes['status'] == 'success'){
            this.hasError = false;

            this.authService.authToken = loginRes['data']!['token'];
            this.authService.saveAuthToken();
            this.authService.getCurrentUser(()=>{
              this.authService.loginState = true;
            })
            this.router.navigateByUrl(`/all-students`)
          }else{
            this.hasError = true;
            this.errorMsg = loginRes['message'];
            this.authService.loginState = false;
            this.router.navigateByUrl('/login')
          }
        }
      )
      error: console.log()

    } catch (error){
      console.error(error)
      console.log(`ERROR >> ${error}`)
    }
  }
}
