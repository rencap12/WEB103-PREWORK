import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';
import Card from '../components/Card';

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select('*');
      if (error) {
        console.error(error);
      } else {
        setCreators(data);
      }
    };
    fetchCreators();
  }, []);

  return (
    <div className="show-creators-container">
      <h1 className="title">Content Creators</h1>
      <div className="add-link-container">
        <Link to="/add" className="add-link">Add New Creator</Link>
      </div>
      <div className="creator-list">
        {creators.length > 0 ? (
          creators.map(creator => (
            <Card key={creator.id} creator={creator} />
          ))
        ) : (
          <p>No creators found</p>
        )}
      </div>
    </div>
  );
};

export default ShowCreators;
