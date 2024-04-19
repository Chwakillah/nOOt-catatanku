/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Note from "./components/Note";
import { uid } from "uid";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      pesan: "belajar react",
    },
    {
      id: 2,
      pesan: "belajar tailwind",
    },
  ]);

  const [isUpdate, setIsUpdate] = useState({ id: null, status: false });

  const [formData, setFormdata] = useState({
    pesan: "",
  });

  function handleChange(e) {
    let data = { ...formData };
    data[e.target.name] = e.target.value;
    setFormdata(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("acc");

    if (formData.pesan === "") {
      return false;
    }
    let data = [...notes];
    if (isUpdate.status) {
      data.forEach((note) => {
        if (note.id === isUpdate.id) {
          note.pesan = formData.pesan;
        }
      });
    } else {
      data.push({ id: uid(), pesan: formData.pesan });
    }

    setIsUpdate({ id: null, status: false });
    setNotes(data);
    setFormdata({ pesan: "" });
  }

  function handleEdit(id) {
    let data = [...notes];
    let foundData = data.find((note) => note.id === id);
    setFormdata({ pesan: foundData.pesan });
    setIsUpdate({ id: id, status: true });
  }
  function handleDelete(id) {
    let data = [...notes];
    let filteredData = data.filter((note) => note.id != id);
    setNotes(filteredData);
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <form
          onSubmit={handleSubmit}
          className="min-h bg-sand mx-auto p-4 flex flex-col gap-4"
        >
          <textarea
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full bg-white h-12 p-4 text-moka rounded-md resize-none"
            name="pesan"
            value={formData.pesan}
            onChange={handleChange}
          />
          <button className="btn btn-neutral bg-moka p-3 rounded-lg text-white font-bold">
            Catat!
          </button>
        </form>
      </div>
      <Note handleEdit={handleEdit} handleDelete={handleDelete} data={notes} />
    </div>
  );
}

export default App;
