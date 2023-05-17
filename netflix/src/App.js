import "./App.css";
import Banner from "./Banner";
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="app ">
      {/* Nav */}

      {/* Banner */}

      <Banner />

      {/* Container */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        // bu şekilde yazdığın zaman default değer olarak true atar
        // diğer componentlerde ise hiç olmadığı için false olarak atılacaktır
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
