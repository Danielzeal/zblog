"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
          <Link
            href={{
              pathname: `${pathname}`,
              query: { page: page - 1 },
            }}
            className={`py-2 px-5 bg-black text-white rounded-md`}
          >
            Prev
          </Link>
        )}

        {page !== pageCount && (
          <Link
            href={{
              pathname: `${pathname}`,
              query: {
                ...(search ? { search } : {}),
                ...(category ? { category } : {}),
                page: page + 1,
              },
            }}
            className={`py-3 px-6 bg-black text-white rounded-md`}
          >
            Next
          </Link>
        )}
      </div>
    )
  );
};

export default Pagination;
