import { Component, OnInit } from '@angular/core';
import { Car } from '../../domain/car';
import { CarService } from '../../service/carservice';
import { SelectItem } from 'primeng/api';
import {CommandeService} from '../../service/commande/commande.service';

@Component({
  selector: 'app-tablefiltre',
  templateUrl: './tablefiltre.component.html',
  styleUrls: ['./tablefiltre.component.css']
})
export class TablefiltreComponent implements OnInit {

  constructor(private commmandeServie:CommandeService) {}

  cars: Car[];

  cols: any[];

  typeReaus: SelectItem[];

  stits: SelectItem[];
  typos: SelectItem[];

  yearFilter: number;

  yearTimeout: any;

  data:Car[];

ngOnInit() {

      this.cars = this.commmandeServie.getCommandes();

      this.typeReaus = this.commmandeServie.getTypesReseau();

      this.stits = this.commmandeServie.getStits();

      this.typos = this.commmandeServie.getTypos();

      this.cols = this.commmandeServie.getColonnes();
    }

}
