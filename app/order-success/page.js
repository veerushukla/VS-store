import React, { Suspense } from "react";
import OrderSuccessClient from "./success-client";

const OrderSuccessPage = () => {
  return (
    <Suspense>
      <OrderSuccessClient />
    </Suspense>
  );
};

export default OrderSuccessPage;
