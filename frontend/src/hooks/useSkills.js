import { useState, useEffect } from 'react';
import { getSkills } from '../services/api';

export const useSkills = () => {
  const [skills, setSkills] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const { data } = await getSkills();
        setSkills(data.data || {});
      } catch (err) {
        setError(err.message);
        setSkills({});
      } finally {
        setLoading(false);
      }
    };
    fetchSkills();
  }, []);

  return { skills, loading, error };
};
