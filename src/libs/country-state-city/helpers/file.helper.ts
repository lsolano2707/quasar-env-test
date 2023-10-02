export async function readJsonFile(path: string) {
  try {
    console.log('path', path);
    const file = await import(path);
    console.log('file', file);
    console.log('file.default', file.default);

    return file.default;
  } catch (error) {
    console.log('ERRORRR 2', error);

  }
}

