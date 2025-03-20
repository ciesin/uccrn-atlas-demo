export function initializeSolutionFilters(layer, view, layerView) {
  const solutionSet = new Set();
  
  // Query all features to get unique solutions
  return layer.queryFeatures({
    where: "1=1",
    outFields: ["Solutions"],
    returnGeometry: false
  }).then((results) => {
    // Process each feature's Solutions field and extract unique values
    results.features.forEach((feature) => {
      const solutions = feature.attributes.Solutions;
      if (solutions) {
        solutions.split(';')
          .map(solution => solution.trim())
          .filter(solution => solution.length > 0)
          .forEach(solution => solutionSet.add(solution));
      }
    });
    
    const chipGroup = document.getElementById("solutionFilters");
    if (!chipGroup) {
      return;
    }
    
    chipGroup.innerHTML = '';
    
    // Create chips for unique solutions
    Array.from(solutionSet)
      .sort((a, b) => a.localeCompare(b))
      .forEach(solution => {
        const chip = document.createElement("calcite-chip");
        chip.value = solution;
        chip.textContent = solution;
        chip.setAttribute("scale", "s");
        chip.className = "solution-chip";
        chip.selected = true;
        chipGroup.appendChild(chip);
    });

    // Apply initial filter
    applyFilterExpression(layerView, Array.from(solutionSet));
    
    // Add event listener for filtering
    chipGroup.addEventListener("calciteChipGroupSelect", (event) => {
      const selectedChips = Array.from(event.target.selectedItems);
      
      if (selectedChips.length === 0) {
        layerView.filter = null;
      } else {
        applyFilterExpression(layerView, selectedChips.map(chip => chip.value));
        
        // Zoom to filtered features
        layer.queryExtent({
          where: layerView.filter.where
        }).then(extent => {
          if (extent) {
            view.goTo(extent, { duration: 1000 });
          }
        });
      }
    });
  });
}

function applyFilterExpression(layerView, solutions) {
  const filterExp = solutions.map(solution => {
    const escapedSolution = solution.replace(/'/g, "''");
    return `Solutions LIKE '%;${escapedSolution};%' OR Solutions LIKE '${escapedSolution};%' OR Solutions LIKE '%;${escapedSolution}' OR Solutions = '${escapedSolution}'`;
  }).join(' OR ');
  
  layerView.filter = {
    where: filterExp
  };
}

export function initializeProvenanceFilter(layer, view, layerView) {
  const provenanceSet = new Set();
  
  return layer.queryFeatures({
    where: "1=1",
    outFields: ["Provenance"],
    returnGeometry: false
  }).then((results) => {
    // Extract unique provenance values from semicolon-separated strings
    results.features.forEach((feature) => {
      const provenanceValues = feature.attributes.Provenance;
      if (provenanceValues) {
        provenanceValues.split(';')
          .map(value => value.trim())
          .filter(value => value.length > 0)
          .forEach(value => provenanceSet.add(value));
      }
    });
    
    const provenanceCombobox = document.querySelector('calcite-combobox[label="Provenance"]');
    if (!provenanceCombobox) {
      return;
    }
    
    // Clear existing items except "All"
    Array.from(provenanceCombobox.children).forEach(item => {
      if (item.value !== 'all') {
        item.remove();
      }
    });
    
    // Add unique items from the layer
    Array.from(provenanceSet)
      .sort((a, b) => a.localeCompare(b))
      .forEach(provenance => {
        const item = document.createElement("calcite-combobox-item");
        item.value = provenance;
        item.setAttribute("text-label", provenance);
        provenanceCombobox.appendChild(item);
    });
    
    // Add event listener for filtering
    provenanceCombobox.addEventListener("calciteComboboxChange", (event) => {
      const selectedValue = provenanceCombobox.selectedItems[0]?.value;
      
      if (!selectedValue || selectedValue === 'all') {
        layerView.filter = null;
      } else {
        const escapedValue = selectedValue.replace(/'/g, "''");
        // Check if the selected value is contained in the semicolon-separated list
        layerView.filter = {
          where: `Provenance LIKE '%;${escapedValue};%' OR Provenance LIKE '${escapedValue};%' OR Provenance LIKE '%;${escapedValue}' OR Provenance = '${escapedValue}'`
        };
        
        // Zoom to filtered features
        layer.queryExtent({
          where: layerView.filter.where
        }).then(extent => {
          if (extent) {
            view.goTo(extent, { duration: 1000 });
          }
        });
      }
    });
  });
}

export function initializeClimateInterventionFilter(layer, view, layerView) {
  if (!layer || !view || !layerView) {
    console.error("Missing required parameters for climate intervention filter");
    return Promise.reject(new Error("Missing required parameters"));
  }

  const interventionSet = new Set();
  
  return layer.queryFeatures({
    where: "1=1",
    outFields: ["Climate_Intervention"],
    returnGeometry: false
  }).then((results) => {
    results.features.forEach((feature) => {
      const interventions = feature.attributes.Climate_Intervention;
      if (interventions) {
        interventions.split(';')
          .map(value => value.trim())
          .filter(value => value.length > 0)
          .forEach(value => interventionSet.add(value));
      }
    });
    
    const interventionCombobox = document.getElementById('climate-intervention');
    if (!interventionCombobox) {
      throw new Error("Climate intervention combobox not found");
    }
    
    // Clear existing items except "All"
    Array.from(interventionCombobox.children).forEach(item => {
      if (item.value !== 'all') {
        item.remove();
      }
    });
    
    // Add unique items
    Array.from(interventionSet)
      .sort((a, b) => a.localeCompare(b))
      .forEach(intervention => {
        const item = document.createElement("calcite-combobox-item");
        item.value = intervention;
        item.setAttribute("text-label", intervention);
        interventionCombobox.appendChild(item);
    });

    // Add event listener for filtering
    interventionCombobox.addEventListener("calciteComboboxChange", (event) => {
      const selectedValue = interventionCombobox.selectedItems[0]?.value;
      
      if (!selectedValue || selectedValue === 'all') {
        layerView.filter = null;
      } else {
        const escapedValue = selectedValue.replace(/'/g, "''");
        layerView.filter = {
          where: `Climate_Intervention LIKE '%;${escapedValue};%' OR Climate_Intervention LIKE '${escapedValue};%' OR Climate_Intervention LIKE '%;${escapedValue}' OR Climate_Intervention = '${escapedValue}'`
        };
        
        // Zoom to filtered features
        layer.queryExtent({
          where: layerView.filter.where
        }).then(extent => {
          if (extent) {
            view.goTo(extent, { duration: 1000 });
          }
        }).catch(error => {
          console.error("Error querying extent:", error);
        });
      }
    });
  }).catch(error => {
    console.error("Error initializing climate intervention filter:", error);
    return Promise.reject(error);
  });
}

export function initializePopulationFilter(layer, view, layerView) {
  if (!layer || !view || !layerView) {
    console.error("Missing required parameters for population filter");
    return Promise.reject(new Error("Missing required parameters"));
  }

  const populationSet = new Set();
  
  return layer.queryFeatures({
    where: "1=1",
    outFields: ["CityPopulationSize"], // Updated field name
    returnGeometry: false
  }).then((results) => {
    results.features.forEach((feature) => {
      const population = feature.attributes.CityPopulationSize; // Updated field reference
      if (population) {
        population.split(';')
          .map(value => value.trim())
          .filter(value => value.length > 0)
          .forEach(value => populationSet.add(value));
      }
    });
    
    const populationCombobox = document.getElementById('population-size');
    if (!populationCombobox) {
      throw new Error("Population size combobox not found");
    }
    
    // Clear existing items except "All"
    Array.from(populationCombobox.children).forEach(item => {
      if (item.value !== 'all') {
        item.remove();
      }
    });
    
    // Add unique items
    Array.from(populationSet)
      .sort((a, b) => {
        const sizes = ['Small', 'Medium', 'Large', 'Mega'];
        return sizes.indexOf(a) - sizes.indexOf(b);
      })
      .forEach(size => {
        const item = document.createElement("calcite-combobox-item");
        item.value = size;
        item.setAttribute("text-label", size);
        populationCombobox.appendChild(item);
    });

    // Add event listener for filtering
    populationCombobox.addEventListener("calciteComboboxChange", (event) => {
      const selectedValue = populationCombobox.selectedItems[0]?.value;
      
      if (!selectedValue || selectedValue === 'all') {
        layerView.filter = null;
      } else {
        const escapedValue = selectedValue.replace(/'/g, "''");
        layerView.filter = {
          where: `CityPopulationSize LIKE '%;${escapedValue};%' OR CityPopulationSize LIKE '${escapedValue};%' OR CityPopulationSize LIKE '%;${escapedValue}' OR CityPopulationSize = '${escapedValue}'`
        };
        
        // Zoom to filtered features
        layer.queryExtent({
          where: layerView.filter.where
        }).then(extent => {
          if (extent) {
            view.goTo(extent, { duration: 1000 });
          }
        }).catch(error => {
          console.error("Error querying extent:", error);
        });
      }
    });
  }).catch(error => {
    console.error("Error initializing population filter:", error);
    return Promise.reject(error);
  });
}