import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchInput from "./components/SearchInput";
import VideoList from "./components/VideoList";
import videos from "./mockData";
import SearchableList from "./components/SearchableList";
import { Person } from "./components/Person";

function App() {
  const loggedIn = false;
  return (
    <div>
      {loggedIn ? (
        <div className="p-4">
          <header className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">React Videos</h1>
            <h4 className="text-lg">A brief history of React</h4>
          </header>

         <SearchableList videos={videos}/>
        </div>
      ) : (
        // <<h2>please log in</h2>>
        <Person/>
      )}
    </div>
  );
}

export default App;
