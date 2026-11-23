import EventForm from "../components/EventForm";

function NewEventPage() {
  return (
    <>
      <h1>Add new Event</h1>
      <EventForm method="post" />
    </>
  );
}

export default NewEventPage;
