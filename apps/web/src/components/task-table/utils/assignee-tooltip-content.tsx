import { Space, Tag } from "@arco-design/web-react";
import { Task } from "src/types";

export const AssigneeTooltipContent = ({
  assignees,
}: {
  assignees: Task["assignees"];
}) => {
  return (
    <Space direction="vertical">
      {assignees.map((assignee) => (
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
};
