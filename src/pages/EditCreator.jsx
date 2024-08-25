import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const EditCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState({ name: '', url: '', description: '', imageURL: '' });

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase.from('creators').select().eq('id', id).single();
      setCreator(data);
    };

    fetchCreator();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase.from('creators').update(creator).eq('id', id);
    navigate('/');
  };

  const handleDelete = async () => {
    await supabase.from('creators').delete().eq('id', id);
    navigate('/');
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
      <button type="submit">Update Creator</button>
      <button type="button" onClick={handleDelete} style={{ marginLeft: '20px' }}>Delete Creator</button>
    </form>
  );
};

export default EditCreator;
