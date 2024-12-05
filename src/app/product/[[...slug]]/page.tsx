import { use } from "react";

type DetailProductPageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export default function DetailProductPage({ params }: DetailProductPageProps) {
  const unwrappedParams = use(params); // Menggunakan React.use untuk unwrap
  const slug = unwrappedParams.slug;

  return (
    <div>
      <h1>Detail Product Page</h1>
      <p>Category: {slug[0]}</p>
      <p>Gender: {slug[1]}</p>
      <p>Id: {slug[2]}</p>
    </div>
  );
}
