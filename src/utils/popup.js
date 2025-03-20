import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

const excludedFields = new Set([
  'OBJECTID',
  'Unique_Identifier',
  'ObjectId', 
  'FID', 
  'GlobalID', 
  'Shape', 
  'Shape_Length', 
  'Shape_Area'
]);

export const popupConfig = {
  dockEnabled: true,
  dockOptions: {
    buttonEnabled: false,
    breakpoint: false,
    position: "bottom-left"
  }
};

export const popupTemplate = {
  title: "{Title}",
  outFields: ["*"],
  content: async (feature) => {
    const div = document.createElement("div");
    div.className = "custom-popup";
    
    // Create main content table
    const table = document.createElement("table");
    table.className = "popup-table";
    
    // Get layer and field configurations
    const layer = feature.graphic.layer;
    const fields = layer.fields || [];
    const fieldMap = new Map(fields.map(f => [f.name, f.alias || f.name]));
    
    // Add attribute rows, excluding system fields
    Object.entries(feature.graphic.attributes).forEach(([field, value]) => {
      if (value && !excludedFields.has(field)) {
        const row = table.insertRow();
        const fieldCell = row.insertCell();
        const valueCell = row.insertCell();
        
        fieldCell.className = "field-name";
        fieldCell.textContent = fieldMap.get(field) || 
                               field.replace(/([A-Z])/g, ' $1')
                                   .replace(/_/g, ' ')
                                   .trim();
        
        valueCell.className = "field-value";
        valueCell.textContent = value;
      }
    });
    
    div.appendChild(table);

    // Handle attachments
    try {
      const objectId = feature.graphic.attributes.OBJECTID;
      const serviceUrl = "https://services2.arcgis.com/IsDCghZ73NgoYoz5/arcgis/rest/services/uccrn_csa_base_layer/FeatureServer/0";
      
      const attachmentInfo = await layer.queryAttachments({
        objectIds: [objectId]
      });
      
      const attachments = attachmentInfo[objectId];
      if (attachments && attachments.length > 0) {
        const attachment = attachments[0];
        const attachmentUrl = `${serviceUrl}/${objectId}/attachments/${attachment.id}`;
        
        const viewerSection = document.createElement("div");
        viewerSection.className = "document-viewer-section";
        
        const heading = document.createElement("h3");
        heading.className = "viewer-heading";
        heading.textContent = "Related Document";
        
        const iframe = document.createElement("iframe");
        iframe.src = attachmentUrl;
        iframe.className = "document-frame";
        
        viewerSection.appendChild(heading);
        viewerSection.appendChild(iframe);
        div.appendChild(viewerSection);
      }
    } catch (error) {
      console.error("Error handling attachments:", error);
    }
    
    return div;
  }
};

export function initializePopup(view) {
  view.popup.dockEnabled = true;
  view.popup.dockOptions = {
    buttonEnabled: false,
    breakpoint: false,
    position: "bottom-left"
  };

  view.when(() => {
    view.map.loadAll().then(() => {
      const uccrnGroup = view.map.layers.find(layer => 
        layer.title?.toLowerCase().includes("uccrn atlas")
      );
      
      if (uccrnGroup?.layers) {
        const caseLayer = uccrnGroup.layers.find(layer => 
          layer.title?.toLowerCase().includes("case locations")
        );
        
        if (caseLayer) {
          caseLayer.popupTemplate = popupTemplate;
        }
      }
    });
  });
}