import React from 'react';

const About = () => {
    const backgroundImageStyle = {
      backgroundImage: `url('https://sothebys-com.brightspotcdn.com/08/f3/27aec5e248f5ab647d074cfeed6a/729sneakers-c7d4c-t1-02a.jpg')`, // Replace with the actual image path
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh', // Set the height to the full viewport height
    };
  
    return (
      <div className="about-container" style={backgroundImageStyle}>
        <div className="d-flex flex-column align-items-center justify-content-center h-100">
          <h2>About Kicks Buzz</h2>
          <p>Welcome to our Sneaker Shop! We offer a wide range of the latest sneakers.</p>
          <p>
          Explore our curated collection of the latest and most stylish sneakers from top brands. Whether you're a sneaker enthusiast or just looking for the perfect pair, you've come to the right place. At Kicks Buzz, we're passionate about sneakers, and we're dedicated to bringing you the hottest releases, limited editions, and classic kicks.
        </p>
        <p>
          Our mission is to provide you with a seamless shopping experience, offering a wide range of sizes and styles to suit your unique taste. Join our community of sneakerheads and stay updated on the latest trends, exclusive drops, and special promotions.
        </p>
        <p>
          Start your sneaker journey with us, and step up your style game. Browse our catalog, add your favorite kicks to your cart, and complete your order hassle-free. Your perfect pair of sneakers is just a click away!
        </p>
        </div>
      </div>
    );
  };
  

export default About;
