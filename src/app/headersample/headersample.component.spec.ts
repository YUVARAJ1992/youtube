import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersampleComponent } from './headersample.component';

describe('HeadersampleComponent', () => {
  let component: HeadersampleComponent;
  let fixture: ComponentFixture<HeadersampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadersampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadersampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
