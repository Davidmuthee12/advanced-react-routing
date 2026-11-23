import EventsList from "../components/EventsList";

const Events = [
  {
    id: "e1",
    title: "AI Hackathon",
    date: "2027-03-20",
    image: "/images/ai-hackathon.jpg",
  },
  {
    id: "e2",
    title: "Web Development Workshop",
    date: "2027-04-15",
    image: "/images/web-workshop.jpg",
  },
  {
    id: "e3",
    title: "Cloud Computing Summit",
    date: "2027-05-10",
    image: "/images/cloud-summit.jpg",
  },
  {
    id: "e4",
    title: "Cybersecurity Conference",
    date: "2027-06-05",
    image: "/images/cybersecurity-conference.jpg",
  },
  {
    id: "e5",
    title: "Mobile App Bootcamp",
    date: "2027-07-12",
    image: "/images/mobile-bootcamp.jpg",
  },
  {
    id: "e6",
    title: "Data Science Meetup",
    date: "2027-08-22",
    image: "/images/data-science-meetup.jpg",
  },
  {
    id: "e7",
    title: "Open Source Festival",
    date: "2027-09-18",
    image: "/images/open-source-festival.jpg",
  },
];

function EventsPage() {
  return (
    <>
      <EventsList events={Events} />
    </>
  );
}

export default EventsPage;
