import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, } from '@ionic/angular/standalone';

@Component({
  selector: 'app-buscar-tareas',
  templateUrl: './buscar-tareas.page.html',
  styleUrls: ['./buscar-tareas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, CommonModule, FormsModule]
})
export class BuscarTareasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
