// src/components/Greeting.js
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../store/actions/greetingActions';

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return <h1>{greeting || 'Loading...'}</h1>;
};

export default Greeting;
