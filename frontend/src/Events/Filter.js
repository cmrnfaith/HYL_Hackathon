import { useState, useEffect } from "react";

import Select from "react-select";
const Filter = ({ events, setEvents }) => {
  const [categories, setCategories] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [locations, setLocations] = useState([]);
  const [locationFilter, setLocationFilter] = useState([]);
  const [names, setNames] = useState([]);
  const [nameFilter, setNameFilter] = useState([]);
  const [dates, setDates] = useState([
    {
      label: "Next week",
      value: 7,
    },
    {
      label: "Next Month",
      value: 30,
    },
    {
      label: "Next 3 Months",
      value: 91,
    },
    {
      label: "Next 6 Months",
      value: 183,
    },
    {
      label: "Next Year",
      value: 365,
    },
    {
      label: "All",
      value: 10000,
    },
  ]);
  const [dateFilter, setDateFilter] = useState(null);

  Date.prototype.addDays = function (days) {
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

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
    var temp_events4 = temp_events3.filter((itemA) => {
      // console.log(dateFilter);
      if (dateFilter) {
        return new Date(itemA.date) < new Date().addDays(dateFilter.value);
      } else {
        return true;
      }
    });
    setEvents(sortArray(temp_events4));
  }

  useEffect(() => {
    filterEvents();
  }, [categoryFilter, nameFilter, locationFilter, dateFilter]);

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
      <div className="item">
        <label>Date</label>
        <Select options={dates} onChange={(opt) => setDateFilter(opt)} />
      </div>
    </div>
  );
};

export default Filter;
