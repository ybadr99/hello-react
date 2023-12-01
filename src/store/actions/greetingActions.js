// src/store/actions/greetingActions.js
export const fetchGreeting = () => async (dispatch) => {
  try {
    const response = await fetch('http://127.0.0.1:3000/random_greeting'); // Adjust URL as needed
    const data = await response.json();
    dispatch({ type: 'FETCH_GREETING', payload: data.greeting });
  } catch (error) {
    console.error('Error fetching greeting:', error);
  }
};
