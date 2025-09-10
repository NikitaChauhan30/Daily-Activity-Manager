import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { saveActivity } from '../utils/activityStorage';

const CreateActivity = () => {
  const [activity, setActivity] = useState({
    category: '',
    shortDesc: '',
    longDesc: '',
    date: new Date().toISOString().slice(0, 10),
    status: 'Open'
  });

  const categories = [
    'Work',
    'Personal',
    'Health',
    'Study',
    'Shopping',
    'Other'
  ];

  const handleChange = (e) => {
    setActivity({ ...activity, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveActivity(activity);
    alert('Activity Saved!');
    setActivity({
      category: '',
      shortDesc: '',
      longDesc: '',
      date: new Date().toISOString().slice(0, 10),
      status: 'Open'
    });
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h3>Create Activity</h3>
        <form onSubmit={handleSubmit} className="card p-4 shadow">
          <div className="mb-3">
            <label>Category</label>
            <select
              name="category"
              value={activity.category}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">-- Select Category --</option>
              {categories.map((cat, i) => (
                <option key={i} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label>Short Description</label>
            <input name="shortDesc" value={activity.shortDesc} onChange={handleChange} className="form-control" required />
          </div>

          <div className="mb-3">
            <label>Long Description</label>
            <textarea name="longDesc" value={activity.longDesc} onChange={handleChange} className="form-control" rows="3" required />
          </div>

          <div className="mb-3">
            <label>Date</label>
            <input name="date" type="date" value={activity.date} onChange={handleChange} className="form-control" required />
          </div>

          <div className="mb-3">
            <label>Status</label>
            <select name="status" value={activity.status} onChange={handleChange} className="form-select">
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
            </select>
          </div>

          <button type="submit" className="btn btn-success">Save Activity</button>
        </form>
      </div>
    </>
  );
};

export default CreateActivity;
