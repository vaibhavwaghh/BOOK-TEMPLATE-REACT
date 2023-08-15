function BookList(props) {
  const { authorName, titlee, img, number } = props;
  return (
    <>
      <div className="container">
        <span className="vpww">{number + 1}</span>
        <div className="container-1">
          <img className="imgg" src={img} alt="" />
        </div>
        <h1>{titlee}</h1>
        <h3 className="a">{authorName}</h3>
      </div>
    </>
  );
  function v() {
    console.log(titlee);
  }
}
export default BookList;
