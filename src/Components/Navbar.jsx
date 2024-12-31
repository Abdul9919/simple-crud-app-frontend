import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios is installed

export const Navbar = ({ onProductsFetched }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();

    if (searchTerm.trim()) {
      try {
        // Make an API request to get filtered products based on the search term
        const response = await axios.get(`/api/products?search=${searchTerm}`);
        console.log('Fetched products:', response.data); // Debugging: Check the data
        onProductsFetched(response.data); // Update the products state in the parent component
      } catch (error) {
        console.error('Error fetching products:', error.message);
        alert('Failed to fetch products.');
      }
    } else {
      alert('Please enter a search term!');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Product Search</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Contact</a>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
