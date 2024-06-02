import Header from "@/components/shared/Header";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex flex-col w-full min-h-screen max-w-7xl lg:mx-auto">
        <Header />
        <div className="sm:p-6 sm:px-10 mt-24">
          {children}
        </div>
      </main>
    );
  }
  