import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client'; // Ensure this path is correct
import '../App.css'

const ViewCreator = () => {
  const { id } = useParams(); // Correctly retrieve the id parameter from the URL
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching creator:', error);
      } else {
        setCreator(data);
      }
    };
    fetchCreator();
  }, [id]);

  if (!creator) {
    return <div>Loading...</div>;
  }

  return (
    <div className="view-creator-container">
      <div className="view-creator-image">
        <img src={creator.imageURL} alt={creator.name} />
      </div>
      <div className="view-creator-details">
        <h2>{creator.name}</h2>
        <p>{creator.description}</p>
        <a href={creator.url} target="_blank" rel="noopener noreferrer">Visit Page</a>
      </div>
    </div>
  );
};

export default ViewCreator;