export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Hello World</h1>
      {children}
    </div>
  );
}
