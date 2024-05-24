function CardEffect({ description, keywords  }) {
  return (
    <div className="card-effect">
        <ul className="card-keywords">
          { keywords.map((keyword, index) => (
            <li key={index}>
              <span className="card-keyword">{keyword}</span>
            </li>
          )) }
        </ul>
        <span className="card-description">{description}</span>
      </div>
  )
}

export default CardEffect
