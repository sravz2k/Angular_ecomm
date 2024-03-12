import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 8;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/data.json').subscribe((data) => {
      this.products = data;
    });
  }
  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return Math.min(
      this.startIndex + this.itemsPerPage - 1,
      this.products.length - 1
    );
  }

  pageNumbers(): number[] {
    const pageCount = Math.ceil(this.products.length / this.itemsPerPage);
    return Array(pageCount)
      .fill(0)
      .map((x, i) => i + 1);
  }

  getStarRating(rating: number): string {
    const roundedRating = Math.round(rating);
    let starsHTML = '';

    for (let i = 1; i <= 5; i++) {
      if (i <= roundedRating) {
        starsHTML += '<i class="fas fa-star"></i>';
      } else {
        starsHTML += '<i class="far fa-star"></i>';
      }
    }

    return starsHTML;
  }
}
