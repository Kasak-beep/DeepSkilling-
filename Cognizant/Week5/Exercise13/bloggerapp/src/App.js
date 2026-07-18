import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {

    const showBooks = true;
    const showBlogs = true;
    const showCourses = true;

    return (
        <div style={{ margin: "20px" }}>

            <h1>Blogger App</h1>

            {/* 1. if-else */}
            {showBooks ? <BookDetails /> : <h3>No Books Available</h3>}

            {/* 2. Logical AND */}
            {showBlogs && <BlogDetails />}

            {/* 3. Element Variable */}
            {
                (() => {
                    let component;

                    if (showCourses)
                        component = <CourseDetails />;
                    else
                        component = <h3>No Courses Available</h3>;

                    return component;
                })()
            }

        </div>
    );
}

export default App;
