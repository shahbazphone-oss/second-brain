export type Note = {
  id: string;
  title: string;
  content: string;
  tags: string[];
  pinned: boolean;
  favorite: boolean;
  createdAt: string;
  updatedAt: string;
};

export const DEFAULT_NOTE: Note = {
  id: "",
  title: "",
  content: "",
  tags: ["new"],
  pinned: false,
  favorite: false,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};
