import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { getActivities, deleteActivity, updateActivity } from '../utils/activityStorage';

const ActivityReport = () => {
  const [activities, setActivities] = useState([]);
  const [filterDate, setFilterDate] = useState('');

  useEffect(() => {
    loadActivities();
  }, []);

  const loadActivities = () => {
    setActivities(getActivities());
  };

  const handleDelete = (index) => {
    if (window.confirm('Are you sure you want to delete this activity?')) {
      deleteActivity(index);
      loadActivities();
    }
  };

  const handleStatusToggle = (index) => {
    const activity = activities[index];
    const updated = { ...activity, status: activity.status === 'Open' ? 'Closed' : 'Open' };
    updateActivity(index, updated);
    loadActivities();
  };

  const filteredActivities = filterDate
    ? activities.filter(act => act.date === filterDate)
    : activities;

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h3>Activity Report</h3>

        <div className="mb-3">
          <label>Filter by Date</label>
          <input type="date" className="form-control" value={filterDate} onChange={(e) => setFilterDate(e.target.value)} />
        </div>

        <table className="table table-bordered table-striped">
          <thead className="table-primary">
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Short Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredActivities.length === 0 ? (
              <tr><td colSpan="5" className="text-center">No activities found.</td></tr>
            ) : (
              filteredActivities.map((act, i) => (
                <tr key={i}>
                  <td>{act.date}</td>
                  <td>{act.category}</td>
                  <td>{act.shortDesc}</td>
                  <td>{act.status}</td>
                  <td>
                    <button
                      className={`btn btn-sm ${act.status === 'Open' ? 'btn-warning' : 'btn-success'} me-2`}
                      onClick={() => handleStatusToggle(i)}
                    >
                      {act.status === 'Open' ? 'Mark Closed' : 'Reopen'}
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(i)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ActivityReport;
