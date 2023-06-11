import React from "react";
import Header from "../components/Layout/Header";
import EventCard from "../components/Common/EventCard";
import Footer from "../components/Layout/Footer";

const EventsPage = () => {
  return (
    <div>
      <Header activeheading={4} />
      <EventCard active={true} />
      <EventCard active={true} />
      <Footer />
    </div>
  );
};

export default EventsPage;
