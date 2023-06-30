import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      osobe: [],
      searchPolje: "",
    };
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users/").then((res) =>
      res.json().then((response) =>
        this.setState(() => {
          return { osobe: response.data };
        })
      )
    );
  }

  onFilterChange = (event) => {
    const searchPolje = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchPolje };
    });
  };

  render() {
    const { osobe, searchPolje } = this.state;
    const { onFilterChange } = this;
    const filter = osobe.filter((osoba) => {
      return osoba.first_name.toLocaleLowerCase().includes(searchPolje);
    });

    return (
      <div className="app">
        <input
          type="search"
          className="search-box"
          placeholder="Pretraži"
          onChange={onFilterChange}
        />
        {filter.map((osoba) => {
          return <p key={osoba.id}>{osoba.first_name}</p>;
        })}
      </div>
    );
  }
}
