import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../dummy-data"
import EventsSearch from "./events-search";
import { useRouter } from "next/router";

export default function AllEventPage() {
  const router = useRouter();
  const events = getAllEvents();
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath);
  }
  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler}/>
      <EventList items={events} />
    </Fragment>
  )
}
