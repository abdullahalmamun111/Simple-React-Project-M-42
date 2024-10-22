import profile from '../../assets/images/profile.png'

const Header = (props) => {
    return (
        <header className='flex justify-between items-center mx-5 p-4 border-b-2'>
            <h1 className='text-4xl font-bold '>Knowledge Cafe </h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;