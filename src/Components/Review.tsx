import React from "react";

interface ReviewProps {
  id: string;
  userName: User;
  date: Date;
  content: string;
  rating: number;
  book: Book;
}

export default class Review extends React.Component<ReviewProps> {

  render() {
    return <div>ReviewComponent</div>;
  }
}