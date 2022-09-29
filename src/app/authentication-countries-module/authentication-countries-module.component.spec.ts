import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationCountriesModuleComponent } from './authentication-countries-module.component';

describe('AuthenticationCountriesModuleComponent', () => {
  let component: AuthenticationCountriesModuleComponent;
  let fixture: ComponentFixture<AuthenticationCountriesModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticationCountriesModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticationCountriesModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
