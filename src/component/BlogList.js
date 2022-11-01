import { useSelector } from "react-redux";
import BlogItem from "./BlogItem";

const BlogList = () => {
    const blogs = useSelector((state) => state.blogs);
    const { category, author, searchKey } = useSelector(
        (state) => state.filters
    );
    const categoryFilter = (blog) => {
        return category
            ? blog.category.toLowerCase() === category.toLowerCase()
            : blog;
    };
    const authorFilter = (blog) => {
        return author
            ? blog.author.toLowerCase() === author.toLowerCase()
            : blog;
    };

    const searchFilter = (blog) => {
        return searchKey
            ? blog.category.toLowerCase() === searchKey.toLowerCase() ||
                  blog.author.toLowerCase() === searchKey.toLowerCase()
            : blog;
    };

    return (
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {blogs
                .filter(categoryFilter)
                .filter(authorFilter)
                .filter(searchFilter)
                .map((blog) => (
                    <BlogItem key={blog.id} blog={blog} />
                ))}
        </div>
    );
};

export default BlogList;
