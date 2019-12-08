import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  items: MenuItem[];
  public listeCommande;
  public tableau = [
    {
      id:1,
      nomClien:'test',
      typeReau:'SFR',
      typo:'popé',
      stit:'ERT'
    },
    {
      id:2,
      nomClien:'test',
      typeReau:'SFR',
      typo:'popé',
      stit:'ERT'
    },
    {
      id:3,
      nomClien:'test',
      typeReau:'SFR',
      typo:'popé',
      stit:'ICART'
    }
  ];
  constructor(private httpClient:HttpClient) {
  }

  ngOnInit() {
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            {label: 'Project'},
            {label: 'Other'},
          ]
        },
          {label: 'Open'},
          {separator:true},
          {label: 'Quit'}
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {label: 'Delete', icon: 'pi pi-fw pi-trash'},
          {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
        ]
      },
      {
        label: 'Help',
        icon: 'pi pi-fw pi-question',
        items: [
          {
            label: 'Contents'
          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-search',
            items: [
              {
                label: 'Text',
                items: [
                  {
                    label: 'Workspace'
                  }
                ]
              },
              {
                label: 'File'
              }
            ]}
        ]
      },
      {
        label: 'Actions',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {label: 'Save', icon: 'pi pi-fw pi-save'},
              {label: 'Update', icon: 'pi pi-fw pi-save'},
            ]
          },
          {
            label: 'Other',
            icon: 'pi pi-fw pi-tags',
            items: [
              {label: 'Delete', icon: 'pi pi-fw pi-minus'}
            ]
          }
        ]
      },
      {separator:true},
      {
        label: 'Quit', icon: 'pi pi-fw pi-times'
      }
    ];

    console.log('lllllllllllllllllllllllllll');
    this.httpClient.get("http://localhost/testPHP/getInfos.php",{headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
      .subscribe( data=>{
        this.listeCommande = data;
    }, err=>{
        console.log(err);
    });
  }

}
