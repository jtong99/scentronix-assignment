import AppProvider from "./_providers/AppProvider";
import { PageProps } from "@/types/shared";

export default function RootLayout({ children }: PageProps) {
  return (
    <html>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
