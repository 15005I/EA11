import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ForgotPasswordPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(
    private alertController: AlertController,
    private router: Router,
    private authService: AuthService
  ){}

  ngOnInit() {}

  // Función que se ejecuta al hacer submit del formulario
  async onSubmit() {
    try{
      await this.authService.resetPassword(this.email);
      const alert = await this.alertController.create({
        header: 'reset Success',
        message: 'You have reseted successfully!',
        buttons: ['OK'],
      });
      await alert.present();
    } catch (error) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Please complete all.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  // Función para validar el formato del correo
  validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email); // Retorna true si el correo es válido
  }

  //funcion para navegacion
  onSignUp() {
    this.router.navigateByUrl("login")
  }
}