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
    text: "You find yourself standing at a crossroads in a mysterious forest. The path splits in two directions.",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    choices: [
      {
        text: "Take the dark, overgrown path",
        nextId: "dark_path",
      },
      {
        text: "Follow the well-lit trail",
        nextId: "light_path",
      },
    ],
  },
  dark_path: {
    id: "dark_path",
    text: "The branches overhead create an eerie canopy. You hear rustling in the undergrowth.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    choices: [
      {
        text: "Investigate the sound",
        nextId: "investigate_sound",
      },
      {
        text: "Keep moving forward quietly",
        nextId: "move_quietly",
      },
    ],
  },
  light_path: {
    id: "light_path",
    text: "Sunlight streams through the leaves. You spot a small cottage in the distance.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    choices: [
      {
        text: "Approach the cottage",
        nextId: "approach_cottage",
      },
      {
        text: "Look for a way around",
        nextId: "around_cottage",
      },
    ],
  },
  investigate_sound: {
    id: "investigate_sound",
    text: "You discover a magical creature hiding behind a tree. It seems friendly.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
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
  move_quietly: {
    id: "move_quietly",
    text: "You successfully sneak past whatever was making the noise and find a hidden cave.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
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
  approach_cottage: {
    id: "approach_cottage",
    text: "An old woman welcomes you with fresh-baked cookies and a warm smile.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
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
  around_cottage: {
    id: "around_cottage",
    text: "You find a beautiful garden with mysterious glowing flowers.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
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