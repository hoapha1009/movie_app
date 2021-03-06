import React, { useEffect } from "react";

const MoveList = ({ movies }) => {
    const shorten = (text, maxLength) => {
        return text && text.length > maxLength
            ? `${text.substr(0, maxLength)}...`
            : text;
    };
    return (
        <>
            {movies.map((movie) => {
                return (
                    <div key={movie.id} className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100">
                            <a href="#">
                                <img
                                    className="card-img-top"
                                    src={movie.image}
                                    alt={movie.name}
                                />
                            </a>
                            <div className="card-body">
                                <h4 className="card-title">
                                    <a href="#">{movie.name}</a>
                                </h4>
                                <h5>$24.99</h5>
                                <p className="card-text">
                                    {shorten(movie.description, 100)}
                                </p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    {movie.rating}&#9733;
                                </small>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default MoveList;
