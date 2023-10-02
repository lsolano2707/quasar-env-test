export async function readJsonFile(path: string) {
  try {
    const fullPath = `src/libs/country-state-city/data/${path}`;
    // console.log('path', 'src/libs/country-state-city/data/countries-lite.json');
    console.log('path', fullPath);
    // console.log('path', `src/libs/country-state-city/data/${path}`);
    // const file = await import(path);
    const file = await import(fullPath);
    // const file = await import(`../data/${path}`);
    console.log('file', file);
    console.log('file.default', file.default);

    return file.default;
  } catch (error) {
    console.log('ERRORRR 2', error);

  }
}

