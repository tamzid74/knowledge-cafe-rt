import img from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header>
            <div className='flex justify-between border-b-2 m-5 p-5'>
                <h1 className="text-4xl font-bold ">Knowledge Cafe</h1>
                <img src={img} alt="" />
            </div>
            
        </header>
    );
};

export default Header;