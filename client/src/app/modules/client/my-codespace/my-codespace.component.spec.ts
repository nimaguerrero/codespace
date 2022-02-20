import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCodespaceComponent } from './my-codespace.component';

describe('MyCodespaceComponent', () => {
  let component: MyCodespaceComponent;
  let fixture: ComponentFixture<MyCodespaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCodespaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCodespaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
