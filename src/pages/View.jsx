import React from "react";
import Layout from "../components/TodoLayout/Layout";
import { TextField } from "@mui/material";

const View = () => {
  function handleme() {
    console.log("Inside");
  }
  return (
    <Layout>
      <div className="mt-[100px]">
        <form onSubmit={() => handleme()}>
          <TextField
          placeholder="Enter Task Name"
          name="name"
          
          />
        </form>
      </div>
    </Layout>
  );
};

export default View;
