import React from 'react';

const ProductGrid = ({ products, loading, error }) => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Our Products</h2>

      {loading && <p className="text-center">Loading products...</p>}
      {error && <p className="text-center text-danger">{error}</p>}

      {!loading && !error && (
        <div className="row">
          {products.length === 0 && <p className="text-center">No products found.</p>}
          {products.map((product) => (
            <div key={product._id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="card h-100">
                <img
                  src={product.image || 'https://via.placeholder.com/150'} // Fallback image
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.quantity}</p>
                  <p className="text-muted mt-auto">${product.price}</p>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
