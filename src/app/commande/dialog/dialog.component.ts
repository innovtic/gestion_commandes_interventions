import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Historique} from '../../domain/historique';
import {Piecesjointes} from '../../domain/piecesjointes';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  display: boolean = false;

  @Input()
  infos: any[];


  items1: MenuItem[];

  activeItem: MenuItem;

  @ViewChild('menuItems',{static: false}) menu: MenuItem[];

  historiques: Historique[];

  piecesjointes: Piecesjointes[];

  constructor() { }

  ngOnInit() {
    this.items1 = [
      {label: 'Informations Commande', icon: 'fa fa-info-circle'},
      {label: 'Historiques', icon: 'fa fa-history'},
      {label: 'Pièces jointes', icon: 'fa fa-files-o'}
    ];

    this.historiques = [{"id":1,"date":new Date(),"acteur":"TEST Test","message":"Test message Test message Test message Test message Test message Test message Test message Test message Test message."},
      {"id":1,"date":new Date(),"acteur":"TEST Test2","message":"Test message Test message Test message Test message Test message Test message Test message Test message Test message."},{"id":1,"date":new Date(),"acteur":"TEST","message":"Test message Test message Test message Test message Test message Test message Test message Test message Test message."},{"id":1,"date":new Date(),"acteur":"TEST","message":"Test message Test message Test message Test message Test message Test message Test message Test message Test message."},{"id":1,"date":new Date(),"acteur":"TEST","message":"Test message Test message Test message Test message Test message Test message Test message Test message Test message."},{"id":1,"date":new Date(),"acteur":"TEST","message":"Test message Test message Test message Test message Test message Test message Test message Test message Test message."}];

    this.piecesjointes = [{"id":1,"date":new Date(),"type":"Type1","nompiecejointe":"Nom du Fichier 1"},
      {"id":1,"date":new Date(),"type":"Type 1","nompiecejointe":"Nom du Fichier 1"},
      {"id":1,"date":new Date(),"type":"Type 2","nompiecejointe":"Nom du Fichier 2"},
      {"id":1,"date":new Date(),"type":"Type 3","nompiecejointe":"Nom du Fichier 3"},
      {"id":1,"date":new Date(),"type":"Type 4","nompiecejointe":"Nom du Fichier 4"},
      {"id":1,"date":new Date(),"type":"Type 5","nompiecejointe":"Nom du Fichier 5"},
      {"id":1,"date":new Date(),"type":"Type 6","nompiecejointe":"Nom du Fichier 6"},
      {"id":1,"date":new Date(),"type":"Type 7","nompiecejointe":"Nom du Fichier 7"},
      {"id":1,"date":new Date(),"type":"Type 8","nompiecejointe":"Nom du Fichier 8"},
      {"id":1,"date":new Date(),"type":"Type 9","nompiecejointe":"Nom du Fichier 9"}];

    this.activeItem = this.items1[0];
  }

  showDialog() {
    this.display = true;
  }

  activateMenu(){
    this.activeItem =this.menu['activeItem'];
  }

}
