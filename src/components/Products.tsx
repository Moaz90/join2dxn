import React from 'react';
import { POPULAR_PRODUCTS } from '../constants';
import SectionTitle from './SectionTitle';

const Products: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Popular DXN Products" 
          subtitle="Experience these quality products yourself before sharing with others" 
        />
        
        <div className="flex flex-wrap justify-center mt-12">
          {POPULAR_PRODUCTS.map(product => (
            <div key={product.id} className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;