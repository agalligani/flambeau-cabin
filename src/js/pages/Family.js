import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
// import Column from "react-bootstrap/Column";

class Family extends Component {
  state = {
    img_path: "../../../assets/images/",
    slides: [
      {
        src: "at_the_table.png",
        caption: "At the Table",
        text: "Eating at the cabin Al Fresco"
      },
      {
        src: "hanging_deer.jpg",
        caption: "Hanging Deer",
        text: "Pop pop dresses another buck after the day's hunt."
      },
      {
        src: "john_jeanette_joyce.png",
        caption: "John, Jeanette & Joyce",
        text: "Cooling off in the Flambeau."
      },
      {
        src: "joyce_grandma_jan.png",
        caption: "Joyce, Grandma & Jan",
        text: ""
      }
    ]
  };
  render() {
    return (
      <div class="container">
        <p>
          <h1 class="banner">Family Trees</h1>
        </p>

        <div class="row">
          <div class="col-md-12">
            <Carousel>
              {this.state.slides.map((slide, i) => {
                return (
                  <Carousel.Item key={i}>
                    <div className="d-block w-100">
                      <div class="img-slide">
                        <img
                          className="center"
                          src={
                            this.state.img_path +
                            slide.src +
                            "?text=First slide&bg=373940"
                          }
                          alt={slide.caption}
                        />
                      </div>
                    </div>
                    <Carousel.Caption>
                      <h3>{slide.caption}</h3>
                      <p>{slide.text}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            Maecenas sed diam eget risus varius blandit sit amet non magna.
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
            Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo
            risus, porta ac consectetur ac, vestibulum at eros. Duis mollis, est
            non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
            sem nec elit.
          </div>
        </div>
      </div>
    );
  }
}

export default Family;
