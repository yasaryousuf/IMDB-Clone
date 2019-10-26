import React, { Component } from "react";

export class Hero extends Component {
  render() {
    return (
      <>
        <header className="yy-bg-primary py-5">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-lg-12">
                <h1 className="display-4 yy-hero-header-text mt-5 mb-2">
                  Business Name or Tagline
                </h1>
                <p className="lead mb-5 yy-hero-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                  possimus ab labore provident mollitia. Id assumenda voluptate
                  earum corporis facere quibusdam quisquam iste ipsa cumque unde
                  nisi, totam quas ipsam.
                </p>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Hero;
