import React from 'react'
import {Link} from 'gatsby'
import Title from '../Globals/Title'


export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
      <Title title="Our Story"></Title>
      <div className="row">
      <div className="col-10 col-sm-8 mx-auto text-center">
      <p className="lead text-muted mb-5">
      We are an authentic Italian coffee bar, serving the North side of Chicago with a delicious blend of our gourmet hot and iced coffees, gelatos, pastries and unique Italian flavor. Not in the mood for coffee? No problem! We specialize in satisfying your appetite with our daily lunch specials. Come to Caffe Pietro and get a taste of the real Italy!
      </p>
      <Link to="/about/">
      <button className="btn text-uppercase btn-color">About Page</button></Link>
      </div>
      </div>
    </div>
    </section>
  );
}
