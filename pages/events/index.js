import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../dummy-data"
import EventsSearch from "./events-search";

export default function AllEventPage() {
  const events = getAllEvents();
  return (
    <Fragment>
      <EventsSearch />
      <EventList items={events} />
    </Fragment>
  )
}
