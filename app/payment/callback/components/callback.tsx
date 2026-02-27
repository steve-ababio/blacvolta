"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CallbackClient({reference}: {reference?: string}) {
  const router = useRouter();

  useEffect(() => {
    if (!reference) {
      router.replace("/merchandise");
      return;
    }
    fetch("/api/payment/verify", {
      method: "POST",
      body: JSON.stringify({ reference }),
    }).then(res => {
      if (res.ok) {
        router.replace(`/success/${reference}`);
      } else {
        router.replace("/payment-failed");
      }
    });
  }, []);

  return <p>Verifying payment...</p>;
}