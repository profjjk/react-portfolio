import React from 'react';
import Navbar from '../components/Navbar';

function Blog() {
  return (
    <div>
      <h1 className="text-center display-1 mt-5">- Coming Soon -</h1>
      <Navbar 
      prev={'Work'}
      prevPath={'/react-portfolio#/work#'}
      forward={'Home'}
      forPath={'/react-portfolio#/'}
      />
    </div>
  )
}

export default Blog;