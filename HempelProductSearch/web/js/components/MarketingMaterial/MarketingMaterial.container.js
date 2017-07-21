import React, { Component } from 'react';
import FilterBar from './FilterBar';
import MarComCard from './MarComCard';

class MarketingMaterial extends Component {
  state = {
    searchResult: [],
  };

  render() {
    const { searchResult } = this.state;
    const { areas } = this.props;

    return (
      <section style={{ marginTop: '8px' }}>
        <div className="row">
          <div className="card">
            <h1 className="card-header center"
                onClick={() => this.filterDocsByType("marcom4")}>
              MarCom Material
            </h1>
            <FilterBar
              filters={ areas }
              clickCallback={ (area) => this.filterDocsByType(area)}
            />
          </div>
          <div className="flex-container">
            {
              searchResult.map((doc, i) =>
                <MarComCard
                  key={doc.FileId}
                  title={doc.Name}
                  body={ doc.MarComDescription }
                  info={ {} }
                  lang={ doc.MarcomLanguage || " EN " }
                  downloadURL=""
                />
              )
            }
          </div>
        </div>
      </section>
    )
  }

  filterDocsByType(type) {
    const { docs } = this.props;
    const searchResult = docs.filter(doc => doc.MarComType === type);
    this.setState({ searchResult });
  }
}

export default MarketingMaterial;