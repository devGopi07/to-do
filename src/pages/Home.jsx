import React from "react";
import AppButton from "../components/MuiOverwrites/AppButton";
import SaveIcon from "@mui/icons-material/Save";
import { IconButton } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import Layout from "../components/TodoLayout/Layout";

const Home = () => {
  return (
    <Layout>
     <div className=" min-h-[90vh] flex justify-center">
     <h1 className="mt-[100px] text-[35px]" >Welcome To Todo List App</h1>
     </div>
    </Layout>
  );
};

export default Home;
