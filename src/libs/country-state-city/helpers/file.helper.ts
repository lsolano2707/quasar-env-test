export async function readJsonFile(path: string) {
  console.log('path', path);
  const file = await import(path);
  console.log('file', file);
  console.log('file.default', file.default);

  return file.default;
}

