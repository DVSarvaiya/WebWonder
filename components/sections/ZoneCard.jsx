import React from 'react';

const SunlightZoneCard = ({
  title,
  description,
  temperature,
  lightLevel,
  pressure,
  depthRange,
  creatures
}) => {
  return (
    <div
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = styles.card.boxShadow;
      }}
    >
      <p style={styles.description}>{description}</p>

      <div style={styles.grid}>
        <div style={styles.box}>
          <strong>Temperature</strong>
          <p>{temperature}</p>
        </div>
        <div style={styles.box}>
          <strong>Light Level</strong>
          <p>{lightLevel}</p>
        </div>
        <div style={styles.box}>
          <strong>Pressure</strong>
          <p>{pressure}</p>
        </div>
        <div style={styles.box}>
          <strong>Depth Range</strong>
          <p>{depthRange}</p>
        </div>
      </div>

      {/* <h4 style={styles.subheading}>Typical Marine Life</h4>
      <div style={styles.creatureContainer}>
        {creatures.map((creature, index) => (
          <span key={index} style={styles.creatureTag}>{creature}</span>
        ))}
      </div> */}
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: 'rgba(0,0,0, 0.2)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    borderRadius: '16px',
    padding: '24px',
    maxWidth: '600px',
    margin: '20px auto',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    color: 'white',
    fontFamily: "'Segoe UI', sans-serif",
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    transform: 'translateY(0)',
  },
  title: {
    fontSize: '1.8rem',
    marginBottom: '8px',
    fontWeight: '600',
  },
  description: {
    fontSize: '1rem',
    lineHeight: '1.5',
  },
  subheading: {
    marginTop: '20px',
    marginBottom: '10px',
    fontWeight: '500',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gap: '12px',
    marginTop: '20px',
  },
  box: {
    backgroundColor: 'rgba(0,0,0, 0.2)',
    borderRadius: '12px',
    padding: '12px',
    fontSize: '0.95rem',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
  },
  creatureContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  creatureTag: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    border: '1px solid rgba(0,0,0,0.1)',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    color: '#005f73',
    backdropFilter: 'blur(4px)',
  },
};

export default SunlightZoneCard;
