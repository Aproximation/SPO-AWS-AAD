import React, { Component } from 'react';
import { getProduct } from '../../api/requests';
import Header from './Header/Header';
import Description from './Description/Description';
import DocumentTypes from './DocumentsDownload/DocumentTypes';
import TechnicalDataTable from './TechnicalDataTable/TechnicalDataTable';
import MarketingMaterial from './MarketingMaterial/MarketingMaterial.container';
import Shades from './Shades/Shades';

class ProductPage extends Component {
  state = {
    product: {},
  };

  componentDidMount() {
    getProduct((product) => this.setState({ product }));
  }

  render() {
    const {
      name = "",
      code = "",
      texts = [],
      components = [],
      responsibility = "",
      isDocAvailable = {},
      technicalData = {},
      marComDocs = [],
      marComAreas = [],
      shades = [],
    } = this.state.product;

    return (
      <div className="page-container">
        <Header
          qualityName={ name }
          qualityCode={ code }
        />
        <main>
          <Description
            texts={ texts }
            components={ components }
            responsibility={ responsibility }
          />
          <DocumentTypes type={ isDocAvailable }/>
          <TechnicalDataTable data={ technicalData }/>
          <MarketingMaterial docs={ marComDocs } areas={ marComAreas }/>
          <Shades shades={shades}/>
        </main>
      </div>
    );
  }
}

export default ProductPage;
