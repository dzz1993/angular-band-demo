import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeItemComponent } from './consume-item.component';

describe('ConsumeItemComponent', () => {
  let component: ConsumeItemComponent;
  let fixture: ComponentFixture<ConsumeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
