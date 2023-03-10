import React from 'react';

import Hero from '../hero/HeroImage';
import News from '../News/News';

export default class App extends React.Component {
  // constructor() {
  //   super();
  // }
  componentDidMount() {}
  render() {
    return (
      <div>
        <Hero style={'ourschool-img'} />
        <div className="head">
          <div className="school">
            <h2>Our School</h2>
            <div className="box" />
            <p>
              We would like to extend a warm welcome to Topmic International School System
              and take a few moments to share our vision with you. We are a
              healthy, thriving educational community catering to students in
              Childcare through to Primary School. The school has enjoyed a strong
              academic achievement record, and an engaging, varied curriculum.
              The school’s co-curricular activities and unique programs all
              reinforce our desire to develop the whole child.
              <br />
              <br />
              Topmic’s most noticeable strength is its community, where each
              student is connected and valued. Staff members make a conscious
              effort to model healthy, authentic relationhips with each other,
              with students, and their families. Our teachers are selected from
              a solid academic base and are 100% committed to delivering quality
              education in a dynamic, engaging learning environment. They all
              have a genuine embody compassion and service in the school and
              wider community. We are very much about shaping content and
              character as we normalize striving for exellence in life at shool
              and beyond. We want to assist students to reach their ﬁrst-choice
              University or apprenticeship aspirations when they graduate.The
              earlier that process Starts, the better.
              <br />
              <br />
              So,if you are wanting to have every opportunity a private
              education offers, to explore and shone your child’s unique gifts,
              chances are, Topmic is a good for you. We invite you to visit us
              on campus.
            </p>
          </div>
          <div className="col1">
            <div className="aims">
              <h2>Our Aims</h2>
              <div className="box" />
              <p>
                To develop the individual’s full potential through the pursuit
                of exellence.
                <br />
                To develop independent thought and a sense of responsibility in
                preparation for adult life.
                <br />
                To nurture positive relationships within a caring and supportive
                environment.
              </p>
            </div>
            <div className="mission">
              <h2>Our Mission</h2>
              <div className="box" />
              <p>
                We aim develop individual potential and self-worth through
                stimulating and positive relationships and through an
                understanding of Islamic values, so that our students are
                prepared for the challenges that they will face in life and
                beyond school.
              </p>
            </div>
          </div>
          <div className="col2 board">
            <h2>School Board</h2>
            <div className="box" />

            <h5>MRS ...... </h5>
            <p>
              Principal  <br />
            </p>

            <h5>MR ...... </h5>
            <p>
              PTA Chairman  <br />
            </p>
          </div>
          <div className="News-container news-hide">
            <News />
          </div>
        </div>
        <div className="News-container news-hide-2">
            <News />
        </div>
      </div>
    );
  }
}
