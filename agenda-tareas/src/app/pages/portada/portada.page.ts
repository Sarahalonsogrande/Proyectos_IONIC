import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonTitle, IonToolbar, IonImg, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.page.html',
  styleUrls: ['./portada.page.scss'],
  standalone: true,
  imports: [IonImg, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule, FormsModule, RouterLink]
})
export class PortadaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
