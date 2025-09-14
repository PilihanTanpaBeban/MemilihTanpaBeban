export const ScrollAfterProvClick = (
  searchTarget: React.RefObject<HTMLDivElement>
) => {
  if (searchTarget.current)
    searchTarget.current.scrollIntoView({ behavior: "smooth" });
};
