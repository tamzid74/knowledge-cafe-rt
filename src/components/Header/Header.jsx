import img from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header>
            <h1 className="text-4xl font-bold ">Knowledge Cafe</h1>
            <img src={img} alt="" />
        </header>
    );
};

export default Header;