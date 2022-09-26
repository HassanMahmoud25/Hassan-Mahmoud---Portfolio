import Item from "./Item";

import classes from "./style.module.css";

const experienceItems = [
  {
    id: 1,
    date: "2016 - Current",
    place: "Rolling Thunder",
    title: "Lead UI/UX Designer",
    description:
      "Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.",
  },
  {
    id: 2,
    date: "2013 - 2016",
    place: "Locost Accessories",
    title: "Senior UI/UX Designer",
    description:
      "Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.",
  },
  {
    id: 3,
    date: "2011 - 2013",
    place: "Sagebrush",
    title: "Junior UI/UX Designer",
    description:
      "Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.",
  },
];

const Experience = () => {
  return (
    <div className={classes["sub-section"]}>
      <h2 className={classes["sub-section-title"]}>Experience</h2>
      {experienceItems.map((item) => (
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

export default Experience;
