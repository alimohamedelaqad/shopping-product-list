import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './product.service';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  private cartCount = new BehaviorSubject<number>(0);

  constructor() {
    // Load cart from localStorage if exists
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const items = JSON.parse(savedCart);
      this.cartItems.next(items);
      this.updateCartCount();
    }
  }

  getCartItems(): Observable<CartItem[]> {
    return this.cartItems.asObservable();
  }

  getCartCount(): Observable<number> {
    return this.cartCount.asObservable();
  }

  addToCart(product: Product, quantity: number = 1) {
    const currentItems = this.cartItems.value;
    const existingItem = currentItems.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
      this.cartItems.next([...currentItems]);
    } else {
      this.cartItems.next([...currentItems, { product, quantity }]);
    }

    this.updateCartCount();
    this.saveToLocalStorage();
  }

  removeFromCart(productId: number) {
    const currentItems = this.cartItems.value;
    const updatedItems = currentItems.filter(item => item.product.id !== productId);
    this.cartItems.next(updatedItems);
    this.updateCartCount();
    this.saveToLocalStorage();
  }

  updateQuantity(productId: number, quantity: number) {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }

    const currentItems = this.cartItems.value;
    const item = currentItems.find(item => item.product.id === productId);
    if (item) {
      item.quantity = quantity;
      this.cartItems.next([...currentItems]);
      this.updateCartCount();
      this.saveToLocalStorage();
    }
  }

  clearCart() {
    this.cartItems.next([]);
    this.cartCount.next(0);
    localStorage.removeItem('cart');
  }

  private updateCartCount() {
    const count = this.cartItems.value.reduce((total, item) => total + item.quantity, 0);
    this.cartCount.next(count);
  }

  private saveToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems.value));
  }
}
