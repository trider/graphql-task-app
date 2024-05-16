import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { AppRun } from 'src/app/services/appService/schema/schema';
import { GlobalVariables } from 'src/app/common/global-variables';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  appVersion:string = GlobalVariables.appVersion;
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

      sessionStorage.setItem('user', JSON.stringify(resp.data['appRun']));
      this.router.navigate(['/main/home']);
      
     


    }, (error) => {
      console.log(error);
    });

  }
}
