import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailsComponent } from './product-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [{ provide: ActivatedRoute, useValue: {} }],
    }).compileComponents();
  });

  // it('should create', () => {
  //   fixture = TestBed.createComponent(ProductDetailsComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  //   expect(component).toBeTruthy();
  // });
});
