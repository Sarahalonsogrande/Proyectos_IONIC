import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tareas-archivadas',
  templateUrl: './tareas-archivadas.page.html',
  styleUrls: ['./tareas-archivadas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TareasArchivadasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
