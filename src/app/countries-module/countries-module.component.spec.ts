import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesModuleComponent } from './countries-module.component';

describe('CountriesModuleComponent', () => {
  let component: CountriesModuleComponent;
  let fixture: ComponentFixture<CountriesModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
