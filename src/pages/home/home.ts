import { TabsPage } from './../tabs/tabs';
import { ResetPasswordPage } from './../reset-password/reset-password';
import { Component } from '@angular/core';
import { NavController, Loading, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserProvider } from '../../providers/user/user';
import { MainPage } from '../';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myForm: FormGroup;
  public loading: Loading

  account: { email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };
  private loginErrorString: string = "Hubo un error por favor verificar";


  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public user: UserProvider,
    public toastCtrl: ToastController,
  ) {
    this.myForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
  doLogin() {
    if(this.myForm.value.email && this.myForm.value.password)
    {
      this.user.login(this.myForm).subscribe(
        (dato: any)=> {
          console.log(dato.jwt);
          this.navCtrl.push(MainPage);
          
        }, (err) => {
          
          // Unable to log in
          let toast = this.toastCtrl.create({
            message: this.loginErrorString,
            duration: 3000,
            position: 'top'
          });
          toast.present();
        }
      )
    }
    // console.log("Email:" + this.myForm.value.email);
    // console.log("Password:" + this.myForm.value.password);
    // this.navCtrl.push('TabsPage')
  }

  goToResetPassword() {
    this.navCtrl.push('ResetPasswordPage');
  }

}
