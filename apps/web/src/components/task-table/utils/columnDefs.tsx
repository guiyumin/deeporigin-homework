import { Space, Tag } from "@arco-design/web-react";
import { ColDef, ColGroupDef, ICellRendererParams } from "ag-grid-community";
import Link from "next/link";

export const columnDefs: (ColDef | ColGroupDef)[] = [
  {
    field: "id",
    headerName: "ID",
    cellRenderer: (params: ICellRendererParams) => {
      return (
        <Link
          href={`/tasks/${params.value}`}
          className={"truncate text-blue-600 hover:underline"}
        >
          {params.value}
        </Link>
      );
    },
  },
  {
    field: "plasmid",
    headerName: "Plasmid",
    tooltipField: "plasmid",
  },
  {
    field: "volume",
    headerName: "Volume(ul)",
  },
  {
    field: "lastModified",
    headerName: "Last Modified",
    cellRenderer: (params: ICellRendererParams) => {
      return (
        <div>{new Date(params.value).toLocaleString().replace(",", "")}</div>
      );
    },
  },
  {
    field: "assignees",
    headerName: "Assignees",

    cellRenderer: (params: ICellRendererParams) => {
      return (
        <Space>
          {params.value.map((assignee: any) => (
            <Tag
              key={assignee.id}
              icon={
                <img
                  key={assignee.id}
                  className="w-4 h-4 rounded-full"
                  src={assignee.avatar}
                />
              }
            >
              {assignee.name}
            </Tag>
          ))}
        </Space>
      );
    },
  },
];
