export const generateRandomArrowConfigs = () => {
  const numConfigs = Math.floor(Math.random() * 5) + 20;
  const usedPositions = new Set();
  const configs = [];

  // Function to get screen width-based constraints
  const getWidthConstraints = () => {
    const width = window.innerWidth;
    if (width >= 1536) { // 2xl
      return { min: -200, max: 1736 }; // 1536 + 200
    } else if (width >= 1280) { // xl
      return { min: -180, max: 1460 };
    } else if (width >= 1024) { // lg
      return { min: -150, max: 1174 };
    } else if (width >= 768) { // md
      return { min: -120, max: 888 };
    } else if (width >= 640) { // sm
      return { min: -100, max: 740 };
    } else if (width >= 475) { // mid
      return { min: -80, max: 555 };
    } else if (width >= 375) { // xs
      return { min: -60, max: 435 };
    } else {
      return { min: -50, max: 400 };
    }
  };

  const { min, max } = getWidthConstraints();

  while (configs.length < numConfigs && usedPositions.size < 25) {
    const version = Math.floor(Math.random() * 3) + 1;
    const top = Math.floor(Math.random() * 25) + 1;
    const left = Math.floor(Math.random() * (max - min)) + min;
    
    // Create a unique position key to avoid overlaps
    const positionKey = `${top}-${left}`;
    
    if (!usedPositions.has(positionKey)) {
      usedPositions.add(positionKey);
      configs.push({ version, top, left });
    }
  }

  // Sort by top position to maintain vertical ordering
  return configs.sort((a, b) => a.top - b.top);
};