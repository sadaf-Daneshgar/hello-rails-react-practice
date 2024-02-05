export const setGreeting = (greeting) => {
  return {
    type: 'SET_GREETING',
    payload: greeting,
  };
};

export const fetchGreeting = () => {
  return (dispatch) => {
    fetch('/greetings/random')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        dispatch(setGreeting(data.message));
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        // Optionally, dispatch an error action or set an error state
      });
  };
};

