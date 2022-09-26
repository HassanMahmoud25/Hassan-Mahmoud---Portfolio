import classes from "./Contact.module.css";

import SectionHeader from "../Common/SectionHeader";
import ContactData from "./ContactData";

import Phone from "../Icons/Phone";
import Location from "../Icons/Location";
import Letter from "../Icons/Letter";

const phone = <Phone className={classes.icon} />;
const location = <Location className={classes.icon} />;
const letter = <Letter className={classes.icon} />;

const contactDataList = [
  {
    id: 1,
    icon: phone,
    title: "415-832-2000",
    text: "Duis erat leo, aliquam laoreet fringilla quis, pretium vitae dui.",
  },
  {
    id: 2,
    icon: location,
    title: "San Francisco",
    text: "Duis erat leo, aliquam laoreet fringilla quis, pretium vitae dui.",
  },
  {
    id: 3,
    icon: letter,
    title: "hello@example.com",
    text: "Duis erat leo, aliquam laoreet fringilla quis, pretium vitae dui.",
  },
];

const Contact = () => {
  return (
    <section className={classes.container}>
      <SectionHeader id="contact" head="Contact" addition="Get in Touch" />

      <div className={classes.body}>
        <h2 className={classes["section-title"]}>How Can I Help You?</h2>
        <div className={classes["body-container"]}>
          <div className={classes["contact-data"]}>
            {contactDataList.map((item) => (
              <ContactData
                key={item.id}
                icon={item.icon}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
          <form className={classes["contact-form"]}>
            <div className={classes["input-fields-container"]}>
              <input
                className={classes.inputField}
                type="text"
                name="Full Name"
                placeholder="Full Name"
                required
              />
              <input
                className={classes.inputField}
                type="email"
                name="Email"
                placeholder="Email Address"
                required
              />
              <input
                className={classes.inputField}
                type="text"
                name="Subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className={classes["text-area-container"]}>
              <textarea
                className={classes["text-area"]}
                placeholder="Message"
              />
            </div>
            <button className={classes.submitBtn} type="submit">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
