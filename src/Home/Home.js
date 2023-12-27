import React from "react";
import "./Home.scss";
import monthsData from "../monthsData";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSeason: null,
      selectedMonth: null,
      selectedCity: null,
    };
  }

  selectSeason(season) {
    console.log(season);
    this.setState({ selectedSeason: season, selectedMonth: null });
  }

  selectMonth(month) {
    console.log(month);
    this.setState({ selectedMonth: month });
  }

  selectCity() {
    console.log(document.getElementById("cityInput").value);
    this.setState({ selectedCity: document.getElementById("cityInput").value });
  }

  renderMonthBox(month) {
    return (
      <div
        className={`month-box ${
          month === this.state.selectedMonth ? "selected" : ""
        }`}
        key={month}
        onClick={() => this.selectMonth(month)}
      >
        <div className="month-name">{month}</div>
      </div>
    );
  }

  renderSeasonBox(season) {
    return (
      <div
        className={`season-box ${
          season === this.state.selectedSeason ? "selected" : ""
        }`}
        key={season}
        onClick={() => this.selectSeason(season)}
      >
        <div className="season-name">{season}</div>
      </div>
    );
  }

  render() {
    const handleGoClick = () => {
      console.log(this.state);
      if (
        this.state.selectedCity &&
        this.state.selectedSeason &&
        this.state.selectedMonth
      ) {
        this.props.onCitySelect(this.state.selectedCity);
        this.props.onMonthSelect(
          this.state.selectedMonth
            ? this.state.selectedMonth
            : this.state.selectedSeason
        );
      } else {
        console.error("Please select a city, season, and month");
      }
    };

    return (
      <div className="home-container">
        <header>
          <h1>Discover Your Adventure</h1>
        </header>

        <p>
          Embark on a journey like never before! Share a season and a month, and
          let us unveil the perfect time to experience your dream destination.
          🌍✈️
        </p>

        <div className="city-input-container">
          <label htmlFor="cityInput">Enter a City:</label>
          <input
            type="text"
            id="cityInput"
            onChange={() => this.selectCity()}
            placeholder="Type a city name..."
          />
        </div>

        <div className="season-container">
          <label>Select a Season:</label>
          {Object.keys(monthsData).map((season) =>
            this.renderSeasonBox(season)
          )}
        </div>

        <div className="month-container">
          <label>Select a Month:</label>
          {this.state.selectedSeason &&
            monthsData[this.state.selectedSeason].map((month) =>
              this.renderMonthBox(month)
            )}
        </div>
        <button onClick={handleGoClick}>Go</button>
      </div>
    );
  }
}

export default Home;
