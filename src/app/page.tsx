import List from "./components/list";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Home() {
  const session = await getServerSession();
  return (
    <div className="grid justify-center items-center h-[80vh]">
      <List />
      <pre>{JSON.stringify(session)}</pre>
    </div>
  );
}
