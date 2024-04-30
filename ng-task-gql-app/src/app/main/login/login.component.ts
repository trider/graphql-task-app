import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { AppRun } from 'src/app/services/appService/schema/schema';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm = new UntypedFormGroup({
    email: new UntypedFormControl('jonnygold@gmail.com'),
    password: new UntypedFormControl('1234'),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apollo: Apollo,
  ) { }

  ngOnInit(): void {


  
  }


  onSubmit() {    

    alert("login");
    const payloadData:any = this.loginForm.value;
    this.apollo.mutate({
      mutation: AppRun,
      variables: {
        api:"users",
        command:"login",
        payload: {
          email: payloadData.email,
          password: payloadData.password
        }
  
      }
    }).subscribe((resp) => {
      this.router.navigate(['/main/home']);
      console.log(resp);
     


    }, (error) => {
      console.log(error);
    });

  }
}
