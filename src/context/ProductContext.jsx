
import React, { createContext, useContext } from 'react';

const ProductContext = createContext();

const allProducts = [
  { id: 1, name: 'Braces', price: 9.99, image: '/images/braces.jpg', description: 'Elegant hand accessories perfect for weddings, formal events, or adding charm to everyday outfits.' },
  { id: 2, name: 'Reading Glasses', price: 19.99, dis: "$"+23.99, image: '/images/glasses.jpg', description: 'Lightweight, modern eyeglasses designed for clarity and comfort during reading or screen use.' },
  { id: 3, name: 'Stylish Eyewear', price: 21.99, image: '/images/glasses2.jpg', description: 'Trendy clear-frame glasses for fashion-forward individuals. Ideal for both work and casual wear.' },
  { id: 4, name: 'Leather Handbag (Large)', price: 49.99,dis: "$"+53.99, image: './images/handbag2-w.jpg', description: 'Spacious and elegant leather handbag with strong handles and a luxurious matte finish.' },
  { id: 5, name: 'Mini Handbag', price: 44.99, image: '/images/handbag-w.jpg', description: 'Chic mini handbag with a clean design, perfect for evenings out or minimalist carry.' },
  { id: 6, name: 'Black Hangtop', price: 24.99, dis: "$"+34.99, image: '/images/hangtop-m.jpg', description: 'Sleek black sleeveless top ideal for layering or wearing solo on warm days.' },
  { id: 7, name: 'Kids Winter Hat', price: 12.99, image: '/images/hat-kids.jpg', description: 'Cozy woolen hat designed to keep kids warm while adding a playful touch.' },
  { id: 8, name: 'Classic Fedora Hat', price: 14.99, image: '/images/hat-m.jpg', description: 'Stylish fedora hat with a structured brim, perfect for elevating your outfit.' },
  { id: 9, name: 'Heeled Red Shoes', price: 39.99, image: '/images/healnails-w.jpg', description: 'Bold red high heels paired with a matching clutch. Designed to make a confident statement.' },
  { id: 10, name: 'Metallic Hoodie', price: 34.99, dis: "$"+39.99, image: '/images/hod2-m.jpg', description: 'Futuristic metallic hoodie with a loose fit, blending comfort with bold fashion.' },
  { id: 11, name: 'White Hoodie', price: 34.99, dis: "$"+39.99, image: '/images/hod-w.jpg', description: 'Minimalist white hoodie crafted from soft fleece for everyday comfort and style.' },
  { id: 12, name: 'Grey Hoodie', price: 32.99, image: '/images/hody-m.jpg', description: 'Essential grey hoodie with zipper front and modern fit, suitable for all seasons.' },
  { id: 13, name: 'Black Bomber Jacket', price: 59.99, dis: "$"+62.99, image: '/images/jacket-m.jpg', description: 'Water-resistant bomber jacket with a sleek, urban look and functional pockets.' },
  { id: 14, name: 'Denim Button Jacket', price: 61.99, image: '/images/jacket-m1.jpg', description: 'Classic indigo denim jacket with button closure and front pockets for rugged appeal.' },
  { id: 15, name: 'Stacked Jeans Display', price: 39.99, image: '/images/jeans.jpg', description: 'Assorted jeans collection in various fits and washes for all-day versatility.' },
  { id: 16, name: 'Men’s Style Kit', price: 44.99, image: '/images/men-fashion.jpg', description: 'A flat-lay of essential men’s wear accessories — perfect for the modern man’s wardrobe.' },
  { id: 17, name: 'Men’s Casual Outfit', price: 49.99, image: '/images/outfit-m.jpg', description: 'Laid-back outfit combo with a cotton shirt and fitted jeans for weekend comfort.' },
  { id: 18, name: 'Men’s Pants Collection', price: 29.99,  dis: "$"+74.99, image: '/images/pant-m.jpg', description: 'Smart-casual pants designed with comfort stretch fabric, available in earthy tones.' },
  { id: 19, name: 'Women’s Jeans Collection', price: 31.99, image: '/images/pant-w.jpg', description: 'High-waisted, tapered jeans for women—perfect for both casual and work outfits.' },
  { id: 20, name: 'Fragrance Bottle', price: 19.99, image: '/images/per.jpg', description: 'Elegant unisex perfume with a balanced blend of citrus, wood, and floral notes.' },
  { id: 21, name: 'Kid’s Shirt Pose', price: 15.99, image: '/images/shirt-kid.jpg', description: 'Trendy kid’s cotton shirt in bright colors, ideal for school or playdates.' },
  { id: 22, name: 'Men’s Shirt & Shoe Combo', price: 54.99, image: '/images/shirtshoe-m.jpg', description: 'Smart shirt paired with formal shoes — your go-to for meetings or dinner dates.' },
  { id: 23, name: 'Stacked T-Shirts', price: 27.99, image: '/images/shirts-m.jpg', description: 'A variety of crewneck t-shirts in neutral shades, made from premium cotton.' },
  { id: 24, name: 'Red Sneakers', price: 64.99, image: '/images/shoe2-m.jpg', description: 'Bold and breathable sneakers in red, ideal for sports or a statement street look.' },
  { id: 25, name: 'Casual Loafers', price: 67.99,dis: "$"+69.99, image: '/images/shoe5-m.jpg', description: 'Light brown slip-on loafers with stitched detailing, crafted for comfort.' },
  { id: 26, name: 'Kid’s Red Shoes', price: 39.99, image: '/images/shoe-kid.jpg', description: 'Fun and durable shoes designed to support your child’s daily adventures.' },
  { id: 27, name: 'Kid’s Stripe Shoes', price: 44.99, image: '/images/shoe-k.jpg', description: 'Colorful and lightweight slip-ons for active kids.' },
  { id: 28, name: 'Sporty Black Sneakers', price: 59.99, image: '/images/shoe-m.jpg', description: 'Versatile sneakers designed with grip soles and breathable mesh upper.' },
  { id: 29, name: 'Classic Men’s Shoes', price: 64.99, image: '/images/shoes.jpg', description: 'Polished leather shoes suitable for formal occasions and office wear.' },
  { id: 30, name: 'Tech-Run Sneakers', price: 69.99,  dis: "$"+74.99, image: '/images/shoes3-m.jpg', description: 'Lightweight performance sneakers made for training and daily wear.' },
  { id: 31, name: 'Colorful Socks Set', price: 9.99, dis: "$"+15.99, image: '/images/socks.jpg', description: 'Bright and cozy socks that add fun to your everyday essentials.' },
  { id: 32, name: 'Business Suit', price: 89.99, image: '/images/suit-m.jpg', description: 'Two-piece tailored suit for men, combining elegance with comfort.' },
  { id: 33, name: 'Grey Sweater', price: 49.99, image: '/images/sweater-m.jpg', description: 'Warm knit sweater with ribbed cuffs, perfect for chilly weather.' },
  { id: 34, name: 'Oversized Sweathody', price: 38.99, image: '/images/sweathody-k.jpg', description: 'Comfy oversized hoodie for lounging or street style layering.' },
  { id: 35, name: 'Denim Trousers', price: 34.99, image: '/images/Trousers-m.jpg', description: 'Dark blue straight-fit denim with a classic five-pocket design.' },
  { id: 36, name: 'Basic White T-shirt', price: 19.99, dis: "$"+23.99, image: '/images/t-shirt.jpg', description: 'Soft white t-shirt with a relaxed fit, perfect for everyday wear.' },
  { id: 37, name: 'T-shirt on Hanger', price: 22.99, image: '/images/t-shirt-m.jpg', description: 'Classic black tee displayed on hanger. A wardrobe essential in all seasons.' },
  { id: 38, name: 'Clothing Bundle', price: 55.99, image: '/images/tuananh-m.jpg', description: 'Mixed apparel set including bras, tops, and wraps for cozy layering.' },
  { id: 39, name: 'Men’s Wallet', price: 24.99, image: '/images/wallet-men.jpg', description: 'Compact leather wallet with bill slots and card compartments.' },
  { id: 40, name: 'Luxury Men’s Watch', price: 89.99, image: '/images/watches-m.jpg', description: 'Black chronograph wristwatch for timeless sophistication.' },
  { id: 41, name: 'Silver Men’s Watch', price: 59.99, image: '/images/watch-m.jpg', description: 'Elegant silver-toned wristwatch with leather band and analog display.' },
  { id: 42, name: 'Women’s Shirt', price: 29.99, image: '/images/women-shirt.jpg', description: 'Casual loose-fit women’s shirt with a soft drape and modern collar.' },
];


export const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={{ products: allProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
