import { Component } from '@angular/core'

import { Router } from '@angular/router';

import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonLabel, IonInput, IonCard, IonCardHeader, IonCardContent, IonCardTitle } from '@ionic/angular/standalone';
import { OpenaiService } from '../openai.service';

import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonLabel, IonInput, IonCard, IonCardHeader, IonCardContent, IonCardTitle],
})
export class HomePage {
    constructor(private router: Router, private openAIService: OpenaiService) { }

    ideaPrompt: string = '';
    generatedIdea: string = '';

    navigateToLogin(){
        this.router.navigate(["/login"]);
    }

    async generateIdea() {
        if (this.ideaPrompt.trim() === '') {
            alert('Por favor ingresa una idea inicial.');
            return;
        }

        this.generatedIdea = await this.openAIService.generateIdea(this.ideaPrompt);
    }
}