import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageImgComponent } from './storage-img.component';

describe('StorageImgComponent', () => {
  let component: StorageImgComponent;
  let fixture: ComponentFixture<StorageImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
