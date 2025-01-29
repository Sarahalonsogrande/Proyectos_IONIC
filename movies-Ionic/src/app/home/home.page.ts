// import { IonicModule } from '@ionic/angular';

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonList, IonInput, IonItem, IonButton, IonLabel,
    IonItemOption, IonItemOptions, IonItemSliding, IonProgressBar
    } from '@ionic/angular/standalone';
import { PeliculasService } from '../services/peliculas.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [IonProgressBar, IonItemSliding, IonLabel,
        FormsModule, CommonModule, IonHeader, IonToolbar,
        IonTitle, IonContent, IonList, IonInput,
        IonItem, IonButton, IonItemOption, IonItemOptions
    ],
})

export class HomePage {
    public titulo: string = "";
    public cargando: boolean = false;
    constructor(public dataService: PeliculasService, private router: Router) { }
    public buscar(): void {
        if (!this.titulo.trim()) {
            alert("Por favor, introduce un título.");
            return;
        }
        this.cargando = true;
        this.dataService.getMovie(this.titulo).subscribe(
            data => {
                this.cargando = false;
                console.log('Respuesta de la API:', data); // Agrega esta línea para ver la respuesta en la consola
                if (data.Response === 'False') { // Verifica la existencia de la propiedad 'Response'
                    alert("Película no encontrada.");
                    console.error("Dato no encontrado");
                } else {
                    this.dataService.addMovie(data);
                }
            },
            error => {
                this.cargando = false;
                console.error("Error al buscar película:", error);
                alert("Se ha producido un error al buscar la película.");
            }
        );
    }

    public guardar(titulo: string): void {
        console.log("Guardando..." + titulo);
        this.router.navigate([`detalles/${titulo}`]);
    }
}
