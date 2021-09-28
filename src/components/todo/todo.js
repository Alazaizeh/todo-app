import React, { useEffect, useState, useContext } from "react";
import useForm from "../../hooks/form.js";
import Settings from "../../context/setting.js";
import { v4 as uuid } from "uuid";
import Header from "../header";
import Form from "./Form";
import List from "../List";

const ToDo = () => {
  const context = useContext(Settings);
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);
  useEffect(() => {
    localStorage.getItem("items")
      ? setList(JSON.parse(localStorage.getItem("items")))
      : null;
  }, []);

  function addItem(item) {
    item["difficulty"] ? null : (item["difficulty"] = 3);
    console.log(item);
    item.id = uuid();
    item.complete = false;
    localStorage.setItem("items", JSON.stringify([...list, item]));
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
      <Header incomplete={incomplete} />
      <Form handleChange={handleChange} handleSubmit={handleSubmit} />
      <List list={list} toggleComplete={toggleComplete} />
    </>
  );
};

export default ToDo;
