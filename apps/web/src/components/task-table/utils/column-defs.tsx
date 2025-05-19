import { ColDef, ICellRendererParams } from "ag-grid-community";
import Link from "next/link";
import { AssigneeRenderer } from "./assignee-renderer";
import { Task } from "src/types/task";

export const columnDefs: ColDef<Task>[] = [
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
    headerName: "Volume(μl)",
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
    flex: 1,
    cellRenderer: AssigneeRenderer,
    sortable: false,
  },
];
