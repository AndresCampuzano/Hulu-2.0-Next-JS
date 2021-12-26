import { Thumbnail } from "./Thumbnail";

export const Results = ({ results }) => {
  return (
    <>
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </>
  );
};
