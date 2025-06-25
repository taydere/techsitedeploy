'use client';

import { useState } from 'react';
import './globals.css'; // this ensures the styles apply

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
      image: 'https://via.placeholder.com/40',
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
      image: 'https://via.placeholder.com/40',
    },
  ]);

  return (
    <main className="container">
      <h1>1413 Compatible Products</h1>

      <div className="controls">
        <div className="button-group">
          <button>Select All</button>
          <button>Select None</button>
          <button>Compare Selected</button>
        </div>
        <div className="search">
          <input type="text" placeholder="Search CPUs" />
          <button>Add From Filter</button>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Core Count</th>
              <th>Base Clock</th>
              <th>Boost Clock</th>
              <th>Microarchitecture</th>
              <th>TDP</th>
              <th>Graphics</th>
              <th>Rating</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((cpu, index) => (
              <tr key={index}>
                <td><input type="checkbox" /></td>
                <td>
                  <div className="product-info">
                    <img src={cpu.image} alt="CPU" />
                    <span className="name">{cpu.name}</span>
                  </div>
                </td>
                <td>{cpu.coreCount}</td>
                <td>{cpu.clock}</td>
                <td>{cpu.boostClock}</td>
                <td>{cpu.microarch}</td>
                <td>{cpu.tdp}</td>
                <td>{cpu.graphics}</td>
                <td>⭐ ({cpu.rating})</td>
                <td>{cpu.price}</td>
                <td><button className="add-button">Add</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}