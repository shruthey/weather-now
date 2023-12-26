import React from "react";
import "./Home.css"; // Import the CSS file for styling

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: null,
    };
  }

  selectCity(city) {
    // Update the state with the selected city
    this.setState({ selectedCity: city });

    // Call the onCitySelect prop with the selected city
    this.props.onCitySelect(city);
  }

  renderCityBox(city, cityName) {
    return (
      <div
        className={`city-box ${
          city === this.state.selectedCity ? "selected" : ""
        }`}
        key={city}
        onClick={() => this.selectCity(city)}
      >
        <div className="city-name">{cityName}</div>
      </div>
    );
  }

  render() {
    return (
      <>
        {/* ... existing code ... */}
        <div className="city-container">
          {/* European Cities */}
          {this.renderCityBox("paris", "Paris")}
          {this.renderCityBox("london", "London")}
          {this.renderCityBox("berlin", "Berlin")}
          {this.renderCityBox("madrid", "Madrid")}
          {this.renderCityBox("rome", "Rome")}

          {/* US Cities */}
          {this.renderCityBox("new-york", "New York")}
          {this.renderCityBox("los-angeles", "Los Angeles")}
          {this.renderCityBox("chicago", "Chicago")}
          {this.renderCityBox("miami", "Miami")}
          {this.renderCityBox("san-francisco", "San Francisco")}
          {this.renderCityBox("las-vegas", "Las Vegas")}
          {this.renderCityBox("houston", "Houston")}
          {this.renderCityBox("atlanta", "Atlanta")}

          {/* Indian Cities */}
          {this.renderCityBox("delhi", "Delhi")}
          {this.renderCityBox("mumbai", "Mumbai")}
          {this.renderCityBox("bangalore", "Bangalore")}

          {/* Other Important Cities */}
          {this.renderCityBox("tokyo", "Tokyo")}
          {this.renderCityBox("sydney", "Sydney")}
          {this.renderCityBox("beijing", "Beijing")}
          {this.renderCityBox("dubai", "Dubai")}
          {this.renderCityBox("cape-town", "Cape Town")}
        </div>
      </>
    );
  }
}

export default Home;
