import { Select, Tag, Tooltip } from "@arco-design/web-react";
import { Space } from "@arco-design/web-react";
import type { ICellRendererParams } from "ag-grid-community";
import * as React from "react";
import { IconCheck, IconEdit } from "@arco-design/web-react/icon";
import { AssigneeTooltipContent } from "./assignee-tooltip-content";
import { Task } from "src/types/task";

export const AssigneeRenderer = (
  params: ICellRendererParams<Task, Task["assignees"]>
) => {
  const [isEditing, setIsEditing] = React.useState(false);

  const currentAssignees = params.value ?? [];
  const allAssignees: Task["assignees"] = [];

  params.api.forEachNode((node) => {
    allAssignees.push(...node.data!.assignees);
  });

  return (
    <Space>
      {isEditing ? (
        <IconCheck
          className="w-4 h-4"
          onClick={() => {
            setIsEditing(false);
          }}
        />
      ) : (
        <IconEdit
          onClick={() => {
            setIsEditing(true);
          }}
        />
      )}
      <Tooltip
        position="top"
        trigger="hover"
        disabled={currentAssignees.length <= 1}
        content={<AssigneeTooltipContent assignees={currentAssignees} />}
      >
        <Select
          className="min-w-100"
          mode="multiple"
          maxTagCount={1}
          placeholder="Select assignees"
          defaultValue={currentAssignees.map((assignee: any) => assignee.id)}
          allowClear={isEditing}
          disabled={!isEditing}
        >
          {allAssignees.map((assignee: any) => (
            <Select.Option key={assignee.id} value={assignee.id}>
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
            </Select.Option>
          ))}
        </Select>
      </Tooltip>
    </Space>
  );
};
