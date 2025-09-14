import { Header, Main, MainHeader } from "@/blocks/dashboard";
import { TableCard } from "@/blocks/table";
import { type Table } from "@/types/blocks/table";
import { Button } from "@/types/blocks/common";
import {
  getTaxonomies,
  getTaxonomiesCount,
  TaxonomyStatus,
  TaxonomyType,
  type Taxonomy,
} from "@/services/taxonomy";

export default async function CategoriesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: number; pageSize?: number }>;
}) {
  const { page: pageNum, pageSize } = await searchParams;
  const page = pageNum || 1;
  const limit = pageSize || 30;

  const total = await getTaxonomiesCount({
    type: TaxonomyType.CATEGORY,
  });
  const data = await getTaxonomies({
    type: TaxonomyType.CATEGORY,
    page,
    limit,
  });

  const table: Table = {
    columns: [
      {
        name: "slug",
        title: "Slug",
        type: "copy",
        metadata: { message: "Copied" },
      },
      { name: "title", title: "Title" },
      {
        name: "status",
        title: "Status",
        type: "label",
        metadata: { variant: "outline" },
      },
      { name: "createdAt", title: "Created At", type: "time" },
      { name: "updatedAt", title: "Updated At", type: "time" },
      {
        name: "action",
        title: "",
        type: "dropdown",
        callback: (item: Taxonomy) => {
          return [
            {
              id: "edit",
              title: "Edit",
              icon: "RiEditLine",
              url: `/admin/categories/${item.id}/edit`,
            },
          ];
        },
      },
    ],
    actions: [
      {
        id: "edit",
        title: "Edit",
        icon: "RiEditLine",
        url: "/admin/categories/[id]/edit",
      },
    ],
    data,
    pagination: {
      total,
      page,
      limit,
    },
  };

  const actions: Button[] = [
    {
      id: "add",
      title: "Add Category",
      icon: "RiAddLine",
      url: "/admin/categories/add",
    },
  ];

  return (
    <>
      <Header />
      <Main>
        <MainHeader title="Categories" actions={actions} />
        <TableCard table={table} />
      </Main>
    </>
  );
}
