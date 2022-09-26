import Item from "./Item";

import classes from "./style.module.css";

const educationItems = [
  {
    id: 1,
    date: "2009",
    place: "University of Studies",
    title: "UI Design",
    description:
      "Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.",
  },
  {
    id: 2,
    date: "2008",
    place: "University of Studies",
    title: "Graphic Design",
    description:
      "Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.",
  },
  {
    id: 3,
    date: "2007",
    place: "University of Studies",
    title: "Frontend Development",
    description:
      "Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.",
  },
];

const Education = () => {
  return (
    <div className={classes["sub-section"]}>
      <h2 className={classes["sub-section-title"]}>Education</h2>
      {educationItems.map((item) => (
        <Item
          key={item.id}
          date={item.date}
          place={item.place}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Education;
