import * as React from "react";

import { Task } from "src/schemas/task";

interface DataTableProps {
  tasks: Task[];
}

export function TaskTable({ tasks }: DataTableProps) {
  const [rowSelection, setRowSelection] = React.useState({});
}
