import React, { useState } from 'react';
    import MetricInput from './components/MetricInput.jsx';
    import ScoreDisplay from './components/ScoreDisplay.jsx';
    import GrowthAnalysis from './components/GrowthAnalysis.jsx';
    import './index.css';

    const App = () => {
      const [metrics, setMetrics] = useState({
        reach: 0,
        impressions: 0,
        brandRecall: 0,
        brandImageScore: 0,
        sentimentAnalysis: 0,
        nps: 0,
        repeatPurchaseRate: 0,
        clv: 0,
        marketShare: 0,
        revenueGrowth: 0,
        profitMargins: 0,
        brandValue: 0,
        brandStrength: 0,
        brandResonance: 0,
      });

      const [scores, setScores] = useState([]);

      const handleMetricChange = (e) => {
        const { name, value } = e.target;
        setMetrics({
          ...metrics,
          [name]: parseFloat(value) || 0,
        });
      };

      const calculateScores = () => {
        const brandAwarenessScore = metrics.brandRecall;
        const brandPerceptionScore = (metrics.brandImageScore / 10) * 100;
        const customerLoyaltyScore = (metrics.nps + (metrics.repeatPurchaseRate * 2) + (metrics.clv / 1000)) / 4;
        const marketPerformanceScore = (metrics.marketShare + metrics.revenueGrowth + metrics.profitMargins) / 3;
        const brandEquityScore = (metrics.brandStrength / 10) * 100;

        const brandAwarenessWeightedScore = brandAwarenessScore * 0.20;
        const brandPerceptionWeightedScore = brandPerceptionScore * 0.25;
        const customerLoyaltyWeightedScore = customerLoyaltyScore * 0.25;
        const marketPerformanceWeightedScore = marketPerformanceScore * 0.20;
        const brandEquityWeightedScore = brandEquityScore * 0.10;

        const overallEffectivenessScore = brandAwarenessWeightedScore + brandPerceptionWeightedScore + customerLoyaltyWeightedScore + marketPerformanceWeightedScore + brandEquityWeightedScore;

        const newScore = {
          date: new Date().toISOString(),
          brandAwarenessScore,
          brandPerceptionScore,
          customerLoyaltyScore,
          marketPerformanceScore,
          brandEquityScore,
          overallEffectivenessScore,
        };

        setScores([...scores, newScore]);
      };

      return (
        <div className="app">
          <h1>Brand Strategy Calculator</h1>
          <MetricInput metrics={metrics} handleMetricChange={handleMetricChange} />
          <button onClick={calculateScores}>Calculate Scores</button>
          <ScoreDisplay scores={scores} />
          <GrowthAnalysis scores={scores} />
        </div>
      );
    };

    export default App;
