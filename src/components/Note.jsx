/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

const Note = ({ data, handleEdit, handleDelete }) => {
  return (
    <div className="">
      {data.map((note) => {
        return (
          <div key={note.id} className="">
            <div className="">
              <h5 className="">{note.pesan}</h5>
              <div>
                <button
                  onClick={() => handleEdit(note.id)}
                  className=""
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(note.id)}
                  className=""
                >
                  Del
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Note.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      pesan: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Note;
