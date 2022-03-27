import { useState, useEffect } from "react";

import Select from "react-select";
const Filter = ({ events, setEvents }) => {
  const [categories, setCategories] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [locations, setLocations] = useState([]);
  const [locationFilter, setLocationFilter] = useState([]);
  const [names, setNames] = useState([]);
  const [nameFilter, setNameFilter] = useState([]);

  function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }
  function sortArray(arr) {
    return arr.sort((a, b) => (new Date(a.date) > new Date(b.date) ? 1 : -1));
  }

  function filterEvents() {
    var temp_events = events.filter((itemA) => {
      if (categoryFilter.length > 0) {
        return categoryFilter.find((itemB) => {
          // console.log(itemA.eventType);
          return itemA.eventType === itemB.value;
        });
      } else {
        return true;
      }
    });
    var temp_events2 = temp_events.filter((itemA) => {
      if (locationFilter.length > 0) {
        return locationFilter.find((itemB) => {
          // console.log(itemA.eventType);
          return itemA.location === itemB.value;
        });
      } else {
        return true;
      }
    });
    var temp_events3 = temp_events2.filter((itemA) => {
      if (nameFilter.length > 0) {
        return nameFilter.find((itemB) => {
          // console.log(itemA.eventType);
          return itemA.name === itemB.value;
        });
      } else {
        return true;
      }
    });
    setEvents(sortArray(temp_events3));
  }

  useEffect(() => {
    filterEvents();
  }, [categoryFilter, nameFilter, locationFilter]);

  useEffect(() => {
    var tempCategories = [];
    var tempLocations = [];
    var tempNames = [];

    for (let i = 0; i < events.length; i++) {
      tempCategories.push(events[i].eventType);
      tempLocations.push(events[i].location);
      tempNames.push(events[i].name);
    }

    let filter_cat = removeDuplicates(tempCategories);
    let new_categories = filter_cat.map((opt) => ({
      label: opt,
      value: opt,
    }));

    let filter_loc = removeDuplicates(tempLocations);
    let new_locations = filter_loc.map((opt) => ({
      label: opt,
      value: opt,
    }));

    let filter_name = removeDuplicates(tempNames);
    let new_names = filter_name.map((opt) => ({
      label: opt,
      value: opt,
    }));

    setNameFilter(new_names);
    setNames(new_names);

    setLocationFilter(new_locations);
    setLocations(new_locations);

    setCategories(new_categories);
    setCategoryFilter(new_categories);
  }, [events]);

  return (
    <div className="filter-dropdowns">
      <div className="item">
        <label>Event Name</label>
        <Select
          options={names}
          isMulti
          onChange={(opt) => setNameFilter(opt)}
        />
      </div>
      <div className="item">
        <label>Event Location</label>
        <Select
          options={locations}
          isMulti
          onChange={(opt) => setLocationFilter(opt)}
        />
      </div>
      <div className="item">
        <label>Category</label>
        <Select
          options={categories}
          isMulti
          onChange={(opt) => setCategoryFilter(opt)}
        />
      </div>
    </div>
  );
};

export default Filter;
