import { Component } from '@angular/core';
import { NgClass, CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

interface Product {
  id: number,
  name: string,
  price: number,
  currency: string,
  inStock: boolean,
  rating: number,
  image: string,
  description: string
};

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [NgClass, CurrencyPipe],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {
  constructor(private router: Router) {}

  products: Product[] = [
    {
      id: 1,
      name: "Wireless Earbuds, IPX8",
      price: 89.00,
      currency: "USD",
      inStock: false,
      rating: 4.5,
      image: "https://www.apple.com/v/airpods/t/images/overview/airpods_3rd_gen__dhy5bknhvtqq_large.jpg",
      description: "Organic Cotton, fairtrade certified"
    },
    {
      id: 2,
      name: "AirPods Max",
      price: 559.00,
      currency: "USD",
      inStock: true,
      rating: 5,
      image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-pink-202011?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1604022365000",
      description: "A perfect balance of high-fidelity audio"
    },
    {
      id: 3,
      name: "Bose BT Earphones",
      price: 289.00,
      currency: "USD",
      inStock: false,
      rating: 4,
      image: "https://th.bing.com/th/id/R.d075ff124f4a00108f90e5d8a68ae60b?rik=uNUhRVnrewMYcg&pid=ImgRaw&r=0",
      description: "Table with air purifier, stained veneer/black"
    },
    {
      id: 4,
      name: "VIVEFOX Headphones",
      price: 39.00,
      currency: "USD",
      inStock: true,
      rating: 4.5,
      image: "https://tse1.mm.bing.net/th/id/OIP.FS2k0phpzicLE8FozQlhDgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Wired Stereo Headsets With Mic"
    },
    {
      id: 5,
      name: "Wireless Earbuds, IPX8",
      price: 89.00,
      currency: "USD",
      inStock: false,
      rating: 4.5,
      image: "https://www.apple.com/v/airpods/t/images/overview/airpods_3rd_gen__dhy5bknhvtqq_large.jpg",
      description: "Organic Cotton, fairtrade certified"
    },
    {
      id: 6,
      name: "AirPods Max",
      price: 559.00,
      currency: "USD",
      inStock: true,
      rating: 5,
      image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-pink-202011?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1604022365000",
      description: "A perfect balance of high-fidelity audio"
    },
    {
      id: 7,
      name: "Bose BT Earphones",
      price: 289.00,
      currency: "USD",
      inStock: true,
      rating: 4,
      image: "https://th.bing.com/th/id/R.d075ff124f4a00108f90e5d8a68ae60b?rik=uNUhRVnrewMYcg&pid=ImgRaw&r=0",
      description: "Table with air purifier, stained veneer/black"
    },
    {
      id: 8,
      name: "VIVEFOX Headphones",
      price: 39.00,
      currency: "USD",
      inStock: true,
      rating: 4.5,
      image: "https://tse1.mm.bing.net/th/id/OIP.FS2k0phpzicLE8FozQlhDgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Wired Stereo Headsets With Mic"
    }
  ];

  navigateToProduct(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}
