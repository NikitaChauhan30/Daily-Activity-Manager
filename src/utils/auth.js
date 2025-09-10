export const isAuthenticated = () => {
    return !!localStorage.getItem('currentUser');
  };
  
  export const signup = (userData) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(u => u.loginId === userData.loginId)) return false;
  
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  };
  
  export const login = (loginId, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.loginId === loginId && u.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  };
  
  export const logout = () => {
    localStorage.removeItem('currentUser');
  };
  