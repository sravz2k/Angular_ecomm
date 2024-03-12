import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ProductListComponent,
        RouterModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch products on initialization', () => {
    const testData = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
    ];
    const mockResponse = testData;

    component.ngOnInit();

    const req = httpMock.expectOne('assets/data.json');
    expect(req.request.method).toEqual('GET');

    req.flush(mockResponse);

    expect(component.products).toEqual(testData);
  });

  it('should calculate the correct start index', () => {
    component.currentPage = 2;
    component.itemsPerPage = 5;
    expect(component.startIndex).toEqual(5);
  });

  it('should calculate the correct end index', () => {
    component.currentPage = 2;
    component.itemsPerPage = 5;
    component.products = new Array(10).fill({});
    expect(component.endIndex).toEqual(9);
  });

  // it('should generate correct page numbers', () => {
  //   component.products = new Array(15).fill({});
  //   expect(component.pageNumbers()).toEqual([1, 2, 3]);
  // });

  // it('should generate correct star rating HTML', () => {
  //   expect(component.getStarRating(3.5)).toEqual(
  //     '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i>'
  //   );
  // });
});
