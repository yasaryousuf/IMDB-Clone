import React from 'react';

import FooterComponent from './includes/Footer';
import NavbarComponent from './includes/Navbar';
import Hero from './includes/Hero';
import Parent from './hoc/Parent';

function App() {
  return (
    <div className="App">
      <Parent>
        <NavbarComponent/>
        <Hero/>
      </Parent>

      <div class="container">

        <div class="row">
          <div class="col-md-4 mb-5">
            <div class="card h-100">
              <img class="card-img-top" src="http://placehold.it/300x200" alt=""/>
              <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                <a href="#" class="btn btn-primary">Find Out More!</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-5">
            <div class="card h-100">
              <img class="card-img-top" src="http://placehold.it/300x200" alt=""/>
              <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                <a href="#" class="btn btn-primary">Find Out More!</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-5">
            <div class="card h-100">
              <img class="card-img-top" src="http://placehold.it/300x200" alt=""/>
              <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                <a href="#" class="btn btn-primary">Find Out More!</a>
              </div>
            </div>
          </div>
        </div>

      </div>

      <FooterComponent/>

    </div>
  );
}

export default App;
