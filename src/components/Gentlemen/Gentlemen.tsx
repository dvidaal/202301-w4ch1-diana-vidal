import "./Gentlemen.css";

const Gentlemen = (): JSX.Element => {
  return (
    <li className="gentleman">
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src="img/fary.jpg"
          alt="The Fary pointing at you"
        />
        <span className="gentleman__initial">F</span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">The Fary</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profession:</span>
            Influencer
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Status:</span> RIP
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span> Pending
          </li>
        </ul>
      </div>
      <i className="icon gentleman__icon fas fa-check"></i>
      <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
    </li>
  );
};

export default Gentlemen;
