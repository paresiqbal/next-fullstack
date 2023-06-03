"use client";

type ToggleProps = {
  deletePost: () => void;
  setToggle: (toggle: boolean) => void;
};

export default function Toggle({ deletePost, setToggle }: ToggleProps) {
  return (
    <div
      className="fixed bg-black/50 w-full h-full left-0 z-40 top-0"
      onClick={(e) => {
        setToggle(false);
      }}
    >
      <div className="absolute bg-white top-1/2 left-1/2 transform -translate-x-1/2 -transy1/2 gap-6 rounded-md p-10 flex flex-col">
        <h2 className="text-xl ">Are you sure want to delete this post 🤔 ?</h2>
        <h3 className="text-red-500 text-sm">
          Pressing the delete button will premanenly delete your post
        </h3>
        <button
          className="bg-red-500 text-sm text-white py-2 px-4 rounded-md"
          onClick={deletePost}
        >
          Delete Post
        </button>
      </div>
    </div>
  );
}
