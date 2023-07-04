import React, { useEffect, useState } from "react";

const App = () => {
  const [sirinaProzora, setSirinaProzora] = useState(window.innerWidth);
  const [ime, setIme] = useState("");

  /* Ovakav primjer se konstantno renderira jer nema definiranu listu uvjeta */
  useEffect(() => {
    console.log("Učitavam se prilikom svakog rendera");
    window.addEventListener("resize", updateSirinaPozora);
  });

  /* Ovakav primjer se pokreće prilikom učitavanja na drugom renderu, renderirat će se samo jednom */
  useEffect(() => {
    console.log("Učitavam se na prvom renderu/mountanju komponente");
  }, []);

  /* Ovakav primjer se pokreće prilikom učitavanja i kada se promijeni vrijednost varijable ime */
  useEffect(() => {
    console.log(`Ime mi je sad ${ime}`);
  }, [ime]);

  /* Ovakav primjer se pokreće prilikom učitavanja i kada se promijeni vrijednost varijable ime, ali također
  unmounta komponentu prije novog rendera. */
  useEffect(() => {
    console.log(`Ime mi je još uvijek ${ime}`);
    return () => {
      console.log("Unmountali smo komponentu prije novog rendera");
    };
  }, [ime]);

  const updateSirinaPozora = () => {
    setSirinaProzora(window.innerWidth);
  };

  return (
    <div className="app">
      <p>Širina prozora: {sirinaProzora}</p>
      <input
        type="text"
        value={ime}
        onChange={(event) => setIme(event.target.value)}
      />
    </div>
  );
};

/* import SearchPolje from "./components/SearchPolje";
import ListaKartica from "./components/ListaKartica";
import "./App.css";

const App = () => {
  const [searchPolje, setSearchPolje] = useState("");
  const [osobe, setOsobe] = useState([]);
  const [filter, setFilter] = useState(osobe);

  useEffect(() => {
    fetch(" https://reqres.in/api/users/")
      .then((res) => res.json())
      .then((response) => setOsobe(response.data));
  }, []);

  useEffect(() => {
    const noviFilter = osobe.filter((osoba) => {
      return osoba.first_name.toLocaleLowerCase().includes(searchPolje);
    });
    setFilter(noviFilter);
  }, [osobe, searchPolje]);

  const onFilterChange = (event) => {
    const searchPoljeString = event.target.value.toLocaleLowerCase();
    setSearchPolje(searchPoljeString);
  };

  return (
    <div className="app">
      <SearchPolje onFilterChange={onFilterChange} />
      <ListaKartica osobe={filter} />
    </div>
  );
}; */

export default App;
