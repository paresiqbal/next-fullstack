"use client";

export default function Toggle() {
  return (
    <div className="fixed bg-black/50 w-full h-full z-20 left-0 top-0">
      <div className="bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-12 rounded-md flex flex-col gap-6">
        <h2 className="text-xl">Are you sure want to delete this post ?</h2>
        <h3 className="text-red-600 text-sm">
          Pressing the delete button will delete your post permanently
        </h3>
        <button className="bg-red-500 text-white py-2 px-4 rounded-md">
          Delete Post
        </button>
      </div>
    </div>
  );
}
