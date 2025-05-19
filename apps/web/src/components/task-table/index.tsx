import * as React from "react";
import { AgGridReact } from "ag-grid-react";

import { Task } from "src/types/task";
import { columnDefs } from "./utils/column-defs";

interface DataTableProps {
  tasks: Task[];
}

export function TaskTable({ tasks }: DataTableProps) {
  return (
    <div className="h-100 w-full">
      <AgGridReact
        rowData={tasks}
        columnDefs={columnDefs}
        tooltipShowDelay={0}
      />
    </div>
  );
}
