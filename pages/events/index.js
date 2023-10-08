import { Fragment } from "react";
import EventList from "../../components/events/event-list";
// import { getAllEvents } from "../../dummy-data"
import { getAllEvents } from "../../helpers/api-util"
import EventsSearch from "./events-search";
import { useRouter } from "next/router";

export default function AllEventPage(props) {
  const router = useRouter();
  // const events = getAllEvents();
  const { events } = props;
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath);
  }
  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  )
}
export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events: events
    },
    revalidate: 60
  };
}
