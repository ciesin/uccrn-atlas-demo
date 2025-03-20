export function initializeSolutionFilters(layer, view) {
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
    applyFilterExpression(layer, Array.from(solutionSet));
    
    // Add event listener for filtering
    chipGroup.addEventListener("calciteChipGroupSelect", (event) => {
      const selectedChips = Array.from(event.target.selectedItems);
      
      if (selectedChips.length === 0) {
        layer.definitionExpression = null;
      } else {
        applyFilterExpression(layer, selectedChips.map(chip => chip.value));
        
        // Zoom to filtered features
        layer.queryExtent({
          where: layer.definitionExpression
        }).then(extent => {
          if (extent) {
            view.goTo(extent, { duration: 1000 });
          }
        });
      }
    });
  });
}

function applyFilterExpression(layer, solutions) {
  const filterExp = solutions.map(solution => {
    const escapedSolution = solution.replace(/'/g, "''");
    return `Solutions LIKE '%;${escapedSolution};%' OR Solutions LIKE '${escapedSolution};%' OR Solutions LIKE '%;${escapedSolution}' OR Solutions = '${escapedSolution}'`;
  }).join(' OR ');
  
  layer.definitionExpression = filterExp;
}