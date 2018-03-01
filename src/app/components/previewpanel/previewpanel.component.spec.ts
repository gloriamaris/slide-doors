import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewpanelComponent } from './previewpanel.component';

describe('PreviewpanelComponent', () => {
  let component: PreviewpanelComponent;
  let fixture: ComponentFixture<PreviewpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
