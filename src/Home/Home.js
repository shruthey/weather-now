import React from "react";

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
        className={`city ${city === this.state.selectedCity ? "selected" : ""}`}
        key={city}
        onClick={() => this.selectCity(city)}
      >
        <img src={`${city}.jpg`} alt={cityName} />
        <div className="city-name">{cityName}</div>
      </div>
    );
  }

  render() {
    return (
      <>
        {/* ... existing code ... */}
        <div className="city-box">
          {this.renderCityBox("paris", "Paris")}
          {this.renderCityBox("tokyo", "Tokyo")}
          {this.renderCityBox("new-york", "New York")}
          {/* Add more city boxes as needed */}
        </div>
      </>
    );
  }
}

export default Home;
