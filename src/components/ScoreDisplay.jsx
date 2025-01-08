import React from 'react';

    const ScoreDisplay = ({ scores }) => {
      if (scores.length === 0) return <div>No scores calculated yet.</div>;

      const latestScore = scores[scores.length - 1];

      return (
        <div className="score-display">
          <h2>Latest Scores</h2>
          <p>Date: {new Date(latestScore.date).toLocaleDateString()}</p>
          <p>Brand Awareness Score: {latestScore.brandAwarenessScore.toFixed(2)}</p>
          <p>Brand Perception Score: {latestScore.brandPerceptionScore.toFixed(2)}</p>
          <p>Customer Loyalty Score: {latestScore.customerLoyaltyScore.toFixed(2)}</p>
          <p>Market Performance Score: {latestScore.marketPerformanceScore.toFixed(2)}</p>
          <p>Brand Equity Score: {latestScore.brandEquityScore.toFixed(2)}</p>
          <p>Overall Effectiveness Score: {latestScore.overallEffectivenessScore.toFixed(2)}</p>
        </div>
      );
    };

    export default ScoreDisplay;
