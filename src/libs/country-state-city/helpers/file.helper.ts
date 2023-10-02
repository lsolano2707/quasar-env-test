export async function readJsonFile(path: string) {
  const file = await import(path);
  return file.default;
}

