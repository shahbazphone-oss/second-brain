"use client";

import { useEffect, useMemo, useState } from "react";
import { Note, DEFAULT_NOTE } from "@/types/note";

const STORAGE_KEY = "second-brain-notes-v1";

const seedNotes: Note[] = [
  {
    id: "seed-1",
    title: "Welcome to your second brain",
    content: "Capture thoughts, connect ideas, turn them into action.\n\nThis app is built for your iPhone and works as a lightweight personal knowledge base.",
    tags: ["welcome", "setup"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

function parseTags(value: string) {
  return value
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean)
    .filter((tag, index, arr) => arr.indexOf(tag) === index);
}

export default function HomePage() {
  const [notes, setNotes] = useState<Note[]>(seedNotes);
  const [selectedId, setSelectedId] = useState<string>(seedNotes[0].id);
  const [query, setQuery] = useState("");
  const [tagFilter, setTagFilter] = useState<string>("all");
  const [draft, setDraft] = useState<Note>(DEFAULT_NOTE);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Note[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          setNotes(parsed);
          setSelectedId(parsed[0].id);
          setDraft(parsed[0]);
          return;
        }
      } catch {
        // ignore invalid storage
      }
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seedNotes));
  }, []);

  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    }
  }, [notes]);

  useEffect(() => {
    const selected = notes.find((note) => note.id === selectedId) ?? notes[0];
    if (selected) {
      setDraft(selected);
    }
  }, [selectedId, notes]);

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register("/sw.js").catch(() => undefined);
  }, []);

  const allTags = useMemo(
    () => Array.from(new Set(notes.flatMap((note) => note.tags))).sort(),
    [notes]
  );

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      const matchesQuery =
        !query ||
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.content.toLowerCase().includes(query.toLowerCase()) ||
        note.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()));

      const matchesTag = tagFilter === "all" || note.tags.includes(tagFilter);
      return matchesQuery && matchesTag;
    });
  }, [notes, query, tagFilter]);

  const selectedNote = notes.find((note) => note.id === selectedId) ?? filteredNotes[0] ?? null;

  function createNewNote() {
    const now = new Date().toISOString();
    const newNote: Note = {
      id: crypto.randomUUID(),
      title: "Untitled idea",
      content: "",
      tags: ["new"],
      createdAt: now,
      updatedAt: now,
    };

    setNotes((prev) => [newNote, ...prev]);
    setSelectedId(newNote.id);
    setDraft(newNote);
  }

  function saveDraft() {
    const saved = draft.title.trim() || "Untitled idea";
    const next: Note = {
      ...draft,
      title: saved,
      tags: parseTags(draft.tags.join(",")),
      updatedAt: new Date().toISOString(),
    };

    const existing = notes.some((note) => note.id === next.id);

    if (existing) {
      setNotes((prev) => prev.map((note) => (note.id === next.id ? { ...next } : note)));
      return;
    }

    setNotes((prev) => [next, ...prev]);
    setSelectedId(next.id);
  }

  function updateField(field: keyof Note, value: string | string[]) {
    setDraft((prev) => ({ ...prev, [field]: value } as Note));
  }

  function deleteCurrent() {
    if (!selectedNote) return;
    const nextNotes = notes.filter((note) => note.id !== selectedNote.id);
    setNotes(nextNotes);

    if (nextNotes.length === 0) {
      const fresh = { ...DEFAULT_NOTE, id: crypto.randomUUID(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
      setNotes([fresh]);
      setSelectedId(fresh.id);
      setDraft(fresh);
      return;
    }

    setSelectedId(nextNotes[0].id);
  }

  const isDirty = selectedNote ? JSON.stringify(selectedNote) !== JSON.stringify(draft) : false;

  return (
    <main className="app-shell">
      <header className="topbar panel">
        <div>
          <p className="eyebrow">Personal knowledge base</p>
          <h1>Second Brain</h1>
        </div>
        <button className="primary" onClick={createNewNote}>New note</button>
      </header>

      <section className="toolbar panel">
        <input
          aria-label="Search notes"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search notes, tags, content"
        />

        <select value={tagFilter} onChange={(e) => setTagFilter(e.target.value)}>
          <option value="all">All tags</option>
          {allTags.map((tag) => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>
      </section>

      <div className="grid">
        <aside className="panel sidebar">
          <div className="section-head">
            <h2>Notes</h2>
            <span>{filteredNotes.length}</span>
          </div>

          <div className="note-list">
            {filteredNotes.length === 0 ? (
              <p className="muted">No notes match this filter.</p>
            ) : (
              filteredNotes.map((note) => (
                <button
                  key={note.id}
                  className={`note-item ${selectedId === note.id ? "active" : ""}`}
                  onClick={() => setSelectedId(note.id)}
                >
                  <div className="note-item-top">
                    <strong>{note.title}</strong>
                    <span>{new Date(note.updatedAt).toLocaleDateString()}</span>
                  </div>
                  <p>{note.content.slice(0, 80) || "No content yet"}</p>
                  <div className="tags-row">
                    {note.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </button>
              ))
            )}
          </div>
        </aside>

        <section className="panel editor-panel">
          {selectedNote && (
            <>
              <div className="section-head">
                <h2>Edit</h2>
                <div className="actions">
                  {isDirty && <button className="secondary" onClick={saveDraft}>Save</button>}
                  <button className="danger" onClick={deleteCurrent}>Delete</button>
                </div>
              </div>

              <label>
                Title
                <input
                  value={draft.title}
                  onChange={(e) => updateField("title", e.target.value)}
                />
              </label>

              <label>
                Tags
                <input
                  value={draft.tags.join(", ")}
                  onChange={(e) => updateField("tags", parseTags(e.target.value))}
                />
              </label>

              <label>
                Notes
                <textarea
                  value={draft.content}
                  onChange={(e) => updateField("content", e.target.value)}
                />
              </label>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
