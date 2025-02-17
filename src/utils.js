export function updatePdfIframe(city) {
  const pdfBasePath = "./pdfs/";
  let pdfPath;
  
  try {
    if (city === "New York City") {
      pdfPath = `${pdfBasePath}nyc-test.pdf#zoom=35`;
    } else if (city === "Los Angeles City") {
      pdfPath = `${pdfBasePath}la-test.pdf#zoom=35`;
    } else if (city === "Copenhagen") {
      pdfPath = `${pdfBasePath}cop-test.pdf#zoom=35`;
    } else if (city === "Mexico City") {
      pdfPath = `${pdfBasePath}mex-test.pdf#zoom=35`;
    }
    
    if (pdfPath) {
      pdfIframe.src = pdfPath;
      pdfIframe.onerror = () => {
        console.error(`Failed to load PDF for ${city}`);
      };
    }
  } catch (error) {
    console.error(`Error loading PDF for ${city}:`, error);
  }
}

export function handleLayerViewClick(event, layer, city) {
  activeView.hitTest(event).then((response) => {
    const results = response.results;
    
    if (results.length > 0 && results[0].graphic.layer === layer) {
      const graphic = results[0].graphic;
      
      featureWidget.graphic = graphic;
      
      updatePdfIframe(city);
      
      closeCurrentWidget();
      
      featureExpand.expanded = true;
      currentOpenWidget = featureExpand;
    }
  });
}
