"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { LeftArrowIcon, RightArrowIcon } from "../icons";

interface PaginationProps {
  currentPage: number;
  hasNextPage: boolean;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  hasNextPage,
  totalPages,
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`/games?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage <= 1}
        className={`px-2 py-2 rounded-lg focus-visible:outline-none focus-visible:ring-[3px] lg:focus-visible:ring-4 focus-visible:ring-border-focusBlue/75 ${
          currentPage <= 1
            ? "text-foreground-disabled cursor-not-allowed"
            : "text-foreground-subtle"
        }`}
      >
        <LeftArrowIcon />
      </button>
      <span>{`Page ${currentPage} of ${totalPages}`}</span>
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={!hasNextPage}
        className={`px-2 py-2 rounded-lg focus-visible:outline-none focus-visible:ring-[3px] lg:focus-visible:ring-4 focus-visible:ring-border-focusBlue/75 ${
          !hasNextPage
            ? "text-foreground-disabled cursor-not-allowed"
            : "text-foreground-subtle"
        }`}
      >
        <RightArrowIcon />
      </button>
    </div>
  );
}
