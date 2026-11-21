export const field = (registered) => {
  const { ref, ...rest } = registered;
  return { ...rest, inputRef: ref };
};
