/* eslint-disable no-unused-vars */

/*
Notice that when not calling “next” in an error-handling function,
you are responsible for writing (and ending) the response.
Otherwise those requests will “hang” and will not be eligible for garbage collection.
https://expressjs.com/en/guide/error-handling.html
*/

export const logErrors = (err, req, res, next) => {
  // log error then pass it along
  next(err);
};

export const clientError = (err, req, res, next) => {
  if (req.xhr) {
    res.status(500).json({ error: 'Something failed!' });
  } else {
    next(err);
  }
};

export const serverError = (err, req, res, next) => {
  // use a switch case to serve error messages
  res.status(500).json({ error: err.stack });
};
