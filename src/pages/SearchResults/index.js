import useSearchResults from "../../utils/useSearchResults";
import ShowSearchResults from "../../components/ShowSearchResults";

const SearchResults = () => {
  const results = useSearchResults();
  return (
    <div className="p-2 mxs:p-4 flex flex-col overflow-y-auto h-[96%] pb-10 w-full space-y-2">
      {results.length > 0 &&
        results.map((each) => (
          <ShowSearchResults key={each?.id?.videoId} searchResults={each} />
        ))}
    </div>
  );
};

export default SearchResults;
