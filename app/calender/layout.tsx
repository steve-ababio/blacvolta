import 'primereact/resources/themes/lara-light-blue/theme.css';

export default function CalenderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        {children}
    </div>
  );
}