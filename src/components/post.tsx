import Link from "next/link";

const PostItem = ({ post }: any) => {
  return (
    <div className="border-2 border-gray-300 p-4 rounded-md">
      <h3 className="text-lg font-bold">{post.title}</h3>
      <p className="text-gray-600">{post.content}</p>
      <div className="flex justify-between items-center mt-4">
        <div>
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-20 h-20 object-cover rounded-md"
          />
        </div>
        <div>
          <Link href={`/posts/${post.id}`}>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
