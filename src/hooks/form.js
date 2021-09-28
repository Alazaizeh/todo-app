import { useState } from "react";

const useForm = (callback) => {
  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    if (event.target.text.value == "" || event.target.assignee.value == "") {
      return;
    }

    callback(values);
    event.target.reset();
  };

  const handleChange = (event) => {
    if (event.target.name != "difficulty") {
      event.persist();
    }

    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
