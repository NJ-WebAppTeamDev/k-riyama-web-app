function ShowStampBoard({ stampsList }: { stampsList: string[] }) {
  return (
    <>
      <h3>stampboard</h3>
      <ul>
        {stampsList.map((stamp, index) => (
          <li key={index}>{stamp}</li>
        ))}
      </ul>
    </>
  );
}
export default ShowStampBoard;
