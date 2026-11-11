
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShoppingBasket,
  Truck,
  ShieldCheck,
  Clock,
  Star,
  Leaf
} from "lucide-react";

const categories = [
  {
    name: "Fresh Vegetables",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500",
    count: "25+ Products"
  },
  {
    name: "Fresh Fruits",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=500",
    count: "30+ Products"
  },
  {
    name: "Dairy Products",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=500",
    count: "20+ Products"
  },
  {
    name: "Bakery",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500",
    count: "15+ Products"
  },
  {
    name: "Beverages",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500",
    count: "18+ Products"
  },
  {
    name: "Snacks",
    image: "https://images.unsplash.com/photo-1621939514649-280e2aa2f2f3?w=500",
    count: "22+ Products"
  }
];

const products = [
  {
    name: "Fresh Red Tomatoes",
    category: "Vegetables",
    price: "₹40",
    oldPrice: "₹55",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=500",
    rating: "4.8",
    offer: "20% OFF"
  },
  {
    name: "Organic Bananas",
    category: "Fruits",
    price: "₹50",
    oldPrice: "₹65",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500",
    rating: "4.7",
    offer: "15% OFF"
  },
  {
    name: "Fresh Milk",
    category: "Dairy",
    price: "₹30",
    oldPrice: "₹40",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500",
    rating: "4.9",
    offer: "10% OFF"
  },
  {
    name: "Fresh Strawberries",
    category: "Fruits",
    price: "₹120",
    oldPrice: "₹150",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500",
    rating: "4.8",
    offer: "20% OFF"
  }
];

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="hero-label">
              <Leaf size={16} /> FRESH & NATURAL
            </span>

            <h1>
              Fresh Groceries <br />
              Delivered to <span>Your Doorstep</span>
            </h1>

            <p>
              Discover fresh fruits, vegetables and daily essentials
              at amazing prices. Quality you can trust, freshness
              you can taste.
            </p>

            <div className="hero-buttons">
              <Link to="/shop" className="primary-btn">
                Shop Now <ArrowRight size={18} />
              </Link>

              <Link to="/offers" className="secondary-btn">
                Explore Offers
              </Link>
            </div>

            <div className="hero-stats">
              <div>
                <h3>500+</h3>
                <span>Products</span>
              </div>
              <div>
                <h3>10K+</h3>
                <span>Happy Customers</span>
              </div>
              <div>
                <h3>100%</h3>
                <span>Fresh Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <div className="search-box">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Search for fruits, vegetables, groceries..."
          />
          <Link to="/search" className="search-button">
            Search
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="section categories-section">
        <div className="section-heading">
          <div>
            <span className="section-tag">SHOP BY CATEGORY</span>
            <h2>Explore Our Categories</h2>
            <p>Everything you need for your daily lifestyle.</p>
          </div>
          <Link to="/categories" className="view-all">
            View All <ArrowRight size={17} />
          </Link>
        </div>

        <div className="category-grid">
          {categories.map((category, index) => (
            <Link
              to="/categories"
              className="category-card"
              key={index}
            >
              <div className="category-image">
                <img src={category.image} alt={category.name} />
              </div>
              <h3>{category.name}</h3>
              <p>{category.count}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Offer Banner */}
      <section className="offer-banner">
        <div className="offer-content">
          <span>LIMITED TIME OFFER</span>
          <h2>Freshness at Your Doorstep!</h2>
          <p>Get amazing discounts on your daily grocery shopping.</p>
          <Link to="/offers" className="offer-btn">
            Explore Deals <ArrowRight size={18} />
          </Link>
        </div>
        <div className="offer-emoji">🛒🥦🍎</div>
      </section>

      {/* Featured Products */}
      <section className="section products-section">
        <div className="section-heading">
          <div>
            <span className="section-tag">OUR BEST PICKS</span>
            <h2>Featured Products</h2>
            <p>Fresh and quality products selected for you.</p>
          </div>
          <Link to="/products" className="view-all">
            View All <ArrowRight size={17} />
          </Link>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <span className="product-offer">{product.offer}</span>

              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-info">
                <span className="product-category">
                  {product.category}
                </span>
                <h3>{product.name}</h3>

                <div className="rating">
                  <Star size={15} fill="#f5a623" color="#f5a623" />
                  {product.rating}
                </div>

                <div className="product-bottom">
                  <div className="product-price">
                    <strong>{product.price}</strong>
                    <del>{product.oldPrice}</del>
                  </div>

                  <Link to="/cart" className="add-cart">
                    + Add
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <div className="section-heading centered">
          <div>
            <span className="section-tag">WHY STACKLY MART?</span>
            <h2>We Make Grocery Shopping Easy</h2>
            <p>Your trusted partner for fresh and quality groceries.</p>
          </div>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><Leaf /></div>
            <h3>100% Fresh Products</h3>
            <p>Freshly selected groceries with quality assurance.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><Truck /></div>
            <h3>Fast Delivery</h3>
            <p>Convenient doorstep delivery for your daily needs.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><ShieldCheck /></div>
            <h3>Secure Shopping</h3>
            <p>A simple and reliable shopping experience.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><Clock /></div>
            <h3>Save Your Time</h3>
            <p>Shop your essentials conveniently from anywhere.</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div>
          <span>STAY UPDATED</span>
          <h2>Get Fresh Deals in Your Inbox!</h2>
          <p>Discover exclusive offers and supermarket updates.</p>
        </div>

        <Link to="/subscribe" className="newsletter-btn">
          Subscribe Now <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}

export default Home;
