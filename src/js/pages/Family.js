import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

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
        <div class="row">
          <Carousel>
            {this.state.slides.map((slide, i) => {
              return (
                <Carousel.Item key={i}>
                  <div className="d-block w-100">
                    <img
                      className="img-slide"
                      src={
                        this.state.img_path +
                        slide.src +
                        "?text=First slide&bg=373940"
                      }
                      alt={slide.caption}
                    />
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
    );
  }
}

export default Family;
