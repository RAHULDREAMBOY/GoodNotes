import React from "react";
import NoteCard from "../../components/Cards/NoteCard";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 ">
        <NoteCard
          isPinned={true}
          content={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi unde architecto harum a ad, soluta illo corporis ipsa obcaecati, voluptatem deserunt, rerum labore laborum non. Exercitationem, doloribus voluptates. Maxime, voluptatibus."
          }
        />
        <NoteCard
          isPinned={true}
          content={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi unde architecto harum a ad, soluta illo corporis ipsa obcaecati, voluptatem deserunt, rerum labore laborum non. Exercitationem, doloribus voluptates. Maxime, voluptatibus."
          }
        />
        <NoteCard
          isPinned={true}
          content={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi unde architecto harum a ad, soluta illo corporis ipsa obcaecati, voluptatem deserunt, rerum labore laborum non. Exercitationem, doloribus voluptates. Maxime, voluptatibus."
          }
        />
        <NoteCard
          isPinned={true}
          content={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi unde architecto harum a ad, soluta illo corporis ipsa obcaecati, voluptatem deserunt, rerum labore laborum non. Exercitationem, doloribus voluptates. Maxime, voluptatibus."
          }
        />
        <NoteCard
          isPinned={true}
          content={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi unde architecto harum a ad, soluta illo corporis ipsa obcaecati, voluptatem deserunt, rerum labore laborum non. Exercitationem, doloribus voluptates. Maxime, voluptatibus."
          }
        />
      </div>
    </div>
  );
};

export default Home;
