import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const AddCreator = () => {
  const navigate = useNavigate();
  const [creator, setCreator] = useState({ name: '', url: '', description: '', imageURL: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('creators').insert([creator]);
    if (error) {
      console.error('Error inserting creator:', error);
    } else {
      navigate('/');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Name</h3>
      <input
        type="text"
        value={creator.name}
        onChange={(e) => setCreator({ ...creator, name: e.target.value })}
      />
      <h3>Website URL</h3>
      <input
        type="text"
        value={creator.url}
        onChange={(e) => setCreator({ ...creator, url: e.target.value })}
      />
      <h3>Description</h3>
      <textarea
        value={creator.description}
        onChange={(e) => setCreator({ ...creator, description: e.target.value })}
      />
      <h3>Image URL</h3>
      <input
        type="text"
        value={creator.imageURL}
        onChange={(e) => setCreator({ ...creator, imageURL: e.target.value })}
      />
      <button type="submit">Add Creator</button>
    </form>
  );
};

export default AddCreator;
