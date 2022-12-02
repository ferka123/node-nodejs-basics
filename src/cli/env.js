const parseEnv = () => {
  Object.entries(process.env).forEach(([key, val]) => {
    if (key.startsWith('RSS_')) console.log(`${key}=${val}`)
  });
};

parseEnv();
