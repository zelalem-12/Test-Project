const getErrorMessage = (error): string => (error.response ? (error.response.data.message
  ? error.response.data.message : error.response.statusText) : 'Error');

export { getErrorMessage };