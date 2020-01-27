import React from 'react'
import {Link} from 'gatsby'



export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
      <div className="row">
      <div className="col-10 col-sm-8 mx-auto text-center">
      <p className="lead text-muted mb-5">
      Caffe Pronto is the brainchild of Silvio Fantauzzo, an Italian entrepreneur that wanted nothing more than to bring a little slice of the real Italy to Chicago. He first opened his doors to the public in 1996. After only being open for 3 months, he decided to sell the business when his son passed away suddenly. Almost 16 years to the day, Silvio has re-opened his doors, reviving both the dream and the name, Caffe Pronto.
      </p>
      <Link to="/about/">
      <button className="btn text-uppercase btn-color">About Page</button></Link>
      </div>
      </div>
    </div>
    </section>
  );
}
