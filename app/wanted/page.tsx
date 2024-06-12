import { Suspense } from "react";
import CoffeeTitle from "./CoffeeTitle";
import CoffeeContent from "./CoffeeContent";

export default async function Data() {
  //   const [data1, data2] = await Promise.all([getData(), getData()]);
  //   const data1 = await getData();
  //   const data2 = await getData();
  return (
    <div>
      <Suspense fallback={<h1>Loading</h1>}>
        <CoffeeTitle />
      </Suspense>
      <hr />
      <Suspense fallback={<h1>Loading</h1>}>
        <CoffeeContent />
      </Suspense>
    </div>
  );
}
