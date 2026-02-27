import { Suspense } from "react";
import CallbackClient from "./components/callback";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default function Page({ searchParams }: { searchParams: { reference?: string } }) {
  const reference = searchParams.reference;
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CallbackClient reference={reference} />
    </Suspense>
  );
}