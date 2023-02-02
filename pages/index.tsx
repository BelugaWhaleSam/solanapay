import { createQR, encodeURL, TransactionRequestURLFields } from "@solana/pay";
import { useEffect, useRef } from "react";

export default function Home() {
  const mintQrRef = useRef<HTMLDivElement>();

  // Generate the Solana Pay QR code
  // This is a transaction request, with our checkout API as the link
  // We can only generate a QR code on the client, so do it in the useEffect
  useEffect(() => {
    const { location } = window;
    // location.protocol is http: or https:
    // location.host is localhost:3000
    const apiUrl = `${location.protocol}//${location.host}/api/checkout`;

    const mintUrlFields: TransactionRequestURLFields = {
      link: new URL(apiUrl),
    };
    const mintUrl = encodeURL(mintUrlFields);
    const mintQr = createQR(mintUrl, 350, "transparent", "blue");

    // Set the generated QR code on the QR ref element
    if (mintQrRef.current) {
      mintQrRef.current.innerHTML = "";
      mintQr.append(mintQrRef.current);
    }
  }, []);

  return (
    <main className="container flex flex-col gap-20 items-center p-4 mx-auto min-h-screen justify-center">
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl">Scan QR Code</h1>
        <div ref={mintQrRef} />
      </div>
    </main>
  );
}
