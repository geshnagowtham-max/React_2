import React, { useState, useEffect } from 'react';

const ProductSearch = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products dynamically based on search input
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="task-container">
      <h2>Product Search</h2>
      <input
        type="text"
        className="search-input"
        placeholder="Search products by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      {loading ? (
        <div className="loading">Loading products...</div>
      ) : (
        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="card product-card">
                <img src={product.image} alt={product.title} className="product-img" />
                <h4 className="product-title">{product.title}</h4>
                <p className="product-price">${product.price.toFixed(2)}</p>
              </div>
            ))
          ) : (
            <p>No products found matching "{searchTerm}"</p>
          )}
        </div>
      )}
    </section>
  );
};

export default ProductSearch;
