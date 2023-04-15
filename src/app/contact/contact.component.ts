import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  nom: string = '';
  email: string = '';
  message: string = '';

  alreadyClicked = false;

  envoyerEmail(): void {
    // Implémentez ici la logique d'envoi de l'e-mail en utilisant les données du formulaire
    this.alreadyClicked = true;
    console.log('Nom:', this.nom);
    console.log('Email:', this.email);
    console.log('Message:', this.message);
    // Vous pouvez appeler ici un service pour envoyer les données du formulaire par e-mail
    // ou utiliser une API pour effectuer l'envoi du courrier électronique
    // Assurez-vous d'ajouter les dépendances nécessaires pour l'envoi d'e-mails dans votre application
  }
}
