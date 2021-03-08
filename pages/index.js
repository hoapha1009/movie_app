import { getCategories, getMovies } from "../actions";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import MoveList from "../components/moveList";
import SideMenu from "../components/sideMenu";

const Home = (props) => {
    const { images, movies, categories } = props;

    return (
        <div>
            <div className="home-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <SideMenu categories={categories} />
                        </div>

                        <div className="col-lg-9">
                            <Carousel images={images} />

                            <div className="row">
                                <MoveList movies={movies || []} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

Home.getInitialProps = async () => {
    const movies = await getMovies();
    const categories = await getCategories();
    const images = movies.map((movie) => ({
        id: `image-${movie.id}`,
        url: movie.cover,
        name: movie.name,
    }));

    return {
        movies,
        images,
        categories,
    };
};

export default Home;
