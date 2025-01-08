import React from 'react';

    const MetricInput = ({ metrics, handleMetricChange }) => {
      return (
        <div className="metric-input">
          <h2>Enter Metrics</h2>
          <div>
            <label>Reach:</label>
            <input type="number" name="reach" value={metrics.reach} onChange={handleMetricChange} />
          </div>
          <div>
            <label>Impressions:</label>
            <input type="number" name="impressions" value={metrics.impressions} onChange={handleMetricChange} />
          </div>
          <div>
            <label>Brand Recall (%):</label>
            <input type="number" name="brandRecall" value={metrics.brandRecall} onChange={handleMetricChange} />
          </div>
          <div>
            <label>Brand Image Score (1-10):</label>
            <input type="number" name="brandImageScore" value={metrics.brandImageScore} onChange={handleMetricChange} />
          </div>
          <div>
            <label>Sentiment Analysis (% positive):</label>
            <input type="number" name="sentimentAnalysis" value={metrics.sentimentAnalysis} onChange={handleMetricChange} />
          </div>
          <div>
            <label>NPS:</label>
            <input type="number" name="nps" value={metrics.nps} onChange={handleMetricChange} />
          </div>
          <div>
            <label>Repeat Purchase Rate (%):</label>
            <input type="number" name="repeatPurchaseRate" value={metrics.repeatPurchaseRate} onChange={handleMetricChange} />
          </div>
          <div>
            <label>Customer Lifetime Value (INR):</label>
            <input type="number" name="clv" value={metrics.clv} onChange={handleMetricChange} />
          </div>
          <div>
            <label>Market Share (%):</label>
            <input type="number" name="marketShare" value={metrics.marketShare} onChange={handleMetricChange} />
          </div>
          <div>
            <label>Revenue Growth (%):</label>
            <input type="number" name="revenueGrowth" value={metrics.revenueGrowth} onChange={handleMetricChange} />
          </div>
          <div>
            <label>Profit Margins (%):</label>
            <input type="number" name="profitMargins" value={metrics.profitMargins} onChange={handleMetricChange} />
          </div>
          <div>
            <label>Brand Value (INR):</label>
            <input type="number" name="brandValue" value={metrics.brandValue} onChange={handleMetricChange} />
          </div>
          <div>
            <label>Brand Strength (1-10):</label>
            <input type="number" name="brandStrength" value={metrics.brandStrength} onChange={handleMetricChange} />
          </div>
          <div>
            <label>Brand Resonance (%):</label>
            <input type="number" name="brandResonance" value={metrics.brandResonance} onChange={handleMetricChange} />
          </div>
        </div>
      );
    };

    export default MetricInput;
