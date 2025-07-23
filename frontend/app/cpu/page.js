'use client';

import { useState } from 'react';
import '../globals.css';

export default function Page() {
  const [products] = useState([
    {
      name: 'AMD Ryzen 7 9800X3D',
      coreCount: 8,
      clock: '4.7 GHz',
      boostClock: '5.2 GHz',
      microarch: 'Zen 5',
      tdp: '120 W',
      graphics: 'Radeon',
      rating: 188,
      price: '$472.02',
      image: '/amd-svgrepo-com.svg',
    },
    {
      name: 'AMD Ryzen 5 5600X',
      coreCount: 6,
      clock: '3.7 GHz',
      boostClock: '4.6 GHz',
      microarch: 'Zen 3',
      tdp: '65 W',
      graphics: 'None',
      rating: 691,
      price: '$129.50',
      image: '/amd-svgrepo-com.svg',
    },
    {
      name: 'AMD 6000',
      coreCount: 6,
      clock: '30 GHz',
      boostClock: '4.6 GHz',
      microarch: 'Zen 3',
      tdp: '65 W',
      graphics: 'None',
      rating: 691,
      price: '$129.50',
      image: '/amd-svgrepo-com.svg',
    },
  ]);

  return (
    <main className="container">
      <h1>CPU</h1>

      <div className="controls">
        <div className="search">
          <input type="text" placeholder="Search CPUs" />
        </div>
      </div>

      <div className="table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
                <th>Name</th>
                <th>Core Count</th>
                <th>Base Clock</th>
                <th>Boost Clock</th>
                <th>Graphics</th>
                <th>Price</th>
                <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((cpu, index) => (
              <tr key={index}> 
                <td className="product-info">
                    <img src={cpu.image} alt="CPU" />
                    <span className="name">{cpu.name}</span>    
                </td>
                <td>{cpu.coreCount}</td>
                <td>{cpu.clock}</td>
                <td>{cpu.boostClock}</td>
                <td>{cpu.graphics}</td>
                <td colSpan={4}>
                    <div className="affiliate-prices">
                        <div className="affiliate first">
                        <span>$472.02</span>
                        <img src="/amazon-color-svgrepo-com.svg" alt="Amazon" className="affiliate-logo" />
                        </div>
                        <div className="affiliate">
                        <span>$469.99</span>
                        <img src="/ebay-svgrepo-com.svg" alt="eBay" className="affiliate-logo" />
                        </div>
                        <div className="affiliate">
                        <span>$475.00</span>
                        <img src="/logos/walmart.png" alt="Walmart" className="affiliate-logo" />
                        </div>
                        <div className="affiliate">
                        <span>$478.90</span>
                        <img src="/logos/newegg.png" alt="Newegg" className="affiliate-logo" />
                        </div>
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}