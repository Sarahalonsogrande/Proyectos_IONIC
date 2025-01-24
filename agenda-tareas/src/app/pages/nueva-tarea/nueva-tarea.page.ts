import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonCard,
  IonCardTitle,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonButtons,
  IonMenuButton,
  IonItem,
  IonInput
  } from '@ionic/angular/standalone';

@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.page.html',
  styleUrls: ['./nueva-tarea.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonCard,
    IonCardTitle,
    IonCardHeader,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonButtons,
    IonMenuButton,
    IonItem,
    IonInput,
    CommonModule,
    FormsModule
  ]
})
export class NuevaTareaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
