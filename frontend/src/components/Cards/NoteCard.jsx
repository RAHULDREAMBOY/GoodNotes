import React from "react";
import { MdCreate, MdDelete, MdOutlinePushPin } from "react-icons/md";

const NoteCard = ({ title, date, content, isPinned, onPinNote, onEdit }) => {
  return (
    <div className="border rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out">
      <div className="flex items-center justify-between">
        <div>
          <h6 className="text-sm font-medium">Wake up at 6 am</h6>
          <span className="text-sm text-green-700">12th june, 2024</span>
        </div>
        <MdOutlinePushPin
          className={`icon-btn ${isPinned ? "text-primary" : "text-slate-300"}`}
          onClick={onPinNote}
        />
      </div>
      <p className="text-xs text-slate-600 mt-2">{content.slice(0, 60)}</p>
      <div className="flex justify-between items-center mt-4">
        <div className="text-xs text-slate-500">#tags</div>
        <div className="flex items-center gap-2">
          <MdCreate onClick={onEdit} />
          <MdDelete onClick={onEdit} className="icon-btn hover:text-red-500" />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
