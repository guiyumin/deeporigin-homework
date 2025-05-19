import { Select, Tag, Tooltip } from "@arco-design/web-react";
import { Space } from "@arco-design/web-react";
import type { ICellRendererParams } from "ag-grid-community";
import * as React from "react";
import { IconCheck, IconEdit } from "@arco-design/web-react/icon";
import { AssigneeTooltipContent } from "./assignee-tooltip-content";

export const AssigneeRenderer = (params: ICellRendererParams) => {
  console.log("params", params);
  console.log("params.api.getAllGridColumns()", params.api.getAllGridColumns());
  const [isEditing, setIsEditing] = React.useState(false);
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
        disabled={params.value.length <= 1}
        content={<AssigneeTooltipContent assignees={params.value as any[]} />}
      >
        <Select
          className="min-w-100"
          mode="multiple"
          maxTagCount={1}
          placeholder="Select assignees"
          defaultValue={params.value.map((assignee: any) => assignee.id)}
          allowClear={isEditing}
          disabled={!isEditing}
        >
          {params.value.map((assignee: any) => (
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
