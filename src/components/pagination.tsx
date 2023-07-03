"use client"

type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="pagination border-t-2 pt-1 pb-1 pr-2 pl-2 border-slate-300">
      <div className="flex justify-center items-center gap-4 pt-12 pb-12">
      <p className="font-bold page">Página</p>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          disabled={page === currentPage}
          className={`text-sky-600 font-bold rounded button-number ${page !== currentPage ? '' : 'border-2 pt-1 pb-1 pr-2 pl-2 border-sky-500'}`}
        >
          {page}
        </button>
      ))}
      </div>
    </div>
  )
}