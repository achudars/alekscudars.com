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
                    <p>by: {book.bookAuthor}</p>
                    {book.dropReason && (<p>{book.dropReason}</p>)}
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
    filterBy
  }) => {
    const booksFilteredByStatus = books.filter((book) => {
      if (filterBy.every(f => book[f])) {
        return book;
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

  const renderContainer = () => {
    return (
      <>
        <div className="title">
          <h3>Reading.</h3>
        </div>
        {renderBookGroupBasedOnStatus({
          title: "In Progress",
          subTitle: "Currently reading",
          filterBy: ["inProgress"]
        })}
        {renderBookGroupBasedOnStatus({
          title: "Top 3 Personal Favourites",
          subTitle: "Books that I would recommend to others, because of the timeless insight they hold",
          filterBy: ["isItWorthReReading"],
        })}
        {renderBookGroupBasedOnStatus({
          title: "Finished",
          subTitle: "Grouped by year, with the recent ones at the top",
          filterBy: ["yearWhenLastFinishedReading"],
        })}
        {renderBookGroupBasedOnStatus({
          title: "Wishlisted",
          filterBy: ["wishlisted"],
        })}
        {renderBookGroupBasedOnStatus({
          title: "Dropped",
          filterBy: ["dropped"],
        })}
      </>
    );
  };

  return (
    <Layout showBackBtn>
      <section
        id="Reading"
        data-nav-tooltip="Reading"
        className="pp-section pp-scrollable section counter"
      >
        <div className="container">{renderContainer()}</div>
      </section>
    </Layout>
  );
};
export default Reading;
