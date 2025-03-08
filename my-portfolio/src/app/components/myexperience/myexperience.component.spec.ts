import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyexperienceComponent } from './myexperience.component';

describe('MyexperienceComponent', () => {
  let component: MyexperienceComponent;
  let fixture: ComponentFixture<MyexperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyexperienceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyexperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
