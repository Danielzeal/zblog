"use client";

import { ColumnDef } from "@tanstack/react-table";

type Category = {
  id: string;
  name: string;
};

export const columns: ColumnDef<Category>[] = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "Name",
    accessorKey: "name",
  },
];
