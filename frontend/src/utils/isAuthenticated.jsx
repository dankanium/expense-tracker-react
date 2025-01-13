export const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  console.log(value);
  
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
};

export const isAuthenticated = () => {
  const cookieValue = getCookie('JSESSIONID');
  console.log('JSESSIONID:', cookieValue);
  
  return cookieValue !== null;
};