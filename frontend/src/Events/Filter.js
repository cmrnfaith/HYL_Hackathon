import { useState, useEffect } from "react";

import Select from "react-select";
const Filter = ({ events, setEvents }) => {
  const [categories, setCategories] = useState([]);

  function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }

  function filterEvents() {
    var temp_events = events;
    setEvents(temp_events);
  }
  useEffect(() => {
    filterEvents();
  }, [categories]);

  useEffect(() => {
    var tempCategories = [];
    for (let i = 0; i < events.length; i++) {
      tempCategories.push(events[i].category);
    }
    let new_categories = removeDuplicates(tempCategories);
    new_categories.map((opt) => ({ label: opt, value: opt }));
    setCategories(new_categories);
  }, [events]);

  return (
    <div className="">
      <Select
        options={categories}
        onChange={(opt) => console.log(opt.label, opt.value)}
      />
    </div>
  );
};

export default Filter;
