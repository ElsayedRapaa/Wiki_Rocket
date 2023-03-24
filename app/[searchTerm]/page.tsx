import getSearchData from "@/lib/getSearchData";
import React from "react";
import Item from "./components/Item";

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetadata({ params: { searchTerm } }: Props) {
  const searchResult: Promise<SearchResult> = getSearchData(searchTerm);
  const data = await searchResult;
  const displayTerm = searchTerm.replaceAll("%20", " ");

  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} Not Found`,
    };
  }

  return {
    title: displayTerm,
    description: `Search Result For ${displayTerm}`,
  };
}

export default async function SearchResults({ params: { searchTerm } }: Props) {
  const searchResult: Promise<SearchResult> = getSearchData(searchTerm);
  const data = await searchResult;
  const results: Result[] | undefined = data?.query?.pages;

  const content = (
    <main className="p-4 my-4 mx-24 rounded-lg bg-slate-500">
      {results ? (
        Object.values(results).map((result) => {
          return <Item key={result.pageid} result={result} />;
        })
      ) : (
        <h2>Not Found {searchTerm} In WikiRocket</h2>
      )}
    </main>
  );

  return content;
}
