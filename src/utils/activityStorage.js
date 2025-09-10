export const saveActivity = (activity) => {
    const list = JSON.parse(localStorage.getItem('activities') || '[]');
    list.push(activity);
    localStorage.setItem('activities', JSON.stringify(list));
  };
  
  export const getActivities = () => {
    return JSON.parse(localStorage.getItem('activities') || '[]');
  };
  
  export const updateActivity = (index, updatedActivity) => {
    const list = JSON.parse(localStorage.getItem('activities') || '[]');
    list[index] = updatedActivity;
    localStorage.setItem('activities', JSON.stringify(list));
  };
  
  export const deleteActivity = (index) => {
    const list = JSON.parse(localStorage.getItem('activities') || '[]');
    list.splice(index, 1);
    localStorage.setItem('activities', JSON.stringify(list));
  };
  