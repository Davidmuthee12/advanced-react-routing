import { useParams } from "react-router-dom";

function EditEventPage() {
  const params = useParams();
  return (
    <>
      <h1>Edit Events page</h1>
      <p>editing event ID: {params.eventId}</p>
    </>
  );
}

export default EditEventPage;
