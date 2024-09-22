import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCarDialogComponent } from './edit-car-dialog.component';

describe('EditCarDialogComponent', () => {
  let component: EditCarDialogComponent;
  let fixture: ComponentFixture<EditCarDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCarDialogComponent]
    });
    fixture = TestBed.createComponent(EditCarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
