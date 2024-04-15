import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsShowerComponent } from './skills-shower.component';

describe('SkillsShowerComponent', () => {
  let component: SkillsShowerComponent;
  let fixture: ComponentFixture<SkillsShowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsShowerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillsShowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
