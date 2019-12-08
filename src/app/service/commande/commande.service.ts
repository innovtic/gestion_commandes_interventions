import {Injectable, OnInit} from '@angular/core';

import { Car } from '../../domain/car';


import {SelectItem} from 'primeng/api';

@Injectable()
export class CommandeService {

  cars: Car[];

  cols: any[];

  typeReaus: SelectItem[];

  stits: SelectItem[];
  typos: SelectItem[];

  yearFilter: number;

  yearTimeout: any;


  data:Car[];

  constructor() {
    this.cars = [{"id":1,"nomClien":"Test client 1","typeReau":"TEST","typo":"pop\u00e9","stit":"STITE 1"},{"id":2,"nomClien":"Test client 2","typeReau":"TEST","typo":"pop\u00e9","stit":"STITE 2"},{"id":3,"nomClien":"Test client 3","typeReau":"TEST","typo":"pop\u00e9","stit":"STITE 3"},{"id":4,"nomClien":"Test client 4","typeReau":"TEST","typo":"pop\u00e9","stit":"STITE 4"},{"id":5,"nomClien":"Test client 5","typeReau":"TEST","typo":"pop\u00e9","stit":"STITE 5"},{"id":6,"nomClien":"Test client 6","typeReau":"TEST","typo":"pop\u00e9","stit":"STITE 6"},{"id":7,"nomClien":"Test client 7","typeReau":"TEST","typo":"pop\u00e9","stit":"STITE 7"},{"id":8,"nomClien":"Test client 8","typeReau":"TEST","typo":"pop\u00e9","stit":"STITE 8"},{"id":9,"nomClien":"Test client 9","typeReau":"TEST","typo":"pop\u00e9","stit":"STITE 9"},{"id":10,"nomClien":"Test client 10","typeReau":"TEST","typo":"pop\u00e9","stit":"STITE 10"},{"id":11,"nomClien":"Test client 11","typeReau":"TEST","typo":"pop\u00e9","stit":"STITE 11"}]
    ;

    this.typeReaus = [
      { label: 'Tous les types', value: null },
      { label: 'TEST', value: 'TEST' }
    ];

    this.stits = [
      { label: 'STITE 1', value: 'STITE 1' }
    ];

    this.typos = [
      { label: 'Toutes les typos', value: null },
      { label: 'popé', value: 'popé' }
    ];

    this.cols = [
      { field: 'id', header: 'Id commande' },
      { field: 'nomClien', header: 'Nom client' },
      { field: 'typeReau', header: 'Type réseau' },
      { field: 'stit', header: 'STIT' },
      { field: 'typo', header: 'Typologie' }
    ];
  }




  getCommandes() {
    return this.cars;
  }

  getTypos(){
    return this.typos;
  }

  getStits(){
    return this.stits;
  }

  getColonnes(){
    return this.cols;
  }

  getTypesReseau(){
    return this.typeReaus;
  }


}
