export const getData = async (url: string) => {
  const res = await fetch(url);
  // const res = await fetch("http://localhost:3000/api/product", {
  //   cache: "no-cache",
  //   next: {
  //     tags: ["products"],
  //     // revalidate: 20
  //   },
  // });
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};

// export const getData = async (url: string) => {
//   if (!res.ok) throw new Error("Failed to fetch data");
//   return res.json();
// };
