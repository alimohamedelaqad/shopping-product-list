import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: any = null;
  loading: boolean = true;
  error: string | null = null;
  currentImageIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id']; // Convert string to number
      this.loadProduct(id);
    });
  }

  loadProduct(id: number) {
    this.loading = true;
    this.error = null;
    this.productService.getProductById(id).subscribe({
      next: (product) => {
        this.product = product;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Failed to load product details. Please try again later.';
        this.loading = false;
        console.error('Error loading product:', error);
      }
    });
  }

  nextImage() {
    if (this.product && this.product.images) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
    }
  }

  previousImage() {
    if (this.product && this.product.images) {
      this.currentImageIndex = this.currentImageIndex === 0 
        ? this.product.images.length - 1 
        : this.currentImageIndex - 1;
    }
  }

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product);
    }
  }
}
