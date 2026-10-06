export type Note = {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
};

export const DEFAULT_NOTE: Note = {
  id: "",
  title: "",
  content: "",
  tags: ["new"],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};
