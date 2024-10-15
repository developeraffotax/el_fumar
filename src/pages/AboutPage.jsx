import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container  my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center p-8">
        Welcome to El Fumar, where your automotive needs meet exceptional quality and service! Founded by a team of car enthusiasts, we understand the passion that drives every driver. Our mission is to provide a one-stop-shop for all your car parts and accessories, offering a wide selection of top-notch products at competitive prices.

At El Fumar, we believe that every vehicle deserves the best. That's why we source only the highest quality parts from trusted manufacturers, ensuring reliability and performance. Whether you're a DIY mechanic or a professional technician, our user-friendly platform makes it easy to find exactly what you need.

Customer satisfaction is our top priority. Our knowledgeable team is always here to help you navigate our extensive inventory and provide expert advice. We’re not just about selling parts; we’re about building lasting relationships with our customers.

Join our community of automotive enthusiasts today and experience the difference at El Fumar—where quality meets passion on every road!
        </p>

        
        
      </div>
      <Footer />
    </>
  )
}

export default AboutPage