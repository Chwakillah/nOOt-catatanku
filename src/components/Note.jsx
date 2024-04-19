/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Note = ({ data, handleEdit, handleDelete }) => {
  return (
    <div className="container bg-sand mx-auto p-4">
      {data.map((note) => {
        return (
          <div key={note.id} className="">
            <div className="flex gap-4">
              <h5 className="textarea textarea-ghost bg-white p-4 text-moka rounded-md my-2 resize-vertical-none">
                {note.pesan}
              </h5>
              <div className="flex gap-4">
                <button onClick={() => handleEdit(note.id)} className="">
                  <MdModeEdit className="size-5 text-moka" />
                </button>
                <button onClick={() => handleDelete(note.id)} className="">
                  <MdDelete className="size-6 text-moka" />
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
