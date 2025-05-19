import { Space, Tag } from "@arco-design/web-react";

export const AssigneeTooltipContent = ({ assignees }: { assignees: any[] }) => {
  return (
    <Space direction="vertical">
      {assignees.slice(1).map((assignee) => (
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
