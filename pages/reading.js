import Layout from "../src/layout/Layout";
import books from "./api/books.json";
import { Fragment } from "react";

const Reading = () => {
  const renderBookDetails = ({ filteredBooks }) => {
    return (
      <div className="resume-box">
        {filteredBooks.map((book) => {
          return (
            <div key={book.bookTitle} className="resume-row">
              <div className="row">
                <div className="col-sm-3 col-md-3 col-xl-2">
                  <div className="rb-left">
                    <img
                      src={`/static/img/books/${book.bookTitle}.jpg`}
                      title={book.title}
                      alt={book.title}
                    />
                  </div>
                </div>
                <div className="col-sm-9 col-md-9 col-xl-10">
                  <div className="rb-right">
                    <h6>{book.bookTitle}</h6>
                    <label>by: {book.bookAuthor}</label>
                    {!!book.yearWhenLastFinishedReading && (
                      <div className="rb-time">
                        {book.yearWhenLastFinishedReading}
                      </div>
                    )}
                    <p>{book.bookSummary}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderBookGroupBasedOnStatus = ({
    title,
    subTitle,
    inProgress,
    wishlisted,
    dropped,
  }) => {
    const booksFilteredByStatus = books.filter((book) => {
      if (dropped) {
        return book.dropped;
      } else if (wishlisted) {
        return book.wishlisted;
      } else if (inProgress) {
        return book.inProgress;
      } else {
        return (
          book &&
          !book.dropped &&
          !book.inProgress &&
          !book.wishlisted &&
          book.yearWhenLastFinishedReading
        );
      }
    });

    const numberOfFilteredBooks = booksFilteredByStatus?.length;

    const years = Array.from(
      new Set(booksFilteredByStatus.map((b) => b.yearWhenLastFinishedReading))
    ).filter((b) => b);

    return (
      <>
        <div className="about-text">
          <h3>{`${title} (${numberOfFilteredBooks})`}</h3>
          <p>{subTitle}</p>
        </div>
        {years.length ? (
          years.map((year) => {
            const filteredBooks = booksFilteredByStatus.filter(
              (b) => b.yearWhenLastFinishedReading === year
            );
            return (
              <Fragment key={year}>
                <p>{year}</p>
                {renderBookDetails({ filteredBooks, year })}
                <div className="separated" />
              </Fragment>
            );
          })
        ) : (
          <Fragment>
            {renderBookDetails({ filteredBooks: booksFilteredByStatus })}
            <div className="separated" />
          </Fragment>
        )}
      </>
    );
  };

  const renderReading = () => {
    return (
      <>
        <div className="title">
          <h3>Reading.</h3>
        </div>
        {renderBookGroupBasedOnStatus({
          title: "In Progress",
          subTitle: "Currently reading",
          inProgress: true,
        })}
        {renderBookGroupBasedOnStatus({
          title: "Finished",
          subTitle: "Grouped by year, with the recent ones at the top",
          inProgress: false,
        })}
        {renderBookGroupBasedOnStatus({
          title: "Wishlisted",
          wishlisted: true,
        })}
        {renderBookGroupBasedOnStatus({
          title: "Dropped",
          dropped: true,
        })}
      </>
    );
  };

  return (
    <Layout showBackBtn>
      <section
        id="reading"
        data-nav-tooltip="Reading"
        className="pp-section pp-scrollable section counter"
      >
        <div className="container">{renderReading()}</div>
      </section>
    </Layout>
  );
};
export default Reading;
