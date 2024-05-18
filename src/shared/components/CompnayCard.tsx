interface ReviewCardProps {
  name: string;
  description: string;
  location: string;
  rating: number;
  imageUrl: string;
  useInProfile?: boolean;
}

export const CompanyCard: React.FC<ReviewCardProps> = ({
  name,
  description,
  location,
  rating,
  imageUrl,
  useInProfile,
}) => {
  return (
    <div className="loan-reviews_card card">
      <div className="loan-reviews__part-one">
        <div className="loan-reviews__thumb">
          <img src={imageUrl} alt="image" />
        </div>
      </div>
      <div className="loan-reviews__part-two">
        <div className="reviews-heading">
          <h4 className="reviews-heading__title text-center">{name}</h4>
          <p className="reviews-heading__content text-center">{description}</p>
          <p className="reviews-heading__content mt-3 text-center">
            <i className="bi bi-map"></i> {location}
          </p>
          <div className="d-flex justify-content-center">
            <div className="star_review mt-3">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`bi ${
                    i < rating ? "bi-star-fill star-active" : "bi-star"
                  }`}
                ></i>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="loan-reviews__part-three">
        <div className="btn-group">
          <a href="#" className="btn_theme btn_theme_active">
            {useInProfile ? "Write Review" : "Review"}{" "}
            {useInProfile ? (
              <i className="bi bi-arrow-down-left"></i>
            ) : (
              <i className="bi bi-arrow-up-right"></i>
            )}
            <span></span>
          </a>
        </div>
      </div>
    </div>
  );
};
