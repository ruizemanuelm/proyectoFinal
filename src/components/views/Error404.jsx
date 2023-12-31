import { Button } from 'react-bootstrap';
import error from '../../assets/error404.gif'
import { Link } from 'react-router-dom';


const Error404 = () => {
    return (
        <section className="mainSection text-center bg-white">
            <img src={error} alt="error 404" className='w-50 h-100'  />
            <div>
            <Button className='mb-5 rounded-0' variant='dark'>
                <Link to={'/'} style={{ color: 'white', textDecoration: 'none' }}>
                    Volver a casa
                </Link>
            </Button>
            </div>
        </section>
    );
};

export default Error404;