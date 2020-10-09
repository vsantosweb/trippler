import React from 'react';

import css from './TripReviews.module.scss';
function TripReviews() {
  return (
    <div className={css.reviewWrapper}>
      <div className={css.ratingResume}>
        <div className={css.ratingTotal}>
          <div className={css.ratingValue}>4,5</div>
          <div className={css.rating}>
            {/* <Rate tooltips={'good'} size={'small'} disabled value={'5'} /> */}
          </div>
        </div>
        <div className={css.ratingDetailsContainer}>
          <ul className={css.ratingDetails}>
            <li className={css.ratingDetailItem}>
              <span className={css.ratingText}>5 estrelas</span>
              <span className={css.ratingProgress}>
                <div className={css.progressFill} style={{ width: '78%' }}></div>
                <div className={css.progressBg}></div>
              </span>
              <span className={css.ratingValue}>116</span>
            </li>
            <li className={css.ratingDetailItem}>
              <span className={css.ratingText}>4 estrelas</span>
              <span className={css.ratingProgress}>
                <div className={css.progressFill} style={{ width: '78%' }}></div>
                <div className={css.progressBg}></div>
              </span>
              <span className={css.ratingValue}>116</span>
            </li>
            <li className={css.ratingDetailItem}>
              <span className={css.ratingText}>3 estrelas</span>
              <span className={css.ratingProgress}>
                <div className={css.progressFill} style={{ width: '18%' }}></div>
                <div className={css.progressBg}></div>
              </span>
              <span className={css.ratingValue}>116</span>
            </li>
            <li className={css.ratingDetailItem}>
              <span className={css.ratingText}>2 estrelas</span>
              <span className={css.ratingProgress}>
                <div className={css.progressFill} style={{ width: '8%' }}></div>
                <div className={css.progressBg}></div>
              </span>
              <span className={css.ratingValue}>116</span>
            </li>
            <li className={css.ratingDetailItem}>
              <span className={css.ratingText}>1 estrelas</span>
              <span className={css.ratingProgress}>
                <div className={css.progressFill} style={{ width: '4%' }}></div>
                <div className={css.progressBg}></div>
              </span>
              <span className={css.ratingValue}>116</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={css.userReviews}>
        <h3>Opiniões dos viajantes</h3>
        <div className={css.review}>
          <div className={css.reviewRating}>
            {/* <Rate tooltips={'good'} size={'small'}  disabled value={'5'} /> */}
          </div>
          <div className={css.reviewUserName}>John Smith,  Março 2020</div>
          <p className={css.reviewUserComment}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className={css.review}>
          <div className={css.reviewRating}>
            {/* <Rate tooltips={'good'} size={'small'} disabled value={'3.5'} /> */}
          </div>
          <div className={css.reviewUserName}>John Smith,  Março 2020</div>
          <p className={css.reviewUserComment}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className={css.review}>
          <div className={css.reviewRating}>
            {/* <Rate tooltips={'good'} size={'small'} disabled value={'4'} /> */}
          </div>
          <div className={css.reviewUserName}>John Smith,  Março 2020</div>
          <p className={css.reviewUserComment}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className={css.review}>
          <div className={css.reviewRating}>
            {/* <Rate tooltips={'good'} size={'small'} disabled value={'35'} /> */}
          </div>
          <div className={css.reviewUserName}>John Smith,  Março 2020</div>
          <p className={css.reviewUserComment}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TripReviews;