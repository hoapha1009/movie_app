const SideMenu = ({ categories }) => {
    return (
        <>
            <h1 className="my-4">Shop Name</h1>
            <div className="list-group">
                {categories.map((category) => (
                    <a href="#" className="list-group-item" key={category.id}>
                        {category.name}
                    </a>
                ))}
            </div>
        </>
    );
};

export default SideMenu;
