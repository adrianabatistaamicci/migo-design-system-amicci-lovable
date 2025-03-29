
export const isAuthenticated = (): boolean => {
  return localStorage.getItem('auth') === 'true';
};

export const logout = (): void => {
  localStorage.removeItem('auth');
  window.location.href = '/';
};
