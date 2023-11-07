import './ProductCard.css';

const ProductCard = () => {
     const cardStyle = {
          border: '1px solid #ccc',
          borderRadius: '5px',
          padding: '10px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
     };

     return (
          <div style={cardStyle} className="product-card">
               <img src="product-image.jpg" alt="Product" />
               <h3>Product Title</h3>
               <p>Description of the product goes here.</p>
               <button>Add to Cart</button>
          </div>
     );
}

export default ProductCard;