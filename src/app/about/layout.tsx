export default function LayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex gap-3 flex-row-reverse items-center">{children}</div>
    </div>
  );
}
