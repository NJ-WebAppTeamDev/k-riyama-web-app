function Blog({ params }: { params: { place_id: string } }) {
  return (
    <>
      <h1>{params.place_id}</h1>
    </>
  );
}
export default Blog;
