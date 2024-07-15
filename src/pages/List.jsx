import React from "react";
import Layout from "../components/TodoLayout/Layout";
import ListingTable from "../components/Lists/ListingTable";
import { useNavigate } from "react-router-dom";

const List = () => {
  const navigate = useNavigate()
  const tableMeta = {
    title: "Title",
    description: "Description",
    completed: "Completed",
  };
  const tableData = [
    {
      "id": 1,
      "title": "Service",
      "description": "Has To Service The Bike On Saturday.",
      "completed": "No"
    },
    {
      "id": 2,
      "title": "Grocery Shopping",
      "description": "Buy vegetables, fruits, and milk from the supermarket.",
      "completed": "No"
    },
    {
      "id": 3,
      "title": "Email",
      "description": "Respond to emails from clients.",
      "completed": "No"
    },
    {
      "id": 4,
      "title": "Workout",
      "description": "Attend the gym for a cardio session.",
      "completed": "No"
    },
    {
      "id": 5,
      "title": "Read",
      "description": "Finish reading the last chapter of the book.",
      "completed": "No"
    },
  ]

  const customActions={
    text:"View",
    handler:(val)=>navigate(`/to-do/view/${val?.id}`)
  }

  return (
    <Layout>
      <div className=" min-h-[90vh]">
        <h2 className="text-[28px] text-red-600">Lists</h2>
        <ListingTable tableMeta={tableMeta} tableData={tableData} customActions={customActions}/>
      </div>
    </Layout>
  );
};

export default List;
