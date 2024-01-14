import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../actions/greetingActions';

const Greeting = () => {
    const { greeting, isLoading, error } = useSelector(state => state.greeting);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchGreeting());
    }, [dispatch]);

    if (isLoading) {
        return (
          <>
            <div className="loading">...isLoading</div>
          </>
        );
      }
    
      if (error) {
        return (
          <>
            <div className="loading">
              Something is wrong during fetching the data
            </div>
          </>
        );
      }

      return (
        <>
          <div className="greeting">{greeting.message}</div>
        </>)
}

export default Greeting