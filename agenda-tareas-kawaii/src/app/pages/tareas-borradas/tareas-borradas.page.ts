import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tareas-borradas',
  templateUrl: './tareas-borradas.page.html',
  styleUrls: ['./tareas-borradas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TareasBorradasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
