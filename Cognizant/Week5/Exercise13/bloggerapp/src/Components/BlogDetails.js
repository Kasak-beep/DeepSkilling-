function BlogDetails() {

    const blogs = [
        {
            id: 1,
            title: "React Hooks",
            author: "Rahul"
        },
        {
            id: 2,
            title: "JavaScript ES6",
            author: "Amit"
        }
    ];

    return (
        <div>
            <h2>Blog Details</h2>

            {blogs.map(blog => (
                <div key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>Author : {blog.author}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default BlogDetails;
