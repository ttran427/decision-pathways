export interface Decision {
  id: string;
  text: string;
  image: string;
  choices: {
    text: string;
    nextId: string;
  }[];
}

export const decisions: Record<string, Decision> = {
  start: {
    id: "start",
    text: "Pick a pill to add to the water mixture.",
    image: "https://t4.ftcdn.net/jpg/06/76/96/45/360_F_676964529_kJPSZLlUfAJcLIoF9IDvwg1qnGVJUGvI.jpg",
    choices: [
      {
        text: "Red Pill",
        nextId: "red_pill",
      },
      {
        text: "Blue Pill",
        nextId: "blue_pill",
      },
    ],
  },
  red_pill: {
    id: "red_pill",
    text: "Red pill represents the choice to see the truth, no matter how harsh or unsettling it may be...",
    image: "https://news.emory.edu/features/2021/11/molnupiravir_experts_weigh_in_treatment_covid_19-11-2021/assets/T6ei4HzRxZ/social-media-molnupiravir-1024x512.jpeg",
    choices: [
      {
        text: "Go do homework",
        nextId: "homework_path",
      },
      {
        text: "Go fail final exam",
        nextId: "fail_exam",
      },
    ],
  },
  blue_pill: {
    id: "blue_pill",
    text: "Blue pill represents the choice to remain ignorant and continue living in the simulated reality...",
    image: "https://t3.ftcdn.net/jpg/10/43/64/42/360_F_1043644267_SsOF1stwLNAbTwj1ZnTEiiHyFWpefjPa.jpg",
    choices: [
      {
        text: "Go to Disneyland",
        nextId: "go_disneyland",
      },
      {
        text: "Go to Legoland",
        nextId: "go_legoland",
      },
    ],
  },
  homework_path: {
    id: "homework_path",
    text: "You decide to do homework that Dr. Vasudha assigned.",
    image: "https://www.parent.com/cdn/shop/articles/bored-and-fed-boy-up-doing-his-homework_1000x.jpg?v=1719362663",
    choices: [
      {
        text: "Start over",
        nextId: "start",
      },
      {
        text: "Start over",
        nextId: "start",
      },
    ],
  },
  fail_exam: {
    id: "fail_exam",
    text: "You did not study for your exam and now crying.",
    image: "https://as2.ftcdn.net/v2/jpg/06/11/65/65/1000_F_611656509_kXWyUK5pzPPaShMW0W1vtoKBKfOTUKwm.jpg",
    choices: [
      {
        text: "Start over",
        nextId: "start",
      },
      {
        text: "Start over",
        nextId: "start",
      },
    ],
  },
  go_disneyland: {
    id: "go_disneyland",
    text: "You are at Disneyland and took a picture in front of the castle.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/92/e4/97/disneyland-paris.jpg?w=900&h=500&s=1",
    choices: [
      {
        text: "Start over",
        nextId: "start",
      },
      {
        text: "Start over",
        nextId: "start",
      },
    ],
  },
  go_legoland: {
    id: "go_legoland",
    text: "You are at legoland and now taking selfies with lego figures.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/07/aa/17/welcome-to-legoland-california.jpg?w=1200&h=1200&s=1",
    choices: [
      {
        text: "Start over",
        nextId: "start",
      },
      {
        text: "Start over",
        nextId: "start",
      },
    ],
  },
};