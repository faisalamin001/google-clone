import PaginationButtons from './PaginationButtons';

export default function SearchResults({ results }) {
  return (
    <div className='mx-auto w-full min-h-screen px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 font-open-sans dark:bg-[#202124]  dark:text-white'>
      <p className='text-gray-600 dark:text-gray-400 text-md mb-3 mt-3'>
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>

      {results.items?.map((result) => {
        return (
          <div
            key={result.link}
            className='max-w-xl py-4 px-3 text-xs mb-4 shadow text-[#bcc0c3] ring-[#bcc0c3] dark:ring-1 dark:shadow-3xl ring-2 sm:ring-0 sm:text-base sm:shadow-none rounded-lg'
          >
            <div className='group'>
              <a href={result.link} className='text-sml line-clamp-1'>
                {result.formattedUrl}
              </a>
              <a href={result.link}>
                <h2 className='truncate text-xl text-[#8ab4f8] dark:text-[#8ab4f8] font-medium group-hover:underline'>
                  {result.title}
                </h2>
              </a>
            </div>

            <p className='line-clamp-2 text-[#bcc0c3]'>{result.snippet}</p>
          </div>
        );
      })}

      <PaginationButtons />
    </div>
  );
}
