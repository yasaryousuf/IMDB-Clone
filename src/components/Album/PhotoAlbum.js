import React, { Component } from "react";

export class PhotoAlbum extends Component {
  render() {
    return (
      <>
        <header className="yy-bg-primary text-center py-5 mb-4">
          <div className="container">
            <h1 className="font-weight-light yy-hero-header-text">
              Thumbnail Gallery
            </h1>
          </div>
        </header>

        <div class="row text-center text-lg-left">
          {this.props.photos
            .filter((item, index) => index < 8)
            .map(photo => (
              <div class="col-lg-3 col-md-4 col-6" key={photo.id}>
                <a href="/" class="d-block mb-4 h-100">
                  <img
                    class="img-fluid img-thumbnail"
                    src={`https://image.tmdb.org/t/p/original/${photo.file_path}`}
                    alt=""
                  />
                </a>
              </div>
            ))}
        </div>
      </>
    );
  }
}

export default PhotoAlbum;
