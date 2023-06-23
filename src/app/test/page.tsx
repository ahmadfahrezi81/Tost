import { getOrder } from "@/libs/order";
import { getTableID } from "@/libs/tables";

const Page = async () => {
  const a = await getOrder();

  console.log(a);

  return <div>Hello</div>;
};

export default Page;
