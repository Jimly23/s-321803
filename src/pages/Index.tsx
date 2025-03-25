
import { Suspense } from "react";
import { Navigate } from "react-router-dom";

export default function Index() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navigate to="/" replace />
    </Suspense>
  );
}
