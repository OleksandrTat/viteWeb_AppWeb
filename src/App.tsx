import React from 'react';
import Contador from './Contador';
import './index.css';

export default function App() {
  return (
    <div>
      <header>Mi Web Dinámica con Vite 🚀</header>
      <div className="container">
        <h2>Bienvenido a tu web interactiva</h2>
        <p>Disfruta de este contador dinámico y experimenta React con Vite.</p>
        <Contador />
      </div>
    </div>
  );
}
