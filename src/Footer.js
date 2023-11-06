const Footer = () => {
     const companyName = "CWB Mentorship";
     const currentDate = new Date();
     const currentYear = currentDate.getFullYear();

     return (
          <div className="footer-body">
               <p className="footer-content">@copyright {companyName + ' - ' + currentYear}</p>
          </div>
     );
}

export default Footer;