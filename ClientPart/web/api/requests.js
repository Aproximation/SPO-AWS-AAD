import * as productData from './data/37320.json';
import * as languages from './data/languages.json';

export function getProduct(callback) {
  const {
    Name,
    Code,
    BaseName,
    BaseCode,
    CAName,
    CACode,
    ThirdComponentName,
    ThirdComponentCode,
    QLQualityDescription,
    QLRecommendedUseForPDS,
    Features,
    Responsibility,
    Documents,
    Finish,
    FlashPointMeasured,
    FullyCured,
    MixRatioByVolumeBase,
    MixRatioByVolumeCA,
    MixRatioByVolume3rd,
    PotLife,
    PreferredAppMethod,
    ServiceTempDryMin,
    ServiceTempDryMax,
    SurfaceDry,
    ThroughDry,
    IndicatedFilmThickness,
    MarComDocuments,
    Shades,
  } = productData;

  const product = {};

  product.name = Name;
  product.code = Code;

  product.responsibility = Responsibility;

  product.texts = [
    {
      title: "Description",
      body: QLQualityDescription || "Not available.",
    },
    {
      title: "Recommended Use",
      body: QLRecommendedUseForPDS || "Not available.",
    },
    {
      title: "Features",
      body: Features || "Not available.",
    }
  ];

  product.components = [
    {
      name: BaseName,
      code: BaseCode,
      type: "Base",
    },
    {
      name: CAName,
      code: CACode,
      type: "Curing agent",
    },
    {
      name: ThirdComponentName,
      code: ThirdComponentCode,
      type: "Third",
    },
  ];

  product.isDocAvailable = {
    pds: !!Documents.filter(doc => doc.Type === "PDS"),
    sds: !!Documents.filter(doc => doc.Type === "SDS"),
    ai: !!Documents.filter(doc => doc.Type === "AI"),
  };

  product.technicalData = {
    finish: Finish,
    flashPoint: {
      metric: FlashPointMeasured[ 0 ].Value,
      imperial: FlashPointMeasured[ 1 ].Value,
    },
    fullyCured: FullyCured,
    mixRatio: {
      base:MixRatioByVolumeBase,
      ca: MixRatioByVolumeCA,
      third:MixRatioByVolume3rd,
    },
    potLife: PotLife,
    applicationMethod: PreferredAppMethod,
    serviceTemperature: {
      min: {
        metric: ServiceTempDryMin[ 0 ].Value,
        imperial: ServiceTempDryMin[ 1 ].Value,
      },
      max: {
        metric: ServiceTempDryMax[ 0 ].Value,
        imperial: ServiceTempDryMax[ 1 ].Value,
      }
    },
    surfaceDry: SurfaceDry,
    throughDry: ThroughDry,
    indicatedFilmThickness: IndicatedFilmThickness,
  }

  product.marComDocs = MarComDocuments;

  product.marComAreas =
    MarComDocuments
      .map(doc => doc.MarComType)
      .filter((docType, i, refList) => refList.indexOf(docType) === i);

  product.shades = Shades;

  console.log(product);

  return callback(product);
}

export {
  productData,
  languages,
};