import React from 'react';


function Footer () {
    
    const today = new Date();

    return (
        <footer className='container'>
            <div className='row justify-content-center mt-3 mb-3'>
                <div className='col-8'>
                    <h5>Team Member Allocation App - {today.getFullYear()}</h5>
                    <div className='copyright text-center p-2'>
                        &copy; dev_twumstine <span className='text-danger'>❤</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;