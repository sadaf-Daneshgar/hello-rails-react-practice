import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/greetings/greetingsSlice';

const Greeting = () => {
  const { greeting, isLoading, error } = useSelector(state => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">Loading...</div>
    );
  }

  if (error) {
    return (
      <div className="error">Error: {error}</div>
    );
  }

  return (
    <div className="greeting">{greeting}</div>
  );
};

export default Greeting;
