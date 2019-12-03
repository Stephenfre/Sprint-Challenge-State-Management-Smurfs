import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurfData } from "../actions";

const SmurfForm = props => {
  const [newSmurf, setNewSmurfs] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleChanges = e => {
    setNewSmurfs({ ...newSmurf, [e.target.name]: e.target.value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    props.addSmurfData(newSmurf);
    setNewSmurfs({
      name: "",
      age: "",
      height: ""
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="name"
          name="name"
          type="text"
          value={newSmurf.name}
          onChange={handleChanges}
        />
        <input
          placeholder="age"
          name="age"
          type="text"
          value={newSmurf.age}
          onChange={handleChanges}
        />
        <input
          placeholder="height"
          name="height"
          type="text"
          value={newSmurf.height}
          onChange={handleChanges}
        />
        <button
        // onClick={() => {
        //   props.addSmurfData(newSmurf);
        // }}
        >
          Add Smurf
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { addSmurfData } // {updateTitle: updateTitle }
)(SmurfForm);
