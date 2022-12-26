import { EventCard } from "./Event_card.js";
import "../../css/past events/Past_event.css";

export const Past_event = () => {
  return (
    <>
      <div className="event_h event_bg">
        <div className="text-transparent">a</div>
        <div className="event_title font">Past Events</div>
        <div className="event_card_section">
          <EventCard
            event_name="CODING COMPETITION 3.0"
            event_content="Offline coding event where students were given questions of DSA to improve their skills."
            event_date="23-03-22"
            event_icon="fa-solid fa-terminal fa-3x"
          />
          <EventCard
            event_name="ROADMAP TO DSA"
            event_content="Offline coding event where students were given questions of DSA to improve their skills"
            event_date="17-05-22"
            event_icon="fa-solid fa-comment fa-3x"
          />
          <EventCard
            event_name="WEB-O-CODE"
            event_content='12 hour frontend development event where students developed web pages on the topic " Global Innovation " '
            event_date="28-10-22"
            event_icon="fa-regular fa-object-group fa-3x"
          />
          <div className="text-transparent">b</div>
        </div>
      </div>
    </>
  );
};
