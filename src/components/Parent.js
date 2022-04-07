import React, { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>

      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button className="btn btn-primary" onClick={() => setCount(count - 1)}>
        -
      </button>
      <Child name="housssem"  count={count} />
    </div>
  );
}
