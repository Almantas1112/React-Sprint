import React, { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Lists from "./components/Lists";

function App() {
  const [todo, setTodo] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  }

  const doneHandler = () => {
    console.log("done");
  }

  const delHandler = () => {
    console.log("delete");
  }

  return (
    <Layout>
      <Header/>
      <Form 
        todo={todo}
        change={(e) => setTodo(e.target.value)}
        submit={submitHandler}
      />
      <Lists 
        done={doneHandler} 
        del={delHandler} 
      />
    </Layout>
  );
}

export default App;