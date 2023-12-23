


// Data Fetching:
// 1. Server Side Rendering: (SSR): Use for each page.New render cycle per request .
// 2. Static Site Generation: Ideal for content that doesn't change frequently (blog post, documentation)
// 3. Incremental Static Generation (ISR): Time interval for fetching data;
//  {next: {revalidate: 10 } }
export default function ProductList() {
  return (
    <>
      <h1>Product List</h1>
      <h2>Product 1</h2>
      <h2>Product 2</h2>
      <h2>Product 3</h2>
    </>
  )
}
