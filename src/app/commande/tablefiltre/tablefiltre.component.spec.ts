import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablefiltreComponent } from './tablefiltre.component';

describe('TablefiltreComponent', () => {
  let component: TablefiltreComponent;
  let fixture: ComponentFixture<TablefiltreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablefiltreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablefiltreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
