export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>Title</div>
      <div>{children}</div>
    </>
  );
}
