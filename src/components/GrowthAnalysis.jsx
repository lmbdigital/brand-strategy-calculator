import React from 'react';

    const GrowthAnalysis = ({ scores }) => {
      if (scores.length === 0) return <div>No scores to analyze yet.</div>;

      const calculateGrowth = (scores, key) => {
        if (scores.length < 2) return 0;
        const lastScore = scores[scores.length - 1][key];
        const firstScore = scores[0][key];
        return ((lastScore - firstScore) / firstScore) * 100;
      };

      return (
        <div className="growth-analysis">
          <h2>Growth Analysis</h2>
          <p>Brand Awareness Growth: {calculateGrowth(scores, 'brandAwarenessScore').toFixed(2)}%</p>
          <p>Brand Perception Growth: {calculateGrowth(scores, 'brandPerceptionScore').toFixed(2)}%</p>
          <p>Customer Loyalty Growth: {calculateGrowth(scores, 'customerLoyaltyScore').toFixed(2)}%</p>
          <p>Market Performance Growth: {calculateGrowth(scores, 'marketPerformanceScore').toFixed(2)}%</p>
          <p>Brand Equity Growth: {calculateGrowth(scores, 'brandEquityScore').toFixed(2)}%</p>
          <p>Overall Effectiveness Growth: {calculateGrowth(scores, 'overallEffectivenessScore').toFixed(2)}%</p>
        </div>
      );
    };

    export default GrowthAnalysis;
