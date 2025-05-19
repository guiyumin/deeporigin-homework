import { fetchUserTasks } from "src/queries";
import { Task } from "src/types";
import { TaskTable } from "src/components/task-table";

export default function Home({
  tasks,
  error,
}: {
  tasks?: Task[];
  error?: string;
}) {
  if (error || !tasks) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-col gap-4 mx-auto max-w-7xl w-full p-4 bg-gray-100 ">
      <h1>Tasks Table</h1>
      <TaskTable tasks={tasks} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const { data, error } = await fetchUserTasks({
    baseUrl:
      process.env.NODE_ENV === "production"
        ? "http://server:9000"
        : "http://localhost:9000",
  });

  return {
    props: {
      tasks: data?.tasks,
      error,
    },
  };
};
