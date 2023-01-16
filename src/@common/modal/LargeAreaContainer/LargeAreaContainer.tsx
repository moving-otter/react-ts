import React from "react";
import { LargeArea } from "./LargeArea";

// API를 호출하고 success 되면 <LargeArea />를 호출
export const LargeAreaContainer = () => {
  return (
    <div>
      LargeAreaContainer
      <LargeArea />
    </div>
  );
};
