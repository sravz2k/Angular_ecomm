import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FormsModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productId: number | undefined;
  product: any;
  selectedColor: string = '';

  selectColor(color: string) {
    this.selectedColor = color;
  }

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = +params['id'];
      this.loadProductDetails(this.productId);
    });
  }

  loadProductDetails(productId: number): void {
    this.http.get<any[]>('/assets/data.json').subscribe(
      (data) => {
        this.product = data.find((product) => product.id === productId);
      },
      (error) => {
        console.error('Error loading product details:', error);
      }
    );
  }
}
