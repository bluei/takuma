import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularExampleComponent } from './angular-example.component';

describe('AngularExampleComponent', () => {
  let component: AngularExampleComponent;
  let fixture: ComponentFixture<AngularExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
