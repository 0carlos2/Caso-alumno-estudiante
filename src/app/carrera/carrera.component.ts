import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Carrera } from './models/carrera';
import { CarreraService } from './services/carrera.service';

@Component({
  selector: 'app-carrera',
  standalone: true,
  imports: [SidebarComponent, CardModule, PanelModule, TableModule, CommonModule],
  templateUrl: './carrera.component.html',
  styleUrl: './carrera.component.css'
})
export class CarreraComponent {
  carreras!: Carrera[];

  constructor(private carreraService: CarreraService) {}
  ngOnInit() {
    this.carreraService.getCarreras().subscribe((data) => {
      this.carreras = data;
  }); 
  }
}
