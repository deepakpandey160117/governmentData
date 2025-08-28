import React, { useEffect, useState } from 'react';
import './GovtScene.css';

// GovtScene: Lists Indian government schemes and allows search by state/sector
const API_URL = 'https://api.data.gov.in/resource/ac84de6a-6cbf-44fb-aef0-dce70f7ae1f9?api-key=579b464db66ec23bdd0000017ede31da2c8c48fe6507bfe71f7f0ca3&format=json&offset=0&limit=1000';

function GovtScene() {
  const [schemes, setSchemes] = useState([]);
  const [filteredSchemes, setFilteredSchemes] = useState([]);
  const [state, setState] = useState(''); // Used for state search
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch schemes from data.gov.in API
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setSchemes(data.records || []);
        setFilteredSchemes(data.records || []);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch government schemes');
        setLoading(false);
      });
  }, []);

  // Filter schemes by state and sector
  useEffect(() => {
    let filtered = schemes;
    if (state) {
      filtered = filtered.filter(scheme =>
        scheme.states_uts?.toLowerCase().includes(state.toLowerCase())
      );
    }
    setFilteredSchemes(filtered);
  }, [state, schemes]);

  return (
    <div className="govt-scene">
      <h2>State/Uts-wise Number and Amount of Guarantees approved under CGTMSE from 2019-20 to 2022-23
</h2>
      <div className="filters">
        <input
          type="text"
          placeholder="Search by State"
          value={state}
          onChange={e => setState(e.target.value)}
        />

      </div>
      {loading ? (
        <p>Loading government schemes...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <ul className="scheme-list">
          {filteredSchemes.length === 0 ? (
            <li>No schemes found.</li>
          ) : (
            filteredSchemes.map((scheme, idx) => (
              <li key={idx} className="scheme-item">
                <h3>{scheme.states_uts}</h3>
                <p><strong>FY 19-20:</strong> Number: {scheme.fy_19_20_for_number}, Amount: ₹{scheme.fy_19_20_for_amount} lakh</p>
                <p><strong>FY 20-21:</strong> Number: {scheme.fy_20_21_for_number}, Amount: ₹{scheme.fy_20_21_for_amount} lakh</p>
                <p><strong>FY 21-22:</strong> Number: {scheme.fy_21_22_for_number}, Amount: ₹{scheme.fy_21_22_for_amount} lakh</p>
                <p><strong>FY 22-23 (till 28.02.2023):</strong> Number: {scheme.fy_22_23_till_28_02_2023_number}, Amount: ₹{scheme.fy_22_23_till_28_02_2023_amount} lakh</p>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}

export default GovtScene;
