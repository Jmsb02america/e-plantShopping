import React from 'react';
import PlantCard from '../components/PlantCard';
import './ProductList.css';

const plantsData = [
  { id: 1, name: "Fiddle Leaf Fig", price: 29.99, image: "/images/plant1.jpg", category: "Air Purifying Plants" },
  { id: 2, name: "Snake Plant", price: 19.99, image: "/images/plant2.jpg", category: "Low Maintenance Plants" },
  { id: 3, name: "Peace Lily", price: 24.99, image: "/images/plant3.jpg", category: "Air Purifying Plants" },
  { id: 4, name: "Aloe Vera", price: 14.99, image: "/images/plant4.jpg", category: "Medicinal Plants" },
  { id: 5, name: "Jade Plant", price: 18.99, image: "/images/plant5.jpg", category: "Low Maintenance Plants" },
  { id: 6, name: "English Ivy", price: 12.99, image: "/images/plant6.jpg", category: "Air Purifying Plants" },
];

function ProductList() {
  // Aquí podrías filtrar por categorías si lo deseas
  return (
    <div className="product-list">
      {plantsData.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </div>
  );
}

export default ProductList;
