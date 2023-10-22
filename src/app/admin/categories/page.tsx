import CategoriesTable from "@/components/admin/categories/data-table";
import CategoryForm from "@/components/admin/categories/CategoryForm";
import { Metadata } from "next";
import { columns } from "@/components/admin/categories/columns";
import { categories } from "@/constants/data";

export const metadata: Metadata = {
  title: "Admin | Categories",
  description: "Managing categorie and adding new category",
};

const CategoriesPage = () => {
  return (
    <section className='h-full w-full container'>
      <div className='flex flex-col md:flex-row h-full gap-4'>
        <div className='md:w-3/5 w-full h-full pt-8 flex items-center justify-center flex-col'>
          <h1 className='font-2xl uppercase font-lora font-semibold text-center mb-1'>
            Categries
          </h1>
          <CategoriesTable columns={columns} data={categories} />
        </div>
        <div className='md:w-2/5 w-full h-full flex items-center justify-center flex-col gap-1'>
          <h1 className='font-2xl uppercase font-lora font-semibold'>
            Add Category
          </h1>
          <CategoryForm />
        </div>
      </div>
    </section>
  );
};

export default CategoriesPage;
