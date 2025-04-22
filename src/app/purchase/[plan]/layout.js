export default function PurchaseLayout({ children }) {
  return (
    <>
      {children}
      {/* Add Cashfree SDK */}
      <script src='https://sdk.cashfree.com/js/ui/2.0.0/cashfree.sandbox.js'></script>
    </>
  );
}
