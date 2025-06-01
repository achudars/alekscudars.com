import Layout from "../src/layout/Layout";
import Image from "next/image";
import books from "./api/books.json";
import { Fragment } from "react";
import LastUpdated from "../src/components/LastUpdated";

const Reading = () => {
  const renderReadingStats = () => {
    const booksGroupedByYear = Object.groupBy(
      books,
      ({ yearWhenLastFinishedReading }) => yearWhenLastFinishedReading
    );

    const maxBooksReadInAYear = Math.max(
      ...Object.values(booksGroupedByYear).map((b) => Math.max(b.length))
    );

    const renderRelativeProgressByYear = ({ year, numberOfBooks }) => {
      const percentage = `${Math.round(
        (numberOfBooks / maxBooksReadInAYear) * 100
      )}%`;

      return (
        <div className="skill-lt">
          <h6>
            {year}: {numberOfBooks} {numberOfBooks === 1 ? "book" : "books"}
          </h6>
          <div className="skill-bar">
            <div className="skill-bar-in" style={{ width: percentage }}>
              <span data-toggle="tooltip" title={percentage} />
            </div>
          </div>
        </div>
      );
    };

    return (
      <div className="row">
        <div className="col-lg-4 m-15px-tb">
          <ul className="education-box">
            <li>
              <span>2016 - now</span>
              <h6>Relative % of Books Read Per Year</h6>
            </li>
          </ul>
        </div>
        <div className="col-lg-7 ml-auto m-15px-tb">
          <div className="skills-box">
            {Object.entries(booksGroupedByYear)
              .filter(([year]) => year !== "undefined")
              .reverse()
              .map(([year, books]) => (
                <Fragment key={year}>
                  {renderRelativeProgressByYear({
                    year,
                    numberOfBooks: books.length,
                  })}
                </Fragment>
              ))}
          </div>
          <div className="separated" />
        </div>
      </div>
    );
  };

  const renderBookDetails = ({ filteredBooks }) => {
    return (
      <div className="resume-box">
        {filteredBooks.map((book) => {
          return (
            <div key={book.bookTitle} className="resume-row">
              <div className="row">
                <div className="col-sm-3 col-md-3 col-xl-2">
                  <div className="rb-left">
                    <Image
                      src={`/static/img/books/${book.bookTitle}.jpg`}
                      width={150}
                      height={225}
                      alt={book.title || book.bookTitle}
                    />
                  </div>
                </div>
                <div className="col-sm-9 col-md-9 col-xl-10">
                  <div className="rb-right">
                    <h4>{book.bookTitle}</h4>
                    <h5>by: {book.bookAuthor}</h5>
                    {book.dropReason && <h6>{book.dropReason}</h6>}
                    <p>{book.summary}</p>
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

  const renderBookGroupBasedOnStatus = ({ title, subTitle, filterBy }) => {
    const booksFilteredByStatus = books.filter((book) => {
      if (filterBy.every((f) => book[f])) {
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
          <!--<LastUpdated
            filePath="pages/reading.js"
            className="m-15px-tb"
          />-->
        </div>
        {renderReadingStats()}
        {renderBookGroupBasedOnStatus({
          title: "In Progress",
          subTitle: "Currently reading",
          filterBy: ["inProgress"],
        })}
        {renderBookGroupBasedOnStatus({
          title: "Top 3 Personal Favourites",
          subTitle:
            "Books that I would recommend to others, because of the timeless insight they hold",
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
