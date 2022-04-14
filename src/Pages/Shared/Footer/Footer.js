import React from 'react';

const Footer = () => {
    const todate=new Date();
    const year=todate.getFullYear();
    return (
        <div>
            
          <footer className='text-center mt-5'>
          <p><small>Copyright<span>&copy; {year}</span></small></p>
          </footer>
        </div>
    );
};

export default Footer;