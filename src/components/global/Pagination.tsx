"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const Pagination = ({
  page,
  pageCount,
  search,
  category,
}: {
  page: number;
  pageCount: number;
  search?: string;
  category?: string;
}) => {
  const pathname = usePathname();
  return (
    pageCount > 1 && (
      <div className='flex container justify-between md:px-6 mt-6'>
        {page !== 1 && (
          <Button>
            <Link
              href={{
                pathname: `${pathname}`,
                query: { page: page - 1 },
              }}
            >
              Prev
            </Link>
          </Button>
        )}

        {page !== pageCount && (
          <Button>
            <Link
              href={{
                pathname: `${pathname}`,
                query: {
                  ...(search ? { search } : {}),
                  ...(category ? { category } : {}),
                  page: page + 1,
                },
              }}
            >
              Next
            </Link>
          </Button>
        )}
      </div>
    )
  );
};

export default Pagination;
