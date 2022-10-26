import React from "react";
import Layout from "../components/Layout";
import TasksList from "../components/TasksList";
import TaskList from "../components/TasksList";


const HomeScreen = () => {
  return (
    <Layout>
      <TasksList></TasksList>
    </Layout>
  );
};

export default HomeScreen;