import { Button } from "@/app/components/ui/button";
import { XCircle, ArrowLeft, RotateCcw } from "lucide-react";

const PaymentFailed = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md text-center">
        {/* Error Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[hsl(var(--error-icon-bg))]">
          <XCircle className="h-10 w-10 text-[hsl(var(--error-icon))]" strokeWidth={1.5} />
        </div>

        {/* Heading */}
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-foreground">
          Payment Failed
        </h1>
        <p className="mb-8 text-muted-foreground leading-relaxed">
          We couldn&apos;t process your payment. Please check your card details or try a different payment method.
        </p>

        {/* Order Summary Card */}
        {/* <div className="mb-8 rounded-xl border border-border bg-card p-5 text-left">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Order</span>
            <span className="text-sm font-medium text-foreground">#ORD-2847</span>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Amount</span>
            <span className="text-sm font-semibold text-foreground">$149.00</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Reason</span>
            <span className="text-sm font-medium text-destructive">Insufficient funds</span>
          </div>
        </div> */}

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <Button size="lg" className="w-full gap-2">
            <RotateCcw className="h-4 w-4" />
            Try Again
          </Button>
          <Button variant="outline" size="lg" className="w-full gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Store
          </Button>
        </div>

        {/* Help link */}
        <p className="mt-6 text-sm text-muted-foreground">
          Need help?{" "}
          <a href="#" className="font-medium text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors">
            Contact Support
          </a>
        </p>
      </div>
    </div>
  );
};

export default PaymentFailed;
