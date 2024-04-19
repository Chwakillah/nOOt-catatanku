/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <form action="" className="container bg-sand mx-auto p-4 flex gap-4">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs bg-white h-12 p-4 text-moka rounded-md"
        />
        <button className="btn btn-neutral bg-moka p-3 rounded-lg text-white font-bold">Catat!</button>
      </form>
    </div>
  );
}

export default App;
