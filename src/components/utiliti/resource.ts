
export const generateRandomArrowConfigs = () => {
    const numConfigs = Math.floor(Math.random() * 5) + 20;
    const usedTops = new Set();
    const configs = [];

    while (configs.length < numConfigs && usedTops.size < 25) {
      const version = Math.floor(Math.random() * 3) + 1;
      const top = Math.floor(Math.random() * 25) + 1;
      
      if (!usedTops.has(top)) {
        usedTops.add(top);
        configs.push({ version, top });
      }
    }
    
    
    return configs.sort((a, b) => a.top - b.top);
  };
  
